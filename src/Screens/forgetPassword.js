
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
    ActivityIndicator,
    TouchableOpacity,
    ScrollView, SafeAreaView
} from "react-native";

import logo from '../Assets/Icons/Logo.jpg'
import back from '../Assets/Icons/back_icon.png'
import { domain, token } from "../Api/Api";


import * as Animatable from 'react-native-animatable';


const screenWidth = Dimensions.get("window").width

var validator = require("email-validator");



export default function forgetPassword({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAnimating, setAnimating] = useState(false);
    const [isDisabled, setDisabled] = useState(false);







    const forgetPassword = () => {

        if (email === "") {
            alert("Please enter email")
            return
        }

        if (validator.validate(email.trim()) === false) {
            alert("Email format is not correct!")
            return
        }
        else {
            navigation.goBack()
        }

        // const searchCredentials = {
        //     "email": this.state.UserEmail,
        //     "type": 1,
        // }

        // fetch(domain + '/api/customer/forgot_password', {

        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',

        //     },

        //     body: JSON.stringify(searchCredentials)


        // }).then((response) => response.text())
        //     .then(async (responseText) => {

        //         let responseData = JSON.parse(responseText);

        //         console.log(responseData, "forgotPasswordApi")

        //         if (responseData.code === 200) {
        //             this.setState({ UserEmail: "" });
        //             alert(responseData.message)

        //             analytics().logEvent('passweord_reset')


        //         }
        //         else {

        //             console.log("wrong in forgotPasswordApi api")

        //             alert(responseData.message)

        //             this.setState({ isAnimating: false, isDisabled: false, likeAction: false })

        //         }

        //     })
        //     .catch((error) => {

        //         this.setState({ isAnimating: false, isDisabled: false, })

        //         console.log("error from wrong forgotPasswordApi", error);

        //     });



    }










    return (
        <SafeAreaView style={styles.container}>

            <ScrollView keyboardShouldPersistTaps={"handled"}>
                <Animatable.View>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <Image source={back} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                </Animatable.View>
                <Animatable.Image animation="fadeInUp" source={logo} style={styles.logo}></Animatable.Image>
                <Animatable.Text animation="fadeInUp" style={styles.heading}>Forgot Password?</Animatable.Text>

                <Animatable.Text animation="fadeInUp" style={styles.label}>Email</Animatable.Text>
                <Animatable.View animation="fadeInUp" >

                    <TextInput
                        animation="fadeInUp"
                        style={styles.textField}
                        placeholder='jhondoe@gmail.com'
                        placeholderTextColor='#d5c9de'
                        value={email}
                        value={email}
                        onChangeText={(val) => setEmail(val)}
                        textContentType={"name"}>
                    </TextInput>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                <Animatable.View animation="fadeInUp" >
                    <Text style={styles.label1}>You will receive your new password on your registered email address. </Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" >

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Reset Password </Text>
                    </TouchableOpacity>
                </Animatable.View>



            </ScrollView>
            {isAnimating &&
                <ActivityIndicator size="large" color="#58278c" animating={isAnimating} style={styles.loading} />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignContent: 'center',
    },
    background: {
        flex: 1,
        resizeMode: "cover",
    },
    back: {
        height: 50,
        width: 50,
        marginLeft: 15,
        justifyContent: 'center'
    },
    backIcon: {
        height: 30,
        width: 30,
    },
    logo: {
        height: 120,
        width: 170,
        marginTop: 20,
        marginLeft: 20,
        resizeMode: "contain",
    },
    heading: {
        marginLeft: 30,
        marginTop: 25,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        marginLeft: 30,
        marginTop: 10,
        fontWeight: '300',
        fontSize: 14,
    },
    label1: {
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '300',
        color: '#333333',
        fontSize: 13,
    },
    textField: {
        marginLeft: 30,
        marginRight: 30,
        height: 35,
        marginTop: 6,
        marginBottom: 3,
    },
    seperater: {
        height: 1,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        backgroundColor: '#d5c9de'
    },
    ForgotPassword: {
        alignSelf: 'flex-end',
        marginRight: 30,
        marginTop: 16,
        color: '#010a0a',
        fontSize: 15
    },
    button: {
        marginTop: 30,
        alignSelf: 'center',
        height: 50,
        width: screenWidth - 80,
        backgroundColor: '#0178B9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11,
        shadowColor: "#111111",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 17,
    },
    bottomView: {
        marginTop: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    newUser: {
        fontSize: 15,
        color: '#010a0a',
    },
    register: {
        color: '#2899a8',
        fontSize: 15,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
});