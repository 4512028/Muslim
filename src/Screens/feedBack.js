
import React, { useState, useEffect, useContext, useRef } from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    Alert,
    TextInput,
    Dimensions,
    FlatList,
    ActivityIndicator,
    TouchableWithoutFeedback,
    TouchableOpacity,
    AsyncStorage,
    ScrollView,
    Button, SafeAreaView
} from "react-native";

import * as Animatable from 'react-native-animatable';
import back from '../Assets/Icons/Arrr.png';
import down from '../Assets/Icons/down.png';

import Modal from "react-native-modal";
import ModalComponent from '../Compmonent/modalComponenet'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


function feedBack({ navigation }) {


    const [msg, setMsg] = useState("");
    const [reason, setReason] = useState("Enquiry");
    const [reasonArry, setReasonArry] = useState([
        { value: 'Enquiry', selected: false },
        { value: 'Technical Issue', selected: false },
        { value: 'Suggestion', selected: false },
        { value: 'Complaint', selected: false },

    ]);
    const [list, SetModalList] = useState([]);
    const [modalHeading, setModalHeading] = useState("");
    const [modalVisible, setmodalVisible] = useState(false);





    //...........selection of image



    displayModal = (arry, value) => {

        SetModalList(arry);
        if (value == "reason") {
            setModalHeading("Reason")
        }
        setmodalVisible(!modalVisible)
    };

    onSelectList = async (item) => {
        setmodalVisible(!modalVisible)

        await list.find((itm, i) => {
            if (itm.value == item.value) {
                if (itm.selected == false) {
                    list[i].selected = true;

                    setReason(list[i].value);

                    SetModalList(list)


                }
            } else {
                list[i].selected = false;
                SetModalList(list)
            }
        });

    }
    togglelefunction = () => {
        setmodalVisible(!modalVisible)
    }


    Back = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />

            {modalVisible &&
                <Modal isVisible={modalVisible} style={{ justifyContent: "flex-end", margin: 0, }} transparent={true}>
                    <ModalComponent modalHeadding={modalHeading} togglelefunction={togglelefunction} list={list} onSelectList={onSelectList} />
                </Modal>
            }

            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: "#0178B9" }}>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.back} styles={{ width: "15%" }} onPress={() => { Back() }}>
                        <Image source={back} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "70%", height: 60, justifyContent: "center", alignItems: "center" }}>

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Feed Back </Text>

                </View>
            </View>


            <View style={{ flex: 1, backgroundColor: "#F2F2F2", paddingHorizontal: "5%" }}>

                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >


                    <TouchableOpacity onPress={() => displayModal(reasonArry, "reason")}>

                        <View style={styles.inputContainer2}>

                            <View style={{ width: '90%', justifyContent: "center" }}>
                                <Text
                                    style={{
                                        color: '#9a9999',
                                        fontSize: 14,
                                        fontWeight: "600",
                                        alignSelf: 'flex-start',


                                    }}
                                >{reason}</Text>
                            </View>

                            <View style={{ width: '10%' }}>
                                <Image source={down}
                                    style={{ width: 20, height: 20, }}
                                />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <View style={[styles.inputContainer]}>
                        <TextInput

                            multiline={true}
                            autoCapitalize="none"
                            placeholder="Your Feedback"
                            placeholderTextColor={'#9a9999'}
                            onChangeText={(val) => { }}


                            style={styles.input2}

                            underlineColorAndroid='transparent' />


                    </View>






                    <View style={{ justifyContent: 'flex-end', width: '100%', flexDirection: "row" }}>

                        <TouchableWithoutFeedback onPress={() => { }} style={{ width: '50%' }}>
                            <View style={{ paddingStart: 20, paddingEnd: 20, backgroundColor: "#0178B9", borderRadius: 20, height: 32, marginTop: 15, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, color: "#FFF", textAlign: 'center' }}>Submit Feedback</Text>

                            </View>
                        </TouchableWithoutFeedback>


                    </View>












                </KeyboardAwareScrollView>
            </View>

        </SafeAreaView >
    )
}
export default feedBack;



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0178B9",
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5

    },

    inputContainer: {
        marginTop: 20,
        backgroundColor: '#FFF',
        borderRadius: 25,
        borderColor: "red",
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    input2: {
        fontSize: 15,
        width: "100%",
        paddingLeft: 20,
        paddingBottom: 140,
        color: '#9a9999',
        marginTop: 10,


    },
    backIcon: {
        height: 25,
        width: 25,
    },
    back: {
        height: 50,
        width: 50,
        marginLeft: 15,
        justifyContent: 'center'
    },


    inputContainer2: {
        //   alignItems: 'flex-start',
        //   justifyContent: 'flex-start',
        marginTop: 20,
        backgroundColor: '#FFF',
        borderRadius: 25,
        shadowColor: "#000",
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

})