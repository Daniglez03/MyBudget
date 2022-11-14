import Input from './components/Input';
import ListTransaction from './components/ListTransaction';
import { StyleSheet, View, Image, Text, ScrollView, Pressable } from 'react-native';
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

  const removeAllTransactionsHandler = () => {
    setTransaction('')
  }

  let totalPrice = 0;

  for (let i = 0; i < transaction.length; i++) {
    totalPrice += parseInt(transaction[i].importe);
  }

  const removeTransaction = (imports) => {
    setTransaction(() => transaction.filter((i) => i.description != imports));
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
                importe={importe}
                removeTransaction={removeTransaction}/>
            ))
        }
      </ScrollView>
      <View style={styles.View}>
      {
        names.length === 0
          ? <Pressable style={styles.buttonDisabled}>
            <Text style={styles.text}>Clear</Text>
          </Pressable>
          : <Pressable style={styles.button} onPress={removeAllTransactionsHandler}>
            <Text style={styles.text}>Clear</Text>
          </Pressable>
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  View: {
    justifyContent: 'flex-end'
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
  },
  buttonDisabled: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
    width: 80,
    backgroundColor: '#7f0000',
    marginBottom: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
    width: 80,
    backgroundColor: '#e53935',
    marginBottom: 15,
  },
});