
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
import { Domain } from '../Api/Api';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'




import sadaqah from '../Assets/Icons/sadaqah.png';
import prayer from '../Assets/Icons/prayer.png';
import ghusl from '../Assets/Icons/shower.png';




function reading({ navigation }) {

    //...........selection of image
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);


    goToGusal = () => {
        navigation.navigate('ghusl')


    }


    Back = () => {
        navigation.goBack()
    }


    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />

            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: "#0178B9" }}>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.back} styles={{ width: "15%" }} onPress={() => { Back() }}>
                        <Image source={back} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "70%", height: 60, justifyContent: "center", alignItems: "center" }}>

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Details</Text>

                </View>
            </View>
            <View style={{ backgroundColor: "#FFF", flex: 1, paddingHorizontal: "6%", paddingTop: "6%" }}>

                <TouchableOpacity style={[styles.flatView,]} onPress={() => alert("DETAIL")} >
                    <View style={{ flexDirection: 'row', width: "100%" }}>
                        <View style={{ width: "20%" }}>
                            <Image source={prayer} style={{ alignSelf: 'center', width: 40, height: 40 }} />
                        </View>
                        <View style={{ width: "80%", justifyContent: "center" }}>
                            <Text style={{ color: 'black', fontSize: 15, }}>Prayer </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.flatView,]} onPress={() => alert("DETAIL")} >
                    <View style={{ flexDirection: 'row', width: "100%" }}>
                        <View style={{ width: "20%" }}>
                            <Image source={ghusl} style={{ alignSelf: 'center', width: 40, height: 40 }} />
                        </View>
                        <View style={{ width: "80%", justifyContent: "center" }}>
                            <Text style={{ color: 'black', fontSize: 15, }}>Ghusl </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.flatView,]} onPress={() => alert("DETAIL")} >
                    <View style={{ flexDirection: 'row', width: "100%" }}>
                        <View style={{ width: "20%" }}>
                            <Image source={sadaqah} style={{ alignSelf: 'center', width: 40, height: 40 }} />
                        </View>
                        <View style={{ width: "80%", justifyContent: "center" }}>
                            <Text style={{ color: 'black', fontSize: 15, }}>Sadaqah </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {isAnimating &&

                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>


        </SafeAreaView >
    )
}
export default reading;



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