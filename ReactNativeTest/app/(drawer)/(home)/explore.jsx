import { View, Text } from 'react-native'
import { useRouter } from 'expo-router';
const explore = () => {
    const router = useRouter();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Text onPress={() => router.back()}>Go Back</Text> */}
      <Text>Explore</Text>
    </View>
  )
}

export default explore;