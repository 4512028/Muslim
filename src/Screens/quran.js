
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






function quran({ navigation }) {

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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Quran</Text>

                </View>
            </View>
            <View style={{ backgroundColor: "#FFF", flex: 1 }}>



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

})