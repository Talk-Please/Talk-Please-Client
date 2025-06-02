import * as React from 'react';
import { List } from 'react-native-paper';

interface ServerSettingsItemProps {
    serverUrl: string;
    serverPort: number;
    onPress: () => void;
}

export const ServerSettingsItem: React.FC<ServerSettingsItemProps> = ({
    serverUrl,
    serverPort,
    onPress,
}) => {
    return (
        <List.Item
        title="Server Settings"
        description={`${serverUrl}:${serverPort}`}
        right={props => <List.Icon {...props} icon="chevron-right" />}
        onPress={onPress}
        left={props => <List.Icon {...props} icon="server" />}
        />
    );
};
