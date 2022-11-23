import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Image, StyleSheet, Text, View, Modal, Button, Pressable, Alert, TextInput } from 'react-native'

const ListTransaction = ({ importe, removeTransaction }) => {
    const [newImport, setNewImport] = useState(importe);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    let dateUpdated = ""

    const remove = () => {
        Alert.alert(
            "Importante !",
            "Estas seguro de que quieres borrar esta transacción ?",
            [{ text: "Cancel", style: "cancel" }, { text: "OK", onPress: () => removeTransaction(importe.id) }]
        );
    }

    // Date
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        dateUpdated = date.toString().substring(0, 10)
        console.log(dateUpdated);
        hideDatePicker();
    };
    //

    const changeDescriptionHandler = (value) => {
        //setNewImport(value.description)
    }

    const changeImportHandler = (value) => {
        //setNewImport(value.importe)
    }

    const update = () => {
        //importe.importe = editImport
    }

    return (
        <View style={styles.listItem}>
            {
                newImport.importe > 0
                    ? <Text style={styles.positive}>{
                        newImport.importe.length >= 5
                            ? newImport.importe.substr(0, 4) + "..."
                            : newImport.importe
                    } €</Text>
                    : <Text style={styles.negative}>{newImport.importe} €</Text>
            }
            <Text style={styles.dayText}> Day: {newImport.fecha}</Text>
            <View style={styles.PressableImages}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Image style={styles.image} source={require('../assets/info.png')} />
                </Pressable>
                <Pressable onPress={() => setModalEdit(true)}>
                    <Image style={styles.image} source={require('../assets/edit.png')} />
                </Pressable>
                <Pressable onPress={() => remove()}>
                    <Image style={styles.image} source={require('../assets/delete.png')} />
                </Pressable>
            </View>
            {/* Modal de informacion de la transacción*/}
            <Modal
                style={styles.centeredView}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Transaction Information:</Text>
                        <Text>Importe: {newImport.importe}</Text>
                        <Text>Descripción: {newImport.description}</Text>
                        <Text>Fecha: {newImport.fecha}</Text>
                        <Pressable
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/* Modal de editar la transacción */}
            <Modal
                style={styles.centeredView}
                animationType="slide"
                transparent={true}
                visible={modalEdit}
                onRequestClose={() => { setModalVisible(!modalVisible) }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Editar transacción: </Text>
                        <TextInput style={styles.importInput} placeholder={"Importe"} onChangeText={changeImportHandler()} value={importe.importe}
                            keyboardType='numeric'></TextInput>
                        <TextInput style={styles.importInput} placeholder={"Descripción"} onChangeText={changeDescriptionHandler()} value={importe.importe}
                        ></TextInput>

                        <Button title="Fecha" onPress={showDatePicker} />

                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />

                        <Pressable onPress={() => update()} style={styles.buttonClose}>
                            <Text>Modificar</Text>
                        </Pressable>

                        <Pressable style={styles.buttonClose}
                            onPress={() => setModalEdit(!modalEdit)}>
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
        height: 50,
        width: 350,
        alignContent: 'flex-end'
    },
    PressableImages: {
        flexDirection: 'row',
        alignContent: 'flex-end'
    },
    centeredView: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
    positive: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        margin: 5
    },
    negative: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        margin: 5
    },
    productNameTrue: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        textDecorationLine: "line-through"
    },
    image: {
        height: 30,
        width: 30,
        margin: 5,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop: 15
    },
    importInput: {
        backgroundColor: '#00cbcc',
        width: 150,
        borderRadius: 5,
        marginVertical: 20
    },
    dayText: {
        fontSize: 11
    }
})

export default ListTransaction