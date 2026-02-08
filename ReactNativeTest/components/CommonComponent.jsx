import { StyleSheet, Text, View } from 'react-native';

const CommonComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I appear on every tab 🚀</Text>
    </View>
  )
}

export default CommonComponent;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#e6f0ff',
  },
  text: {
    fontWeight: '600',
  },
});