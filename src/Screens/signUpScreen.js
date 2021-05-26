
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
    ScrollView,
    AsyncStorage, BackHandler, SafeAreaView, KeyboardAvoidingView,
    Button
} from "react-native";
import logo from '../Assets/Icons/Logo.jpg'
import musjid from '../Assets/Icons/musjid.png'


import back from '../Assets/Icons/Arrr.png';
import Profile from '../Assets/Icons/profile.png';
import Cameraicon from '../Assets/Icons/camera.png';
import editicon from '../Assets/Icons/edit.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'
import posticon from '../Assets/Icons/post.png'
import phone from '../Assets/Icons/phone.png'
import manueicon from '../Assets/Icons/manue.png'
import back_icon from '../Assets/Icons/back_icon.png'

import pass from '../Assets/Icons/password.png'

var validator = require("email-validator");
import { Domain } from "../Api/Api";

import * as Animatable from 'react-native-animatable';
const screenWidth = Dimensions.get("window").width
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


export default function signUP({ navigation }) {

    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastame] = useState("");
    const [emailAdress, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddres] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [town, setTown] = useState("");
    const [mosque, setMosque] = useState("");
    const [isAnimating, setAnimating] = useState(false);
    const [isDisabled, setDisabled] = useState(false);









    buSignUp = () => {

        // navigation.navigate()
    }

    buForgotPassword = () => {

        console.log(this.props.componentId);
        //navigation.navigate()

    }

    Back = () => {
        navigation.goBack()
    }





    const SiginSuccess = async () => {

        if (title.trim() === "") {
            alert("Title is required!");
            return
        } else if (firstName.trim() === "") {
            alert("First Name is required!");
            return
        }
        else if (LastName.trim() === "") {
            alert("Last Name is required!");
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
        else if (mosque.trim() === "") {
            alert("Mosque is required!");
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
        else if (password.trim() === "") {
            alert("Password is required!");
            return
        }
        else if (password.length < 5) {
            alert("Password type more than 5 words");
            return
        }
        else if (password !== confirmPassword) {
            alert("Password not match! Try again");
            return
        }

        else {
            setDisabled(true)
            setAnimating(true)
            var data = new FormData();

            data.append("action", "register")
            data.append("first_name", firstName)
            data.append("last_name", LastName)
            data.append("mosque", mosque)
            data.append("address", address)
            data.append("town", town)
            data.append("phone", phoneNumber)
            data.append("post_code", postalCode)
            data.append("email", emailAdress)
            data.append("password", password)

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
                    console.log(responseData, "jnkkn")

                    console.log(responseData, "responseData of api")

                    if (responseData.status === true) {
                        setDisabled(false)
                        setAnimating(false)
                        Alert.alert(
                            "NOTE:",
                            "Please Verify your email and then continue to login.",
                            [
                                { text: "OK", onPress: () => navigation.goBack() }
                            ]
                        );



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











    return (
        <SafeAreaView style={styles.container}>
            <View >
                <TouchableOpacity style={styles.back} onPress={() => Back()}>
                    <Image source={back_icon} style={styles.backIcon}></Image>
                </TouchableOpacity>
            </View>

            <ScrollView keyboardShouldPersistTaps={'handled'}>

                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >

                    <Animatable.Image animation="fadeInUp" source={logo} style={styles.logo}></Animatable.Image>
                    <Animatable.Text animation="fadeInUp" style={styles.subheading}>Proceed with your</Animatable.Text>

                    <Animatable.Text animation="fadeInUp" style={styles.heading}>SIGN UP</Animatable.Text>

                    <Animatable.Text animation="fadeInUp" style={styles.label}>Title</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                        <TextInput
                            style={styles.textField}
                            placeholder='Title'
                            placeholderTextColor='#d5c9de'
                            value={title}
                            onChangeText={(val) => setTitle(val)}
                        >
                        </TextInput>

                        <Image source={Profile} style={{ height: 15, width: '4%', marginTop: 17, marginRight: 35 }}></Image>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                    <Animatable.Text animation="fadeInUp" style={styles.label}>First Name</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                        <TextInput
                            style={styles.textField}
                            placeholder='First Name'
                            placeholderTextColor='#d5c9de'
                            onChangeText={(val) => setFirstName(val)}
                        >
                        </TextInput>

                        <Image source={Profile} style={{ height: 15, width: '4%', marginTop: 17, marginRight: 35 }}></Image>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                    <Animatable.Text animation="fadeInUp" style={styles.label}>Last Name</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                        <TextInput
                            style={styles.textField}
                            placeholder='Last Name'
                            placeholderTextColor='#d5c9de'
                            onChangeText={(val) => setLastame(val)}
                        >
                        </TextInput>

                        <Image source={Profile} style={{ height: 15, width: '4%', marginTop: 17, marginRight: 35 }}></Image>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>


                    <Animatable.Text animation="fadeInUp" style={styles.label}>Address</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                        <TextInput
                            style={styles.textField}
                            placeholder='Address'
                            placeholderTextColor='#d5c9de'
                            value={address}
                            onChangeText={(val) => setAddres(val)}
                        >
                        </TextInput>

                        <Image source={home} style={{ height: 15, width: '4%', marginTop: 17, marginRight: 35 }}></Image>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                    <Animatable.Text animation="fadeInUp" style={styles.label}>Post Code</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                        <TextInput
                            style={styles.textField}
                            placeholder='Postal Code'
                            keyboardType='numeric'

                            placeholderTextColor='#d5c9de'
                            value={postalCode}
                            onChangeText={(val) => setPostalCode(val)}
                        >
                        </TextInput>

                        <Image source={email} style={{ height: 15, width: '4%', marginTop: 17, marginRight: 35 }}></Image>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>


                    <Animatable.Text animation="fadeInUp" style={styles.label}>Phone</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                        <TextInput
                            style={styles.textField}
                            placeholder='Phone'
                            placeholderTextColor='#d5c9de'
                            keyboardType='numeric'
                            value={phoneNumber}
                            onChangeText={(val) => setPhone(val)}
                        >
                        </TextInput>

                        <Image source={phone} style={{ height: 15, width: '4%', marginTop: 17, marginRight: 35 }}></Image>
                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                    <Animatable.Text animation="fadeInUp" style={styles.label}>Town</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                        <TextInput
                            style={styles.textField}
                            placeholder='Town'
                            placeholderTextColor='#d5c9de'
                            value={town}
                            onChangeText={(val) => setTown(val)}
                        >
                        </TextInput>

                        <Image source={home} style={{ height: 15, width: '4%', marginTop: 17, marginRight: 35 }}></Image>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>


                    <Animatable.Text animation="fadeInUp" style={styles.label}>Mosque</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                        <TextInput
                            style={styles.textField}
                            placeholder='Mosque'
                            placeholderTextColor='#d5c9de'
                            value={musjid}
                            onChangeText={(val) => setMosque(val)}
                        >
                        </TextInput>

                        <Image source={musjid} style={{ height: 15, width: '4%', marginTop: 17, marginRight: 35 }}></Image>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>



                    <Animatable.Text animation="fadeInUp" style={styles.label}>Email</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                        <TextInput
                            style={styles.textField}
                            placeholder='jhondoe@gmail.com'
                            placeholderTextColor='#d5c9de'
                            value={emailAdress}
                            onChangeText={(val) => setEmail(val)}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                        >
                        </TextInput>

                        <Image source={email} style={{ height: 15, width: '4%', marginTop: 17, marginRight: 35 }}></Image>
                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                    <Animatable.Text animation="fadeInUp" style={styles.label}>Password</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <TextInput
                            animation="fadeInUp"
                            style={styles.textField}
                            placeholder='********'
                            placeholderTextColor='#d5c9de'
                            autoCapitalize={'none'}
                            // textContentType={"password"}
                            onChangeText={(val) => setPassword(val)}
                            secureTextEntry={true}>
                        </TextInput>
                        <Image source={pass} style={{ height: 18, width: '5%', marginTop: 17, marginRight: 35 }}></Image>

                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                    <Animatable.Text animation="fadeInUp" style={styles.label}>Confirm Password</Animatable.Text>
                    <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <TextInput
                            animation="fadeInUp"
                            style={styles.textField}
                            placeholder='********'
                            placeholderTextColor='#d5c9de'
                            autoCapitalize={'none'}
                            // placeholder={"Confirm password"}
                            value={confirmPassword}
                            onChangeText={(val) => setConfirmPassword(val)}
                            secureTextEntry={true}>
                        </TextInput>
                        <Image source={pass} style={{ height: 18, width: '5%', marginTop: 17, marginRight: 35 }}></Image>

                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                    <Animatable.View animation="fadeInUp" >

                        <TouchableOpacity style={styles.button} onPress={SiginSuccess}>
                            <Text style={styles.buttonText}>Sign Up </Text>
                        </TouchableOpacity>
                    </Animatable.View>


                    <Animatable.View style={styles.bottomView} animation="fadeIn" >
                        <Text style={styles.newUser}>Already have an account? </Text>
                        <Text style={styles.register} onPress={() => navigation.goBack()}> Sign In</Text>
                    </Animatable.View>
                </KeyboardAwareScrollView>
            </ScrollView>


            {
                isAnimating &&
                <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
            }
        </SafeAreaView >
    )
}


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 35 : 0;
const STATUSBAR_COLOR = Platform.OS === 'ios' ? 'white' : '#0178B9';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 0 : 56;
const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: STATUSBAR_COLOR
    },
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
        resizeMode: "contain",
        height: 120,
        width: 170,
        marginTop: 20,
        marginLeft: 20,
    },
    heading: {
        marginLeft: 30,
        marginTop: 5,
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subheading: {
        marginLeft: 30,
        marginTop: 10,
        fontSize: 20,
        fontWeight: '300',
        marginBottom: 0,
    },
    label: {
        marginLeft: 30,
        marginTop: 15,
        fontWeight: '300',
        fontSize: 14,
        fontWeight: 'bold'
    },
    textField: {
        marginLeft: 30,
        marginRight: 30,
        width: '70%',
        marginTop: 6,
        marginBottom: 3,
        paddingTop: '3%',
        paddingBottom: '3%',


    },
    seperater: {
        height: 1,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        backgroundColor: '#d5c9de'

    },
    ForgotPassword: {
        alignSelf: 'center',
        marginTop: 15,
        color: '#acacac',
        fontSize: 15
    },
    button: {
        marginTop: 30,
        alignSelf: 'center',
        height: 50,
        width: screenWidth - 60,
        backgroundColor: '#0178B9',
        justifyContent: 'center',
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
    buttonText: {
        color: '#FFFFFF',
        fontSize: 17,
    },
    bottomView: {
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 100,
    },
    newUser: {
        fontSize: 15,
        color: '#010a0a',
    },
    register: {
        color: '#0178B9',
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

});