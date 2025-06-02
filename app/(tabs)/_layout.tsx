import { Tabs } from 'expo-router';
import { Icon, useTheme } from 'react-native-paper';


export default function TabLayout() {
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:theme.colors.primary,
        headerShown: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Speak!',
          tabBarIcon: ({color}) => <Icon size={28} source="home-circle" color={color}  />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'What?',
          tabBarIcon: ({color}) => <Icon size={28} source="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
