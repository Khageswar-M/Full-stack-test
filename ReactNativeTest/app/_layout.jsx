import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const _layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <StatusBar barStyle={'dark-content'} />
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            title: 'Tabs',
            headerShown: false
          }}
        />
      </Stack>
    </SafeAreaView>
  )
}

export default _layout;


