
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
import surahh from '../Assets/Icons/surah.png';
import qura from '../Assets/Icons/whiteBook.png';
import quraa from '../Assets/Icons/book.png';


import Modal from "react-native-modal";
import ModalComponent from '../Compmonent/othersModal'


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'






function quran({ navigation }) {

    //...........selection of image
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    let [surah, setSurah] = useState([
        { value: 'سُبْحَانَ ٱللَّٰهِ', selected: false },
        { value: 'سُبْحَٰنَكَ ٱللَّٰهُمَّ', selected: false },
        { value: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ وَبِحَمْدِهِ', selected: false },
        { value: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَٰنَكَ إِنِّي كُنْتُ مِنَ ٱلظَّٰلِمِينَ', selected: false },
        { value: 'سُبْحَانَ ٱللَّٰهِ', selected: false },
        { value: 'سُبْحَٰنَكَ ٱللَّٰهُمَّ', selected: false },
        { value: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ وَبِحَمْدِهِ', selected: false },
        { value: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَٰنَكَ إِنِّي كُنْتُ مِنَ ٱلظَّٰلِمِينَ', selected: false },
        { value: 'سُبْحَانَ ٱللَّٰهِ', selected: false },
        { value: 'سُبْحَٰنَكَ ٱللَّٰهُمَّ', selected: false },
        { value: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ وَبِحَمْدِهِ', selected: false },
        { value: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَٰنَكَ إِنِّي كُنْتُ مِنَ ٱلظَّٰلِمِينَ', selected: false },

    ]);
    let [quranpara, setquranpara] = useState([

        { value: 'سُبْحَانَ ٱللَّٰهِ para1', selected: false },
        { value: 'سُبْحَٰنَكَ ٱللَّٰهُمَّ para2', selected: false },
        { value: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ وَبِحَمْدِهِ para3 ', selected: false },
        { value: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَٰنَكَ إِنِّي كُنْتُ مِنَ ٱلظَّٰلِمِينَ para4', selected: false },
        { value: 'سُبْحَانَ ٱللَّٰهِ para1', selected: false },
        { value: 'سُبْحَٰنَكَ ٱللَّٰهُمَّ para2', selected: false },
        { value: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ وَبِحَمْدِهِ para3 ', selected: false },
        { value: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَٰنَكَ إِنِّي كُنْتُ مِنَ ٱلظَّٰلِمِينَ para4', selected: false },
        { value: 'سُبْحَانَ ٱللَّٰهِ', selected: false },
        { value: 'سُبْحَٰنَكَ ٱللَّٰهُمَّ', selected: false },
        { value: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ وَبِحَمْدِهِ', selected: false },
        { value: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَٰنَكَ إِنِّي كُنْتُ مِنَ ٱلظَّٰلِمِينَ', selected: false },
    ]);
    let [modalVisible, setmodalVisible] = useState(false);

    let [list, SetModalList] = useState([]);
    let [modalHeading, setModalHeading] = useState("");
    let [selectedPrayer, setSelectedPrayer] = useState("");




    Back = () => {
        navigation.pop()
    }
    displayModal2 = (arry, value) => {
        SetModalList(arry);
        if (value == "Quran") {
            setModalHeading("Quran")
        }
        else if (value == "Surah") {
            setModalHeading("Surah")
        }
        setmodalVisible(!modalVisible)
    };

    onSelectList1 = async (item) => {

        await list.find((itm, i) => {
            if (itm.value == item.value) {
                if (itm.selected == false) {
                    list[i].selected = true;
                    if (modalHeading == "Quran") setSelectedPrayer((list[i].value));
                    else if (modalHeading == "Surah") setSelectedPrayer(list[i].value)
                    SetModalList(list)
                }
                if (itm.selected == false) {
                    list[i].selected = true;
                    if (modalHeading == "Quran") setSelectedPrayer((list[i].value));
                    else if (modalHeading == "Surah") setSelectedPrayer(list[i].value)
                    SetModalList(list)
                }
            }
        });
        console.log(list)
    }


    togglelefunction = () => {
        setmodalVisible(!modalVisible)
    }
    selectedItem = () => {

    }
    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />
            {modalVisible &&
                <Modal isVisible={modalVisible} style={{ justifyContent: "center", }} transparent={true}>
                    <ModalComponent modalHeadding={modalHeading} togglelefunction={togglelefunction} list={list} onSelectList={onSelectList1} goToNextScreen={togglelefunction} />
                </Modal>
            }
            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: "#0178B9" }}>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.back} styles={{ width: "15%" }} onPress={() => { Back() }}>
                        <Image source={back} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "70%", height: 60, justifyContent: "center", alignItems: "center" }}>

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Quran</Text>

                </View>
            </View>
            <View style={{ backgroundColor: "#F2F2F2", flex: 1, padding: 20 }}>

                <View style={styles.ImageView}>


                    <Image source={qura} style={{ height: 70, width: 70, alignSelf: 'center', resizeMode: "contain" }} />

                </View>
                <TouchableOpacity style={[styles.flatView,]} onPress={() => displayModal2(quranpara, "Quran")}>
                    <View style={{ flexDirection: 'row', width: "100%" }}>
                        <View style={{ width: "50%" }}>
                            <Image source={quraa} style={{ alignSelf: 'center', width: 60, height: 60, resizeMode: "contain" }} />
                        </View>
                        <View style={{ width: "50%", justifyContent: "center" }}>
                            <Text style={{ color: '#0178B9', fontSize: 17, marginTop: 10, fontWeight: "bold", textAlign: "center" }}>PARA</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flatView,]} onPress={() => displayModal2(surah, "Surah")}>
                    <View style={{ flexDirection: 'row', width: "100%" }}>
                        <View style={{ width: "50%" }}>
                            <Image source={surahh} style={{ alignSelf: 'center', width: 60, height: 60, resizeMode: "contain" }} />
                        </View>
                        <View style={{ width: "50%", justifyContent: "center" }}>
                            <Text style={{ color: '#0178B9', fontSize: 17, marginTop: 10, fontWeight: "bold", textAlign: "center" }}>SURAH</Text>
                        </View>
                    </View>
                </TouchableOpacity>




                <TouchableOpacity style={styles.button} >
                    <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Save </Text>
                </TouchableOpacity>





                {isAnimating &&

                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>


        </SafeAreaView >
    )
}
export default quran;



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0178B9",




    },

    ImageView: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: "#0178B9",
        marginVertical: "10%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",


    },
    flatView: {
        width: '70%',
        marginBottom: "3%",
        paddingTop: '4%',
        paddingBottom: "4%",
        paddingLeft: '2%',
        paddingRight: '2%',
        borderRadius: 10,
        alignSelf: "center",
        backgroundColor: 'white',
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
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


})