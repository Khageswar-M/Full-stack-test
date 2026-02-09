import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                headerLeft: ({color, size}) => (
                    <Ionicons 
                        name='logo-whatsapp' 
                        color={color} size={30}
                        style={{
                            marginLeft: 10
                        }}
                    />
                )
            }}
            // drawerContent={() => <CommonDrawerComponent />}
            
        >
            <Drawer.Screen
                name='(tabs)'
                options={{
                    title: 'Whatsapp',
                    headerShown: true
                }}
            />
        </Drawer>
    )
}

export default _layout