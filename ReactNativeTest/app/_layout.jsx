import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name='(drawer)'
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </>
  )
}

export default _layout;

function AppDrawer() {
  return(
    <Drawer
      screenOptions={{
        drawerActiveTintColor: '#0f4be3',
        drawerInactiveTintColor: 'hsla(0, 0%, 1%, 0.52)',
        drawerLabelStyle: {
          fontSize: 18
        },
        drawerItemStyle: {
          borderRadius: 19,
          paddingVertical: 5
        }
      }}
    >
        <Drawer.Screen
          name='(home)'
          options={{
            title: 'Home',
            drawerIcon: ({color, size}) => (
              <Ionicons name='home' size={20} color={color}/>
            )
          }}
        />

        <Drawer.Screen
          name='(profile)'
          options={{
            title: "Profile",
            drawerIcon: ({color, size}) => (
              <Ionicons name='person' size={20} color={color}/>
            )
          }}
        />

      </Drawer>
  )
}

