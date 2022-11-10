import Input from './components/Input';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image style={styles.image} source={require('./assets/finanzas.png')}/>
        <Text style={styles.textTitle}>My Budget</Text>
      </View>
      <Input/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#00cbcc',
    width: '100%',
    height: 80,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    margin: 10,
  },
  textTitle: {
    fontSize: 40,
  }
});