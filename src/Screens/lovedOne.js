
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
import { Card, CardItem, Body, } from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
var validator = require("email-validator");

import edit from '../Assets/Icons/edit.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'
import post from '../Assets/Icons/post.png'
import phone from '../Assets/Icons/phone.png'
import manue from '../Assets/Icons/manue.png'
import group from '../Assets/Icons/group1.png'
import { Domain } from '../Api/Api';



function loveOne({ navigation }) {

    //...........selection of image



    const [state, setState] = useState({
        name: "",
        relation: "",
        emailAdress: "",
        address: "",
        phoneNumber: "",
        postalCode: "",
        town: "",
        groupID: ""

    })
    const [isAnimating, setAnimating] = useState(false);
    const [isDisabled, setDisabled] = useState(false);



    Back = () => {
        navigation.goBack()
    }

    const addNext = async () => {
        if (state.name.trim() === "") {
            alert("First Name is required!");
            return
        }
        if (state.relation.trim() === "") {
            alert("Relation Name is required!");
            return
        }

        else if (state.address.trim() === "") {
            alert("Address is required!");
            return
        }
        else if (state.town.trim() === "") {
            alert("Town is required!");
            return
        }
        else if (state.phoneNumber.trim() === "") {
            alert("phone Number is required!");
            return
        }
        else if (state.postalCode.trim() === "") {
            alert("postal Code is required!");
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
        // else if (state.groupName.trim() === "") {
        //     alert("postal Code is required!");
        //     return
        // }
        else if (state.groupID.trim() === "") {
            alert("GroupID Code is required!");
            return
        }
        else {
            setDisabled(true)
            setAnimating(true)
            var data = new FormData();
            data.append("userid", "1")
            data.append("action", "insert")
            data.append("screen", "love_one")
            data.append("name", state.name)
            data.append("address", state.address)
            data.append("town", state.town)
            data.append("relation", state.relation)
            data.append("phone", state.phoneNumber)
            data.append("post_code", state.postalCode)
            data.append("email", state.emailAdress)
            data.append("groupid", state.groupID)

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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Love One </Text>

                </View>
            </View>

            <View style={{ backgroundColor: "#FFF", flex: 1 }}>

                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >

                    <View style={{ padding: "5%", }}>

                        <Card >
                            <CardItem>
                                <Body>
                                    <Text style={{ textAlign: "center" }}>
                                        Want to join a group on behalf of loved one,just simple fill in your loved ones detail and choose between the public group and the community group to secure your love ones feuture.
                                   </Text>
                                    <Text style={{ textAlign: "center" }}>
                                        Abu Huraira narrated that the Prophet said: The best charity is that which is practiced by a wealthy person and start giving first to your dependents.
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={{ padding: "5%", }}>

                        <Animatable.Text animation="fadeInUp" style={styles.label}>Person Name</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder='Person Name'
                                placeholderTextColor='#d5c9de'
                                value={state.name}
                                onChangeText={(val) => setState({ ...state, name: val })}                            >

                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={Profile} style={{ height: 15, width: 15 }}></Image>
                            </View>
                        </Animatable.View>


                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                        <Animatable.Text animation="fadeInUp" style={styles.label}>Relation to person</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >

                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder='RelationShip to person'
                                placeholderTextColor='#d5c9de'
                                value={state.relation}
                                onChangeText={(val) => setState({ ...state, relation: val })}                            >

                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={Profile} style={{ height: 15, width: 15 }}></Image>
                            </View>
                        </Animatable.View>

                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                        <Animatable.Text animation="fadeInUp" style={styles.label}>Address</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder="Address "
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
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder="Town "
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

                        <Animatable.Text animation="fadeInUp" style={styles.label}>Phone</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder="Phone "
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

                        {/* <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View> */}

                        {/* <Animatable.Text animation="fadeInUp" style={styles.label}>Group Name</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder="Group Name "
                                placeholderTextColor='#d5c9de'
                                value={state.groupName}
                                onChangeText={(val) => setState({ ...state, groupName: val })}
                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={group} style={{ height: 15, width: 15 }}></Image>
                            </View>


                        </Animatable.View> */}

                        <Animatable.Text animation="fadeInUp" style={styles.label}>Group Id</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder="Group Id "
                                placeholderTextColor='#d5c9de'
                                value={state.groupID}
                                onChangeText={(val) => setState({ ...state, groupID: val })}
                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={group} style={{ height: 15, width: 15 }}></Image>
                            </View>


                        </Animatable.View>
                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                        <Animatable.View animation="fadeInUp"  >

                            <TouchableOpacity style={styles.button} onPress={addNext} >
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
export default loveOne;



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
    textField: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,

        fontSize: 15,
        width: "90%",


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




})