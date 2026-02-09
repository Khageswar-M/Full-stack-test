import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CommonComponent from '../../../components/CommonComponent';

const Tab = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext(Tab.Navigator);
const _layout = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1}}>
      <CommonComponent/>
      <MaterialTopTabs
        screenOptions={{
          swipeEnabled: true,
          tabBarIndicatorPosition: 'top',
          lazy: true,
          lazyPreloadDistance: 1,
          animationEnabled: true,
          overScrollMode: 'never',
          tabBarIndicatorStyle: {
            backgroundColor: '#0f4be3',
            top: 0,
          },
          tabBarStyle: {
            width: 'auto',
            height: 45,
            borderBottomColor: 'red',
            backgroundColor: '#fff',
          },
          tabBarLabelStyle: {
            fontSize: 11,
            marginTop: -2
          },
          tabBarShowIcon: true,
          tabBarActiveTintColor: '#0f4be3',
          tabBarInactiveTintColor: '#999',
        }}
        tabBarPosition='bottom'
      >
        <MaterialTopTabs.Screen
          name="home"
          options={{
            title: 'Home',
            
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' color={color} size={18} />
            ),
          }}
        />
        <MaterialTopTabs.Screen
          name="notification"
          options={{
            title: 'Notification',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='notifications' color={color} size={18} />
            )
          }}
        />
        <MaterialTopTabs.Screen
          name="screen"
          options={{
            title: 'Screen',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='layers' color={color} size={18} />
            )
          }}
        />
        <MaterialTopTabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='search' color={color} size={18} />
            )
          }}
        />
      </MaterialTopTabs>
    </View>
  )

}

export default _layout