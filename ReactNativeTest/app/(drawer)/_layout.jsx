import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#0f4be3',
        drawerInactiveTintColor: 'hsla(0, 0%, 1%, 0.52)',
        drawerLabelStyle: {
          fontSize: 18
        },
        drawerItemStyle: {
          borderRadius: 19,
          paddingVertical: 5
        },

      }}
    >
      <Drawer.Screen
        name='(home)'
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='home' size={20} color={color} />
          )
        }}
      />

      <Drawer.Screen
        name='(profile)'
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons name='person' size={20} color={color} />
          )
        }}
      />

    </Drawer>
  )
}

export default _layout