import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'

const ListTransaction = ({ importe }) => {
    const [newImport, setImport] = useState(importe);

    console.log(newImport);

    return (
        <View style={styles.listItem}>
            <Text style={styles.productName}>{newImport.importe} {newImport.fecha}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 15,
        paddingRight: 20,
        backgroundColor: 'white',
    },
    listItemTrue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 15,
        paddingRight: 20,
        backgroundColor: 'grey',
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    productNameTrue: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        textDecorationLine: "line-through"
    },
})

export default ListTransaction