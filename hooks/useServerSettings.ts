import { database } from '@/db';
import Settings from '@/db/models/settings';
import * as React from 'react';

export const useServerSettings = () => {
    const [serverUrl, setServerUrl] = React.useState("localhost");
    const [serverPort, setServerPort] = React.useState(9008);

    React.useEffect(() => {
        const sub = database.get<Settings>('settings').query().observe().subscribe((settings) => {
        settings.forEach((setting) => {
            if (setting.serverUrl) {
            setServerUrl(setting.serverUrl);
            }
            if (setting.serverPort) {
            setServerPort(setting.serverPort);
            }
        });
        });
        return () => sub.unsubscribe();
    }, []);

    const updateSettings = React.useCallback(async (url: string, port: number) => {
        try {
        const settings = await database.get<Settings>('settings').query().fetch();
        if (settings.length > 0) {
            await database.write(async () => {
            await settings[0].update((s) => {
                s.serverUrl = url;
                s.serverPort = port;
            });
            });
        }
        } catch (error) {
        console.error('Failed to update settings:', error);
        }
    }, []);

    return {
        serverUrl,
        serverPort,
        setServerUrl,
        setServerPort,
        updateSettings,
    };
};
