
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
import Camera from '../Assets/Icons/camera.png';
import Modal from "react-native-modal";
import ModalComponent from '../Compmonent/othersModal'


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import sadaqah from '../Assets/Icons/sadaqah.png';
import prayer from '../Assets/Icons/prayer.png';
import ghusl from '../Assets/Icons/shower.png';
import reading from '../Assets/Icons/reading.png';




function others({ navigation }) {

    //...........selection of image
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    let [modalVisible, setmodalVisible] = useState(false);

    let [prayers, setPrayers] = useState([
        { value: 'Dua', selected: false },
        { value: 'Tasbi', selected: false },
        { value: 'Quran', selected: false },
    ]);
    let [sadaqha, setSadaqha] = useState([
        { value: 'Build a Masjid', selected: false },
        { value: 'Clean Water ', selected: false },
        { value: 'Food Aid', selected: false },
        { value: 'Tree', selected: false },


    ]);
    let [list, SetModalList] = useState([]);
    let [modalHeading, setModalHeading] = useState("");
    let [selectedPrayer, setSelectedPrayer] = useState("");
    let [selectedSadaqah, setSelectedSadaqah] = useState("");



    goToGusal = () => {
        navigation.navigate('ghusl')
    }

    goToReading = () => {
        navigation.navigate('reading')
    }


    goToDua = () => {
        navigation.navigate('dua')
        setSelectedPrayer("")
        setmodalVisible(!modalVisible)

    }
    goToQuran = () => {
        navigation.navigate('tasbi')
        setSelectedPrayer("")
        setmodalVisible(!modalVisible)

    }
    goToTasbi = () => {
        navigation.navigate('quran')
        setSelectedPrayer("")
        setmodalVisible(!modalVisible)



    }


    goToNextScreen = (value) => {

        if (modalHeading == "Prayer") {
            if (selectedPrayer == "Dua") goToDua()
            else if (selectedPrayer == "Tasbi") goToTasbi()
            else if (selectedPrayer == "Quran") goToQuran()


        }

    }






    Back = () => {
        navigation.goBack()
    }


    displayModal = (arry, value) => {
        SetModalList(arry);
        if (value == "prayers") {
            setModalHeading("Prayer")
        }
        else if (value == "Sadaqah") {
            setModalHeading("Sadaqah")
        }
        setmodalVisible(!modalVisible)
    };

    onSelectList = async (item) => {

        await list.find((itm, i) => {
            if (itm.value == item.value) {
                if (itm.selected == false) {
                    list[i].selected = true;
                    if (modalHeading == "Prayer") setSelectedPrayer((value) => value = list[i].value);
                    else setSelectedSadaqah((value) => value = list[i].value);
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

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />

            {modalVisible &&
                <Modal isVisible={modalVisible} style={{ justifyContent: "center", }} transparent={true}>
                    <ModalComponent modalHeadding={modalHeading} togglelefunction={togglelefunction} list={list} onSelectList={onSelectList} goToNextScreen={goToNextScreen} />
                </Modal>
            }

            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: "#0178B9" }}>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.back} styles={{ width: "15%" }} onPress={() => { Back() }}>
                        <Image source={back} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "70%", height: 60, justifyContent: "center", alignItems: "center" }}>

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}></Text>

                </View>
            </View>
            <View style={{ backgroundColor: "#FFF", flex: 1 }}>
                <View style={{ flexDirection: "column", justifyContent: "space-between", paddingLeft: '6%', paddingRight: '6%' }}>


                    <View style={{
                        alignSelf: "center", paddingVertical: 10, paddingHorizontal: 10, marginVertical: "5%",
                        width: "80%", borderRadius: 30,
                        backgroundColor: '#0178B9',
                    }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 18, textAlign: "center", color: "white", fontWeight: "bold" }}>كُلُّ نَفْسٍ ذَآئِقَةُ الْمَوْتِ </ Text>

                        </View>
                        <View style={{}}>
                            <Text style={{ color: 'white', textAlign: "center", fontSize: 15, }}>"Every soul shall taste death" -(surah 3: verse 185) </Text>
                        </View>
                    </View>



                    <TouchableOpacity style={[styles.flatView,]} onPress={() => displayModal(prayers, "prayers")}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <View style={{ width: "20%" }}>
                                <Image source={prayer} style={{ alignSelf: 'center', width: 40, height: 40 }} />
                            </View>
                            <View style={{ width: "80%", justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 15, }}>Prayer </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.flatView,]} onPress={() => goToGusal()} >
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <View style={{ width: "20%" }}>
                                <Image source={ghusl} style={{ alignSelf: 'center', width: 40, height: 40 }} />
                            </View>
                            <View style={{ width: "80%", justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 15, }}>Ghusl </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.flatView,]} onPress={() => displayModal(sadaqha, "Sadaqah")}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <View style={{ width: "20%" }}>
                                <Image source={sadaqah} style={{ alignSelf: 'center', width: 40, height: 40 }} />
                            </View>
                            <View style={{ width: "80%", justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 15, }}>Sadaqah </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.flatView,]} onPress={() => goToReading()} >
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <View style={{ width: "20%" }}>
                                <Image source={reading} style={{ alignSelf: 'center', width: 40, height: 40 }} />
                            </View>
                            <View style={{ width: "80%", justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 15, }}>Book Mark </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>


                {isAnimating &&

                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>
        </SafeAreaView >
    )
}
export default others;



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0178B9",




    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5

    },
    textField: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,

        fontSize: 15,
        width: "90%",


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
    ImageView: {
        height: 150,
        width: 150,
        borderRadius: 75,
        alignItems: "center", justifyContent: "center",
        backgroundColor: "#F4F4F4"


    },
    button: {
        marginTop: 30,
        marginBottom: 150,
        alignSelf: 'center',
        height: 50,
        width: "70%",
        backgroundColor: '#0178B9',
        justifyContent: 'center',
        borderRadius: 11,
        alignItems: 'center',
        shadowColor: "#111111",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
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


    flatView: {
        width: '100%',
        marginBottom: "3%",
        paddingTop: '4%',
        paddingBottom: "4%",
        paddingLeft: '2%',
        paddingRight: '2%',
        borderRadius: 10,

        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }

})