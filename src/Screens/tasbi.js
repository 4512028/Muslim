
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
import timer from '../Assets/Icons/timer.png';
import Modal from "react-native-modal";
import ModalComponent from '../Compmonent/modalComponenet'
import { Domain } from '../Api/Api';

import down from '../Assets/Icons/down.png';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'






function tasbi({ navigation }) {


    //...........selection of image
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    let [PPrivate, setPPrivate] = useState(false);
    let [PPvalue, setPPvalue] = useState("Public");
    let [list, SetModalList] = useState([]);
    let [modalHeading, setModalHeading] = useState("");
    let [modalVisible, setmodalVisible] = useState(false);

    let [tasbih, setTasbih] = useState("Select Tasbih");
    let [tasbiList, setTasbiList] = useState([
        { value: 'سُبْحَانَ ٱللَّٰهِ', selected: false },
        { value: 'سُبْحَٰنَكَ ٱللَّٰهُمَّ', selected: false },
        { value: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ وَبِحَمْدِهِ', selected: false },
        { value: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَٰنَكَ إِنِّي كُنْتُ مِنَ ٱلظَّٰلِمِينَ', selected: false },

    ]);
    let [PPublic, setPPublic] = useState(false);



    goToGusal = () => {
        navigation.navigate('ghusl')


    }


    Back = () => {
        navigation.pop()
    }

    useEffect(() => {
        if (PPrivate == true) setPPvalue("Private")
        else setPPvalue("Public")
    }, [PPrivate])

    setPrivateDua = () => {
        if (PPrivate == true) {
            setPPrivate(false)
            setPPublic(false)
        }
        else if (PPrivate == false) {
            setPPrivate(true)
            setPPublic(false)
        }

    }
    setPublicDua = () => {
        if (PPublic == true) {
            setPPrivate(false)
            setPPublic(false)
        }
        else if (PPublic == false) {
            setPPrivate(false)
            setPPublic(true)
        }

    }
    displayModal1 = (arry, value) => {

        SetModalList(arry);
        setModalHeading("Tasbih")

        setmodalVisible(!modalVisible)
    };


    onSelectList = async (item) => {
        setmodalVisible(!modalVisible)

        await list.find((itm, i) => {
            if (itm.value == item.value) {
                if (itm.selected == false) {
                    list[i].selected = true;

                    setTasbih(list[i].value);

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


    goToTasbhiCounter = () => {


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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Tasbi</Text>

                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: "#F2F2F2", paddingHorizontal: "5%" }}>

                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >




                    <View style={styles.ImageView}>


                        <Image source={timer} style={{ height: 70, width: 70, borderRadius: 35, alignSelf: 'center', resizeMode: "contain" }} />

                    </View>


                    <  Text style={styles.label}>Name</  Text>
                    <  View style={styles.inputContainer2} >
                        <TextInput

                            style={styles.textField}
                            placeholder="Name "
                            placeholderTextColor='#d5c9de'
                        // value={manuallyAddFund}
                        // onChangeText={(value) => setmanuallyAddFunds(value)}
                        >
                        </TextInput>
                        <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                            {/* <Image source={user} style={{ height: 15, width: 15 }}></Image> */}
                        </View>


                    </  View>

                    <  Text style={styles.label}>Enter Tasbih Amount</  Text>
                    <  View style={styles.inputContainer2} >
                        <TextInput

                            style={styles.textField}
                            placeholder="Amount "
                            placeholderTextColor='#d5c9de'
                            // value={manuallyAddFund}
                            keyboardType='numeric'
                        // onChangeText={(value) => setmanuallyAddFunds(value)}
                        >
                        </TextInput>
                        <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                            {/* <Image source={user} style={{ height: 15, width: 15 }}></Image> */}
                        </View>


                    </  View>





                    <  Text style={styles.label}>Tasbih Suggestions</  Text>
                    <TouchableOpacity onPress={() => displayModal1(tasbiList, "tasbi")}>

                        <View style={styles.inputContainer2}>

                            <View style={{ width: '90%', justifyContent: "center" }}>
                                <Text
                                    style={{
                                        color: '#9a9999',
                                        fontSize: 14,
                                        fontWeight: "600",
                                        alignSelf: 'flex-start',


                                    }}
                                >{tasbih}</Text>
                            </View>

                            <View style={{ width: '10%' }}>
                                <Image source={down}
                                    style={{ width: 20, height: 20, }}
                                />
                            </View>

                        </View>
                    </TouchableOpacity>


                    <  Text style={styles.label}>Other dua</  Text>
                    <  View style={styles.inputContainer2} >
                        <TextInput

                            style={styles.textField}
                            placeholder="Dua "
                            placeholderTextColor='#d5c9de'
                        // value={manuallyAddFund}


                        >
                        </TextInput>
                        <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                            {/* <Image source={user} style={{ height: 15, width: 15 }}></Image> */}
                        </View>


                    </  View>





                    <View style={{ justifyContent: "space-around", alignItems: "center", width: '100%', flexDirection: "row", marginVertical: 20 }}>

                        <TouchableWithoutFeedback onPress={() => setPrivateDua()} >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>

                                <View style={{ padding: 3, backgroundColor: "#919191", flexDirection: "row", borderRadius: 10, marginRight: 10, }}>

                                    {PPrivate == false &&
                                        <View style={{ width: 16, backgroundColor: "white", height: 16, borderRadius: 15 }}>
                                        </View>
                                    }
                                    {PPrivate == true &&
                                        <View style={{ width: 16, backgroundColor: "#0178B9", height: 16, borderRadius: 15 }}>
                                        </View>
                                    }

                                </View>
                                <View >
                                    <Text style={{ color: 'black', fontSize: 15, }}>Group</Text>
                                </View>

                            </View>
                        </TouchableWithoutFeedback >

                        <TouchableWithoutFeedback onPress={() => setPublicDua()} >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>

                                <View style={{ padding: 3, backgroundColor: "#919191", flexDirection: "row", borderRadius: 10, marginRight: 10, }}>

                                    {PPublic == false &&
                                        <View style={{ width: 16, backgroundColor: "white", height: 16, borderRadius: 15 }}>
                                        </View>
                                    }
                                    {PPublic == true &&
                                        <View style={{ width: 16, backgroundColor: "#0178B9", height: 16, borderRadius: 8, }}>
                                        </View>
                                    }

                                </View>
                                <View >
                                    <Text style={{ color: 'black', fontSize: 15, }}>Public</Text>
                                </View>

                            </View>
                        </TouchableWithoutFeedback >

                    </View>

                    <View style={{ justifyContent: "flex-end", width: '100%', flexDirection: "row", paddingLeft: 100, marginVertical: 10 }}>

                        <TouchableWithoutFeedback onPress={() => { }} style={{ width: '50%' }}>
                            <View style={{ paddingStart: 20, paddingEnd: 20, backgroundColor: "#0178B9", borderRadius: 20, height: 32, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, color: "#FFF", textAlign: 'center' }}>Submit Request</Text>

                            </View>
                        </TouchableWithoutFeedback>
                    </View>










                    <View style={{ height: 100 }}></View>

                </KeyboardAwareScrollView>

                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>




        </SafeAreaView >
    )
}
export default tasbi;



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0178B9",




    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',

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
    seperater: {
        height: 1,
        marginBottom: 15,
        backgroundColor: '#d5c9de'
    },

    inputContainer2: {
        //   alignItems: 'flex-start',
        //   justifyContent: 'flex-start',
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 25,
        shadowColor: "#000",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

    label: {

        marginVertical: 10

    },
    textField: {

        fontSize: 15,
        width: "90%",


    },
    ImageView: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: "#0178B9",
        marginTop: "10%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"


    },

})