
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
import manue from '../Assets/Icons/manue.png'

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


    goToGusal = () => {
        navigation.push('ghusl')
    }

    goToReading = () => {
        navigation.navigate('reading')
    }

    goTODonation = () => {
        navigation.push('tasbi')

    }
    goTODonation = () => {
        navigation.push('sadqahDonation')

    }








    Back = () => {
        navigation.goBack()
    }



    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />

            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: "#0178B9" }}>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => openManue()}  >

                        <Image source={manue} style={{ width: 25, height: 25 }}></Image>

                    </TouchableOpacity>
                </View>
                <View style={{ width: "70%", height: 60, justifyContent: "center", alignItems: "center" }}>

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}></Text>

                </View>
            </View>
            <View style={{ backgroundColor: "#F2F2F2", flex: 1 }}>
                <View style={{ flexDirection: "column", justifyContent: "space-between", paddingLeft: '6%', paddingRight: '6%' }}>


                    <View style={{
                        alignSelf: "center", paddingVertical: 20, paddingHorizontal: 10, marginVertical: "5%",
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
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

                        <TouchableWithoutFeedback onPress={() => navigation.push('prayer')} >

                            <View style={styles.flatView}>
                                <Image source={prayer} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                                <Text style={{ color: '#0178B9', fontSize: 15, marginTop: 10, fontWeight: "bold" }}>Prayer </Text>
                            </View>

                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback onPress={() => goToGusal()}  >

                            <View style={styles.flatView}>
                                <Image source={ghusl} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                                <Text style={{ color: '#0178B9', fontSize: 15, marginTop: 10, fontWeight: "bold" }}>Ghusl </Text>
                            </View>

                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

                        <TouchableWithoutFeedback onPress={() => navigation.push('sadqah')}  >

                            <View style={styles.flatView}>
                                <Image source={sadaqah} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                                <Text style={{ color: '#0178B9', fontSize: 15, marginTop: 10, fontWeight: "bold" }}>Sadaqah </Text>
                            </View>

                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback onPress={() => navigation.push('reading')}  >

                            <View style={styles.flatView}>
                                <Image source={reading} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                                <Text style={{ color: '#0178B9', fontSize: 15, marginTop: 10, fontWeight: "bold" }}>Book Mark </Text>
                            </View>

                        </TouchableWithoutFeedback>
                    </View>






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
        height: 140, width: '42%', padding: 5, flexDirection: 'column', margin: 15, alignItems: 'center', borderRadius: 20, justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }

})