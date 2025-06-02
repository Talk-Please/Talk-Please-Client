import { database } from '@/db/';
import Settings from '@/db/models/settings';

export class MessageService {
    private static async getServerConfig() {
    try {
        const settings = await database.get<Settings>('settings').query().fetch();

        if (settings.length === 0) {
        console.log("No settings found, using default values");
        return { serverUrl: "localhost", serverPort: 9008 };
        }

        return {
        serverUrl: settings[0].serverUrl,
        serverPort: settings[0].serverPort,
        };
    } catch (error) {
        console.error("Error fetching server config:", error);
        return { serverUrl: "localhost", serverPort: 9008 };
    }
    }

static async sendMessage(message: string): Promise<void> {
    const { serverUrl, serverPort } = await this.getServerConfig();
    
    console.log("Server URL:", serverUrl);
    console.log("Server Port:", serverPort);

    return new Promise((resolve, reject) => {
        const ws = new WebSocket(`ws://${serverUrl}:${serverPort}`);
        ws.onopen = () => {
        ws.send(message);
        ws.close();
        resolve();
        };

        ws.onerror = (error) => {
        console.log('WebSocket Error:', error);
        ws.close();
        reject(error);
        };

        ws.onclose = () => {
        resolve();
        };
    });
    }
}
