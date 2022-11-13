import Input from './components/Input';
import ListTransaction from './components/ListTransaction';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [transaction, setTransaction] = useState([]);

  let names = []
  if (transaction) {
    transaction.forEach(element => {
      names.push(element.description)
    });
  }

  const addProductHandler = (imports) => {
    setTransaction(() => [...transaction, imports])
  }

  let totalPrice = 0;

  for (let i = 0; i < transaction.length; i++) {
    totalPrice += parseInt(transaction[i].importe);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image style={styles.image} source={require('./assets/finanzas.png')} />
        <Text style={styles.textTitle}>My Budget</Text>
      </View>
      <View style={styles.backgroundColorView}>
        <Text style={styles.textStylePrice}>{totalPrice} €</Text>
      </View>
      <Input onImportAdd={addProductHandler} />
      <ScrollView>
        {
          names.length === 0
            ? <Text style={styles.textEmpty}>Sin Transacciones</Text>
            : transaction.map((importe, idx) => (
              <ListTransaction
                key={idx + importe}
                importe={importe} />
            ))
        }
      </ScrollView>
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
    height: 90,
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
  },
  textEmpty: {
    textAlign: 'center',
    marginTop: '5%',
    marginTop: 200
  },
  backgroundColorView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "cyan",
    width: '100%',
    height: 60,
    justifyContent: 'center',
    justifyContent: 'flex-end'
  },
  textStylePrice: {
    fontSize: 40
  }
});