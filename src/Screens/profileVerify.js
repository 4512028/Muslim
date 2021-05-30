
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
import Profile from '../Assets/Icons/profile.png';
import Camera from '../Assets/Icons/camera.png';
import placeholder from '../Assets/Icons/placeholder.png';
import selectImage from '../Assets/Icons/selectImage.png';
import { Domain } from '../Api/Api';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import * as ImagePicker from "react-native-image-picker"



function profileVerification({ navigation }) {

    //...........selection of image

    const [response, setResponse] = useState(null);
    const [response2, setResponse2] = useState(null);
    const [isSelected1, setSelected1] = useState(false);
    const [isSelected2, serSelected2] = useState(false);
    const [isAnimating, setAnimating] = useState(false);
    const [isDisabled, setDisabled] = useState(false);



    Back = () => {
        navigation.goBack()
    }

    //...........selection of image
    selectImagee = (value) => {



        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response) => {
                if (value == 1) {
                    setResponse(response)
                    setSelected1(true)
                }
                else {
                    setResponse2(response)
                    serSelected2(true)
                }

            },
        )
    }



    //  image will be be cancel if user tab to cancel button 
    cancelImage = () => {

        console.log("umer")

        setimageUrl({ selectImage: "" })

    }


    VerificationProfile = async () => {

        if (response == null) {
            alert("Please Select photo id")
            return
        }
        if (response2 == null) {
            alert("Please Select proof of address")
            return
        }

        setDisabled(true)
        setAnimating(true)
        var data = new FormData();
        const id = await AsyncStorage.getItem('userID');
        data.append("userid", id)
        data.append("action", "verify")
        data.append("photo_id", {
            uri: response.uri,
            name: 'photo_id.jpg',
            type: 'photo_id/jpg'
        })
        data.append("address_image", {
            uri: response2.uri,
            name: 'address_image.jpg',
            type: 'address_image/jpg'
        })



        fetch(Domain + '/apis/core.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': "multipart/form-data",
            },
            body: data

        }).then((response) => response.text())
            .then(async (responseText) => {

                let responseData = JSON.parse(responseText);
                console.log(responseData)
                if (responseData.status === true) {
                    setDisabled(false)
                    setAnimating(false)
                    alert(responseData.msg)
                }
                else {

                    alert(responseData.msg)
                    setDisabled(false)
                    setAnimating(false)
                }
            })
            .catch((error) => {
                console.log("error from addKin  API", error);
                setDisabled(false)
                setAnimating(false)
            });
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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Verify Profile </Text>

                </View>
            </View>
            <View style={{ backgroundColor: "#FFF", flex: 1 }}>
                <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false} >
                    <Animatable.Text animation="fadeInUp" style={{ fontSize: 18, alignSelf: "center", textAlign: "center", marginVertical: 30, marginHorizontal: "20%", color: "#0178B9", fontWeight: "bold" }}>Upload one photo ID and one proof of Address</Animatable.Text>

                    <View style={{ width: "90%", marginHorizontal: "5%", flexDirection: "row" }}>
                        <View style={{ width: "50%", alignItems: "center", justifyContent: "center" }}>
                            <Text animation="fadeInUp" style={{ fontSize: 16, marginVertical: 10, }}>Upload photo ID  </Text>

                            <TouchableOpacity onPress={() => { selectImagee(1) }} >
                                <View style={styles.button} >
                                    <Text style={{ color: 'black', fontSize: 17, }}>Select </Text>
                                    <Image source={selectImage} style={{ width: 30, height: 30, resizeMode: "contain" }}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 150, alignItems: "center", justifyContent: "center", width: "50%", alignSelf: "center", backgroundColor: "#ECECEC" }}>

                            <Image source={isSelected1 == true ? response : placeholder} style={{ width: "100%", height: 150, resizeMode: "contain" }}></Image>


                        </View>


                    </View>
                    <View style={{ width: "90%", marginHorizontal: "5%", flexDirection: "row", marginTop: 20 }}>
                        <View style={{ width: "50%", alignItems: "center", justifyContent: "center" }}>
                            <Text animation="fadeInUp" style={{ fontSize: 16, marginVertical: 10, }}>Proof of address  </Text>
                            <TouchableOpacity onPress={() => { selectImagee(2) }} >
                                <View style={styles.button} >
                                    <Text style={{ color: 'black', fontSize: 17, }}>Select </Text>
                                    <Image source={selectImage} style={{ width: 30, height: 30, resizeMode: "contain" }}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 150, alignItems: "center", justifyContent: "center", width: "50%", alignSelf: "center", backgroundColor: "#ECECEC" }}>
                            <Image source={isSelected2 == true ? response2 : placeholder} style={{ width: "100%", height: 150, resizeMode: "contain" }}></Image>


                        </View>


                    </View>


                    <TouchableOpacity style={styles.button1} onPress={() => VerificationProfile()} >
                        <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Update </Text>
                    </TouchableOpacity>





                </ScrollView>
                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>

        </SafeAreaView >
    )
}
export default profileVerification;



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
    label: {
        fontWeight: 'bold',
        marginBottom: 5

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
        marginTop: 10,
        flexDirection: "row",
        alignSelf: "flex-end",
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: '#B7D9E6',
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
    button1: {
        marginTop: 40,
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