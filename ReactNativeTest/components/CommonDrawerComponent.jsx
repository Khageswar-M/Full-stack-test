import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { router } from 'expo-router'
const CommonDrawerComponent = () => {
  return (
    <DrawerContentScrollView>

        <View style={{padding: 16}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                My App
            </Text>
        </View>

        <DrawerItem
            label="Home"
            onPress={() => router.push('/home')}
        />

        <DrawerItem
            label="Notifications"
            onPress={() => router.push('/notifications')}
        />

        <DrawerItem
            label="Settings"
            onPress={() => alert('/settings')}
        />

    </DrawerContentScrollView>
  )
}

export default CommonDrawerComponent;