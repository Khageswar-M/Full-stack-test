import { View, Text } from 'react-native'
import PagerView from 'react-native-pager-view'
const home = () => {
  return (
    <PagerView style={{flex: 1}} initialPage={0}>
      <View key="1" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text >Home page 1</Text>
      </View>
      <View key="2" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>➡️ Home Page 2</Text>
      </View>
    </PagerView>
  )
}

export default home