import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const _layout = () => {
  return (<>
    <Stack screenOptions={{ headerShown: false }} />
    {/* <HomeTabs/> */}
  </>
  )
}

export default _layout;