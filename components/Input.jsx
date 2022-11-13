import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Modal, StyleSheet, TextInput, View, Text, Pressable, Alert } from 'react-native';

const Input = ({ onImportAdd }) => {
    let transaccion = {
        id: uuidv4(),
        fecha: new Date().toLocaleString(),
        importe: 0,
        description: "",
    }
    const [importe, setImporte] = useState(transaccion);

    const [modalVisible, setModalVisible] = useState(false);

    const changeImportHandler = (value) => {
        setImporte({ ...importe, importe: value })
    }

    const changeDescriptionHandler = (value) => {
        setImporte({ ...importe, description: value })
    }
    const addProductHandler = () => {
        onImportAdd(importe);
        setImporte({ ...importe, description: "", importe: 0 })
    }
    const alertFields = () => Alert.alert(
        "Importante !",
        "Rellena todos los campos para añadir una transacción.",
        [
            {
                text: "Cancel",
                style: "cancel"
            },
            { text: "OK" }
        ]
    );

    let precioTotal = 0;
    let tusmu = parseInt(importe.importe)
    precioTotal += tusmu

    return (
        <View style={styles.Input}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textStyle}>Nueva Transacción :</Text>
                        <TextInput style={styles.importInput} placeholder={"Importe"}
                            value={importe.importe} keyboardType='numeric' onChangeText={changeImportHandler}></TextInput>
                        <TextInput style={styles.importInput} placeholder={"Descripción"}
                            value={importe.description} multiline numberOfLines={3} onChangeText={changeDescriptionHandler}></TextInput>
                        {
                            importe.description !== "" && importe.importe !== 0
                                ? <Pressable
                                    style={styles.buttonClose}
                                    onPress={addProductHandler}>
                                    <Text>Añadir Transacción</Text>
                                </Pressable>
                                : <Pressable
                                    style={styles.buttonDisable} onPress={alertFields}>
                                    <Text>Añadir Transacción</Text>
                                </Pressable>
                        }
                        <Pressable style={styles.buttonClose} onPress={() => setModalVisible(!modalVisible)}>
                            <Text>Cerrar Pestaña</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable style={styles.buttonOpen} onPress={() => setModalVisible(true)}>
                <Text>Nueva Transacción</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    Input: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "cyan",
        width: '100%',
        height: 90,
        justifyContent: 'center',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'space-evenly'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 70,
        paddingHorizontal: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonOpen: {
        backgroundColor: "#00cbcc",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignItems: 'flex-end'
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop: 30
    },
    importInput: {
        backgroundColor: '#00cbcc',
        width: 150,
        borderRadius: 5,
        marginVertical: 20
    },
    textStyle: {
        fontSize: 20
    },
    buttonDisable: {
        backgroundColor: "#0088a3",
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    textStylePrice: {
        fontSize: 40
    }
});

export default Input;