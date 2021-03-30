// ./screens/Home.js

import React, { useState, useEffect, useContext, useRef } from "react";
import { View, StyleSheet, ActivityIndicator, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform, } from 'react-native';
import { PaymentCardTextField } from 'tipsi-stripe'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import stripe from 'tipsi-stripe'

import back from '../Assets/Icons/Arrr.png';
import profilee from '../Assets/Icons/profile.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'
import { Card, CardItem, Body, Container, Header, Tab, Tabs, TabHeading, Icon, Fab } from 'native-base';

stripe.setOptions({
    publishableKey: 'pk_test_51IYUWtEblGCs6sabHogOUttoDK52WzMNcd0AOhc4jJrT09F6PoyHpt8WrTmFh7qbnmX6YDIpPBpV3qdDoIuM2qaa008vVO1HvL',
})
function oneDonation({ navigation }) {



    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);

    let [postalCode, setPostalCoe] = useState("");
    let [cardCredentials, setcardCredentials] = useState({
        cvc: "",
        expiry: "",
        number: "",
        type: "",
    });
    let [stripe_token, setsStripe_token] = useState("");





    Back = () => {
        navigation.goBack()
    }

    payNow = async () => {

        console.log(cardCredentials)
        if (cardCredentials.cvc == "" || cardCredentials.number == "" || cardCredentials.expiry == "") {
            alert("please give proper credentials")
        }
        else {
            setAnimating(true)
            setisDisabled(true)

            let expiryMonth = 0;
            let expiryYear = 0;
            let dateArray = cardCredentials.expiry.split("/");

            expiryMonth = parseInt(dateArray[0]);
            expiryYear = parseInt(dateArray[1]);

            let stripeParams = {
                number: cardCredentials.number,
                expMonth: expiryMonth,
                expYear: expiryYear,
                cvc: cardCredentials.cvc,
            }


            try {
                setAnimating(false)
                setisDisabled(false)

                const response = await stripe.createTokenWithCard(stripeParams);
                console.log(response, "reponse from stripe")
                setsStripe_token(response.tokenId)
                alert("Suucess")

            }
            catch (e) {
                setAnimating(false)
                setisDisabled(false)
                alert(e)
                return
            }
        }
    }

    _onChange = (form) => {

        console.log(form.values.number)

        let cardCredentials = {
            cvc: form.values.cvc,
            expiry: form.values.expiry,
            number: form.values.number,
            type: form.values.type,
        }
        setcardCredentials(cardCredentials)

    };


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
                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>One Time Donation</Text>
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
                                            <Text style={{ textAlign: "center", fontSize: 14, }}>Stripe </Text>
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
                        <CreditCardInput onChange={(value) => _onChange(value)} />


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
        </SafeAreaView >

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
    field: {
        width: 300,
        color: '#449aeb',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
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
});
export default oneDonation;
