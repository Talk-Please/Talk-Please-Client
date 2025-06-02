import * as React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import { useServerSettings } from '@/hooks/useServerSettings';
import { ServerSettingsModal } from '@/components/Settings/ServerSettingsModal';
import { ServerSettingsItem } from '@/components/Settings/ServerSettingsItem';

export default function setting() {
  const {
    serverUrl,
    serverPort,
    setServerUrl,
    setServerPort,
    updateSettings,
  } = useServerSettings();

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View>
      <Divider />
      <ServerSettingsItem
        serverUrl={serverUrl}
        serverPort={serverPort}
        onPress={showModal}
      />
      <ServerSettingsModal
        visible={visible}
        onDismiss={hideModal}
        serverUrl={serverUrl}
        serverPort={serverPort}
        onServerUrlChange={setServerUrl}
        onServerPortChange={setServerPort}
        onUpdateSettings={updateSettings}
      />
    </View>
  );
}
