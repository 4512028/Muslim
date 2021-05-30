// ./screens/Home.js

import React, { useState, useEffect, useContext, useRef } from "react";
import { View, StyleSheet, Button, ActivityIndicator, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform } from 'react-native';
import Logo from '../../Assets/Icons/pro.png'
import whiteHome from '../../Assets/Icons/whiteHome.png'
import whiteProfile from '../../Assets/Icons/whiteProfile.png'
import whiteDOnat from '../../Assets/Icons/whiteDOnate.png'
import nextTPkin from '../../Assets/Icons/nextTPkin.png'
import whiteLove from '../../Assets/Icons/whiteLove.png'
import feedBack from '../../Assets/Icons/whiteProfile.png'
import logOut from '../../Assets/Icons/whiteLogout.png'
import ghusl from '../../Assets/Icons/whiteS.png';
import whiteManue from '../../Assets/Icons/whiteManue.png';
import { Domain } from '../../Api/Api';

import { CommonActions } from '@react-navigation/native';


import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
function drawerItem({ navigation }) {

    const [state, setState] = useState({

        firstName: "",
        LastName: "",
        image: "",



    });

    GoToNextScreen = (initialRoute) => {


        navigation.dispatch({
            ...CommonActions.reset({
                index: 0,
                routes: [{ name: initialRoute }],
            }),
        })
    }

    useEffect(() => {

        getdata()


    }, []);


    getdata = async () => {
        const id = await AsyncStorage.getItem('userID');

        var data = new FormData();
        data.append("userid", id)
        data.append("action", "get")
        data.append("screen", "users")

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
                    setState({
                        ...state,
                        firstName: responseData.data[0].first_name,
                        LastName: responseData.data[0].last_name,
                        image: responseData.data[0].image
                    })
                }
                else {
                    alert(responseData.msg)
                }

            })
            .catch((error) => {
                console.log("error from getProfile  API", error);

            });



    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, }}>
                <ScrollView>

                    <View style={{ width: "100%", paddingTop: "10%", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('profile')
                        }}>
                            <View style={styles.ImageView}>
                                <Image source={state.image == "" ? Logo : { uri: Domain + "/apis/" + state.image }} style={{ height: 100, width: 100, borderRadius: 50, alignSelf: 'center', }} />


                            </View>
                            <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10, marginBottom: 20, color: "white" }}>{state.firstName} {state.LastName}</Text>

                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={() => {
                        GoToNextScreen("Home")
                    }}>
                        <View style={styles.item} >
                            <Image source={whiteHome} style={{ height: 30, width: 30, marginRight: 10 }} />
                            <Text style={{ fontSize: 16, color: "white" }}>Home </Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        GoToNextScreen("profile")
                    }}>
                        <View style={styles.item}>
                            <Image source={whiteProfile} style={{ height: 30, width: 30, marginRight: 10 }} />

                            <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}> Profile </Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        GoToNextScreen("other")

                    }}>
                        <View style={styles.item}>
                            <Image source={whiteManue} style={{ height: 30, width: 30, marginRight: 10 }} />

                            <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}> Reading </Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        GoToNextScreen("nextOfKinDetail")

                    }}>
                        <View style={styles.item}>
                            <Image source={nextTPkin} style={{ height: 30, width: 30, marginRight: 10 }} />

                            <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}> Next of Kin </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        GoToNextScreen("loveOneDetail")

                    }}>
                        <View style={styles.item}>
                            <Image source={whiteLove} style={{ height: 30, width: 30, marginRight: 10 }} />

                            <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}> Loved One </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        GoToNextScreen("donate")

                    }}>
                        <View style={styles.item}>
                            <Image source={whiteDOnat} style={{ height: 30, width: 30, marginRight: 10 }} />

                            <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}> Donate </Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        GoToNextScreen("ghusalDetail")

                    }}>
                        <View style={styles.item}>
                            <Image source={ghusl} style={{ height: 30, width: 30, marginRight: 10 }} />

                            <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}> Ghusl </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        GoToNextScreen("feedback")

                    }}>
                        <View style={styles.item}>
                            <Image source={feedBack} style={{ height: 30, width: 30, marginRight: 10 }} />

                            <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}> Feedback </Text>

                        </View>
                    </TouchableOpacity>





                </ScrollView>
                <TouchableOpacity onPress={() => {
                    AsyncStorage.setItem("isLogin", "false");
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'signIn' }],
                    })
                }}>
                    <View style={styles.item}>
                        <Image source={logOut} style={{ height: 30, width: 30, marginRight: 10 }} />

                        <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}> Log out </Text>

                    </View>
                </TouchableOpacity>
                <View style={{ height: 50 }}></View>
            </View>


        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#275F8E",
        alignContent: 'center',
    },
    ImageView: {
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white", marginHorizontal: "5%"

    },
    item: {
        height: 40,
        width: "100%",
        alignItems: "center",

        flexDirection: "row",
        paddingHorizontal: "5%"

    }
});

export default drawerItem;

