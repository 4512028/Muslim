
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
var validator = require("email-validator");

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import Profile from '../Assets/Icons/profile.png';
import edit from '../Assets/Icons/edit.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'
import post from '../Assets/Icons/post.png'
import phone from '../Assets/Icons/phone.png'
import userP from '../Assets/Icons/userP.png'

import { Domain } from '../Api/Api';

function nextToKin({ navigation }) {


    const [firstName, setFirstName] = useState("");
    const [emailAdress, setEmail] = useState("");
    const [address, setAddres] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [town, setTown] = useState("");
    const [isAnimating, setAnimating] = useState(false);
    const [isDisabled, setDisabled] = useState(false);



    const addKin = async () => {
        if (firstName.trim() === "") {
            alert("First Name is required!");
            return
        }

        else if (address.trim() === "") {
            alert("Address is required!");
            return
        } else if (phoneNumber.trim() === "") {
            alert("phone Number is required!");
            return
        }
        else if (postalCode.trim() === "") {
            alert("postal Code is required!");
            return
        }
        else if (town.trim() === "") {
            alert("Town is required!");
            return
        }

        else if (emailAdress.trim() === "") {
            alert("Email is required");
            return
        }
        else if (validator.validate(emailAdress.trim()) === false) {
            alert("Email format is not correct.");
            return
        }

        else {
            setDisabled(true)
            setAnimating(true)
            var data = new FormData();
            data.append("userid", 1)
            data.append("action", "insert")
            data.append("screen", "kin")
            data.append("name", firstName)
            data.append("address", address)
            data.append("town", town)
            data.append("phone", phoneNumber)
            data.append("post_code", postalCode)
            data.append("email", emailAdress)
            console.log(data)
            fetch(Domain + '/apis/core.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data

            }).then((response) => response.text())
                .then(async (responseText) => {

                    let responseData = JSON.parse(responseText);
                    console.log(responseData, "responseData of api")
                    if (responseData.status === true) {
                        setDisabled(false)
                        setAnimating(false)
                        navigation.goBack()


                    }
                    else {

                        alert(responseData.msg)
                        setDisabled(false)
                        setAnimating(false)
                    }

                })
                .catch((error) => {

                    console.log("error from home API", error);

                    setDisabled(false)
                    setAnimating(false)
                });


        }
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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Next to kin </Text>

                </View>
            </View>

            <View style={{ backgroundColor: "#F2F2F2", flex: 1 }}>

                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >

                    <View style={{ alignSelf: "center", paddingTop: "5%", }}>

                        <View style={styles.ImageView}>


                            <Image source={userP} style={{ height: 70, width: 70, borderRadius: 35, alignSelf: 'center', resizeMode: "contain" }} />

                        </View>

                    </View>


                    <View style={{ paddingHorizontal: "5%", marginTop: "10%" }}>

                        <Animatable.Text animation="fadeInUp" style={styles.label}>Name</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder='Name'
                                placeholderTextColor='#d5c9de'
                                value={firstName}
                                onChangeText={(val) => setFirstName(val)}                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={Profile} style={{ height: 15, width: 15 }}></Image>
                            </View>
                        </Animatable.View>
                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                        <Animatable.Text animation="fadeInUp" style={styles.label}>Address</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder='Address'
                                placeholderTextColor='#d5c9de'
                                value={address}
                                onChangeText={(val) => setAddres(val)}
                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={post} style={{ height: 15, width: 15 }}></Image>
                            </View>
                        </Animatable.View>

                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                        <Animatable.Text animation="fadeInUp" style={styles.label}>Town</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >

                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder='Town'
                                placeholderTextColor='#d5c9de'
                                value={town}
                                onChangeText={(val) => setTown(val)}

                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={home} style={{ height: 15, width: 15 }}></Image>
                            </View>
                        </Animatable.View>

                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                        <Animatable.Text animation="fadeInUp" style={styles.label}>Phone Number</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder="Phone Number "
                                placeholderTextColor='#d5c9de'
                                value={phoneNumber}
                                onChangeText={(val) => setPhone(val)}
                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={phone} style={{ height: 15, width: 15 }}></Image>
                            </View>


                        </Animatable.View>
                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                        <Animatable.Text animation="fadeInUp" style={styles.label}>Postal Code</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder="Postal Code "
                                placeholderTextColor='#d5c9de'
                                value={postalCode}
                                onChangeText={(val) => setPostalCode(val)}
                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={post} style={{ height: 15, width: 15 }}></Image>
                            </View>


                        </Animatable.View>
                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                        <Animatable.Text animation="fadeInUp" style={styles.label}>Email</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder="Email "
                                placeholderTextColor='#d5c9de'
                                value={emailAdress}
                                onChangeText={(val) => setEmail(val)}  >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={email} style={{ height: 15, width: 15 }}></Image>
                            </View>


                        </Animatable.View>

                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>



                        <Animatable.View animation="fadeInUp" >

                            <TouchableOpacity style={styles.button} onPress={addKin}>
                                <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Save </Text>
                            </TouchableOpacity>
                        </Animatable.View>

                    </View>



                </KeyboardAwareScrollView>
                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>
        </SafeAreaView>
    )
}
export default nextToKin;



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
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: "#0178B9",
        alignItems: "center",
        justifyContent: "center"


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




})