import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Modal, StyleSheet, TextInput, View, Text, Pressable } from 'react-native';

const ProductInput = ({ onProductAdd }) => {
    let transaccion = {
        id: uuidv4(),
        fecha: "",
        importe: 0,
        description: "",
    }
    const [importe, setImporte] = useState(transaccion);
    const [modalVisible, setModalVisible] = useState(false);

    const changeTextHandler = (value) => {
        setImporte(value);
    }

    const addProductHandler = () => {
        const sanitizedName = importe.trim()
        if (sanitizedName !== '') {
            onProductAdd(sanitizedName);
        }
        setImporte('');
    }

    return (
        <View style={styles.productInput}>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "cyan",
        width: '100%',
        height: 150,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
});

export default ProductInput;