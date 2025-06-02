import * as React from 'react';
import { View } from 'react-native';
import { Modal, Portal, Text, Card, TextInput } from 'react-native-paper';
import { styles } from './styles';

interface ServerSettingsModalProps {
    visible: boolean;
    onDismiss: () => void;
    serverUrl: string;
    serverPort: number;
    onServerUrlChange: (url: string) => void;
    onServerPortChange: (port: number) => void;
    onUpdateSettings: (url: string, port: number) => void;
}

export const ServerSettingsModal: React.FC<ServerSettingsModalProps> = ({
    visible,
    onDismiss,
    serverUrl,
    serverPort,
    onServerUrlChange,
    onServerPortChange,
    onUpdateSettings,
    }) => {
    const handleUrlChange = (text: string) => {
        onServerUrlChange(text);
        onUpdateSettings(text, serverPort);
    };

    const handlePortChange = (text: string) => {
        const port = Number(text);
        onServerPortChange(port);
        onUpdateSettings(serverUrl, port);
    };

    return (
        <Portal>
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
            <Card style={{ flex: 1 }}>
            <Card.Title title="Address Settings" />
            <Card.Content>
                <View style={styles.inputContainer}>
                <View style={styles.urlInput}>
                    <TextInput
                    label="Server URL"
                    value={serverUrl}
                    onChangeText={handleUrlChange}
                    mode="outlined"
                    />
                </View>
                <Text style={styles.separator}>:</Text>
                <View style={styles.portInput}>
                    <TextInput
                    label="Server Port"
                    value={serverPort.toString()}
                    onChangeText={handlePortChange}
                    mode="outlined"
                    keyboardType="numeric"
                    />
                </View>
                </View>
            </Card.Content>
            </Card>
        </Modal>
        </Portal>
    );
};
