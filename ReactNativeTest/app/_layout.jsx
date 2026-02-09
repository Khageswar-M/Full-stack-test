import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const _layout = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={{flex: 1}}>
      <StatusBar style='dark' />
      <Stack>
        <Stack.Screen
          name='(drawer)'
          options={{
            title: 'Home',
            headerShown: false
          }}
        />
      </Stack>
    </View>
  )
}

export default _layout;


