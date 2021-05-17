
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


function nextOfKinUpdate({ route, navigation }) {
    const { name, address, town, postal_code, phone, email } = route.params;

    //...........selection of image
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setDisabled] = useState(false);

    const [state, setState] = useState({
        firstName: "",
        emailAdress: "",
        address: "",
        phoneNumber: "",
        postalCode: "",
        town: "",

    })

    useEffect(() => {
        const { item } = route.params;
        setState({
            firstName: item.name,
            emailAdress: item.email,
            address: item.address,
            phoneNumber: item.phone,
            postalCode: item.postal_code,
            town: item.town,
        })


    }, []);



    const updateKin = async () => {
        if (state.firstName.trim() === "") {
            alert("First Name is required!");
            return
        }

        else if (state.address.trim() === "") {
            alert("Address is required!");
            return
        } else if (state.phoneNumber.trim() === "") {
            alert("phone Number is required!");
            return
        }
        else if (state.postalCode.trim() === "") {
            alert("postal Code is required!");
            return
        }
        else if (state.town.trim() === "") {
            alert("Town is required!");
            return
        }

        else if (state.emailAdress.trim() === "") {
            alert("Email is required");
            return
        }
        else if (validator.validate(state.emailAdress.trim()) === false) {
            alert("Email format is not correct.");
            return
        }

        else {
            setDisabled(true)
            setAnimating(true)
            var data = new FormData();
            data.append("userid", "1")
            data.append("action", "update")
            data.append("screen", "kin")
            data.append("name", state.firstName)
            data.append("address", state.address)
            data.append("town", state.town)
            data.append("phone", state.phoneNumber)
            data.append("postal_code", state.postalCode)
            data.append("email", state.emailAdress)
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

                    console.log("error from addKin  API", error);

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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Update</Text>

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
                                value={state.firstName}
                                onChangeText={(val) => setState({ ...state, firstName: val })}
                            >
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
                                value={state.address}
                                onChangeText={(val) => setState({ ...state, address: val })}
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
                                value={state.town}
                                onChangeText={(val) => setState({ ...state, town: val })}
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
                                value={state.phoneNumber}
                                onChangeText={(val) => setState({ ...state, phoneNumber: val })}
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
                                value={state.postalCode}
                                onChangeText={(val) => setState({ ...state, postalCode: val })}
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
                                value={state.emailAdress}
                                onChangeText={(val) => setState({ ...state, emailAdress: val })}
                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={email} style={{ height: 15, width: 15 }}></Image>
                            </View>


                        </Animatable.View>

                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>



                        <Animatable.View animation="fadeInUp" >

                            <TouchableOpacity style={styles.button} onPress={updateKin} >
                                <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Update</Text>
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
export default nextOfKinUpdate;



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