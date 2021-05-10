// ./screens/Home.js

import React, { useState, useEffect, useContext, useRef } from "react";
import { View, StyleSheet, ActivityIndicator, Text, StatusBar, TextInput, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform } from 'react-native';
import Logo from '../Assets/Icons/Logo.jpg'
import manue from '../Assets/Icons/manue.png'
import back from '../Assets/Icons/Arrr.png';
import { Card, CardItem, Body, Container, Header, Tab, Tabs, TabHeading, Icon, Fab } from 'native-base';
import profilee from '../Assets/Icons/profile.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Domain } from '../Api/Api';

function MonthDonation({ navigation }) {

    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);

    let [postalCode, setPostalCoe] = useState("");
    let [cardCredentials, setcardCredentials] = useState({
        cvc: "",
        expiry: "",
        number: "",
        type: "",
    });
    let [cardlesstoken_token, setsStripe_token] = useState("");



    Back = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />

            {/* top bar */}
            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: '#0178B9' }}>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.back} styles={{ width: "15%" }} onPress={() => { Back() }}>
                        <Image source={back} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Month Donation</Text>
                </View>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => { }} >
                </TouchableOpacity>
            </View>
            {/* top bar */}
            <View style={{ backgroundColor: '#F2F2F5', flex: 1 }}>

                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
                    <KeyboardAwareScrollView
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        scrollEnabled={true}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false} >

                        <View style={{ width: "100%", marginTop: 15, paddingHorizontal: "5%" }}>
                            <Text style={{ fontSize: 20, color: "#0178B9", fontWeight: "bold" }}>Details</Text>

                            <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', marginBottom: 10, marginTop: 20, borderRadius: 5, backgroundColor: "#B7D9E6" }}>


                                <View style={{ width: '10%', alignItems: "center", justifyContent: "center" }}>
                                    <Image source={profilee} style={{ width: 20, height: 20, }} />
                                </View>
                                <View style={{ width: '90%' }} >
                                    <Text style={{ color: "black", fontSize: 14, fontWeight: "600", alignSelf: 'flex-start', }} >umer saleem</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', marginBottom: 10, marginTop: 5, borderRadius: 5, backgroundColor: "#B7D9E6" }}>
                                <View style={{ width: '10%', alignItems: "center", justifyContent: "center" }}>
                                    <Image source={email} style={{ width: 20, height: 20, }} />
                                </View>
                                <View style={{ width: '90%' }} >
                                    <Text style={{ color: "black", fontSize: 14, fontWeight: "600", alignSelf: 'flex-start', }} >Email@gmailcom</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', marginBottom: 10, marginTop: 5, borderRadius: 5, backgroundColor: "#B7D9E6" }}>


                                <View style={{ width: '10%', alignItems: "center", justifyContent: "center" }}>
                                    <Image source={home} style={{ width: 20, height: 20, }} />
                                </View>
                                <View style={{ width: '90%' }} >
                                    <Text style={{ color: "black", fontSize: 14, fontWeight: "600", alignSelf: 'flex-start', }} >Address pakistan faislibad </Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ width: "90%", alignSelf: "center", marginBottom: 20, marginTop: 10 }}>
                            <Card >
                                <CardItem>
                                    <Body>
                                        <View style={{ flexDirection: "row", width: "100%", paddingHorizontal: "3%", justifyContent: "space-between", marginVertical: 5 }}>
                                            <Text style={{ textAlign: "center", fontSize: 14, }}>Quick Donation</Text>
                                            <Text style={{ textAlign: "center", fontSize: 14, }}>£12</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", width: "100%", paddingHorizontal: "3%", justifyContent: "space-between", marginVertical: 5 }}>
                                            <Text style={{ textAlign: "center", fontSize: 14, }}>Administration</Text>
                                            <Text style={{ textAlign: "center", fontSize: 14, }}>£2</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", width: "100%", paddingHorizontal: "3%", justifyContent: "space-between", marginVertical: 5 }}>
                                            <Text style={{ textAlign: "center", fontSize: 14, }}>GoCardless </Text>
                                            <Text style={{ textAlign: "center", fontSize: 14, }}>£03.5</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", width: "100%", paddingHorizontal: "3%", justifyContent: "space-between", marginVertical: 5 }}>
                                            <Text style={{ textAlign: "center", fontSize: 14, }}>Quick Donation</Text>
                                            <Text style={{ textAlign: "center", fontSize: 14, }}>£14.35</Text>
                                        </View>

                                    </Body>
                                </CardItem>
                            </Card>
                        </View>


                        <View style={{ marginHorizontal: "5%" }}>
                            <Text style={{ fontSize: 20, color: "#0178B9", fontWeight: "bold", marginBottom: 20 }}>Payment Details</Text>

                            <Text style={styles.label}>Bank Name </Text>
                            < View style={{ flexDirection: 'row', }} >

                                <TextInput
                                    style={styles.textField}
                                    placeholder='Bank Name'
                                    placeholderTextColor='#d5c9de'
                                // value={this.state.UserGym}
                                // onChangeText={this.gymChangeHandler}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    {/* <Image source={home} style={{ height: 15, width: 15 }}></Image> */}
                                </View>
                            </ View>

                            < View style={styles.seperater}></ View>

                            <Text style={styles.label}>Bank account number</Text>
                            < View style={{ flexDirection: 'row', }} >

                                <TextInput
                                    style={styles.textField}
                                    placeholder='Bank account number'
                                    placeholderTextColor='#d5c9de'
                                // value={this.state.UserGym}
                                // onChangeText={this.gymChangeHandler}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    {/* <Image source={home} style={{ height: 15, width: 15 }}></Image> */}
                                </View>
                            </ View>

                            < View style={styles.seperater}></ View>

                            <Text style={styles.label}>Sort code</Text>
                            < View style={{ flexDirection: 'row', }} >

                                <TextInput
                                    style={styles.textField}
                                    placeholder='Sort code'
                                    placeholderTextColor='#d5c9de'
                                // value={this.state.UserGym}
                                // onChangeText={this.gymChangeHandler}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    {/* <Image source={home} style={{ height: 15, width: 15 }}></Image> */}
                                </View>
                            </ View>

                            < View style={styles.seperater}></ View>

                            <Text style={styles.label}>Account holder name</Text>
                            < View style={{ flexDirection: 'row', }} >

                                <TextInput
                                    style={styles.textField}
                                    placeholder='Account holder name'
                                    placeholderTextColor='#d5c9de'
                                // value={this.state.UserGym}
                                // onChangeText={this.gymChangeHandler}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    {/* <Image source={home} style={{ height: 15, width: 15 }}></Image> */}
                                </View>
                            </ View>

                            < View style={styles.seperater}></ View>

                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => { payNow() }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Pay Now </Text>
                        </TouchableOpacity>


                    </KeyboardAwareScrollView>


                </ScrollView>
                {
                    isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View >



        </SafeAreaView>

    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0178B9",
        alignContent: 'center',
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
    seperater: {
        height: 1,
        marginBottom: 15,
        backgroundColor: '#d5c9de'
    },
    textField: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,

        fontSize: 15,
        width: "90%",


    },
});
export default MonthDonation;
