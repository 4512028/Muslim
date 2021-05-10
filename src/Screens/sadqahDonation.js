
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
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import stripe from 'tipsi-stripe'
import { Card, CardItem, Body, Container, Header, Tab, Tabs, TabHeading, Icon, Fab } from 'native-base';
import { Domain } from '../Api/Api';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


stripe.setOptions({
    publishableKey: 'pk_test_51IYUWtEblGCs6sabHogOUttoDK52WzMNcd0AOhc4jJrT09F6PoyHpt8WrTmFh7qbnmX6YDIpPBpV3qdDoIuM2qaa008vVO1HvL',
})
function sadqahDonation({ navigation }) {

    //...........selection of image
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    let [GiftAid, setAGiftAid] = useState(true);

    let [postalCode, setPostalCoe] = useState("");
    let [cardCredentials, setcardCredentials] = useState({
        cvc: "",
        expiry: "",
        number: "",
        type: "",
    });
    let [stripe_token, setsStripe_token] = useState("");


    Back = () => {
        navigation.pop()
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
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />

            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: "#0178B9" }}>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.back} styles={{ width: "15%" }} onPress={() => { Back() }}>
                        <Image source={back} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "70%", height: 60, justifyContent: "center", alignItems: "center" }}>

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Donate</Text>

                </View>
            </View>

            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={{ backgroundColor: "#FFF", flex: 1, padding: 20 }}>
                    <Card >
                        <CardItem>
                            <Body>

                                <Text style={{ alignSelf: "center", fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>
                                    What is Gift Aid?
                                    </Text>
                                <Text style={{ textAlign: "center", fontSize: 14, }}>
                                    By allowing My Muslim burail to claim Gift Aid you can increase the value of donation by 25% at no cost to you.Your donation of £5 will be worth £6.25 without you spending an extra penny.
                                     </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <View style={[styles.inputContainer2, { marginVertical: 20 }]}>

                        <View style={{ width: '100%', justifyContent: "center" }}>
                            <TouchableWithoutFeedback onPress={() => setAGiftAid(!GiftAid)}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>

                                    <View style={{ width: 27, backgroundColor: "#C8C7CC", height: 15, padding: 1, borderRadius: 10, marginRight: 10 }}>

                                        {GiftAid == false &&
                                            <View style={{ width: 14, backgroundColor: "white", height: 13, borderRadius: 10 }}>
                                            </View>
                                        }
                                        {GiftAid == true &&
                                            <View style={{ width: 14, backgroundColor: "#0178B9", height: 13, borderRadius: 10, alignSelf: "flex-end" }}>
                                            </View>
                                        }

                                    </View>
                                    <View style={{ paddingRight: 20 }}>
                                        <Text style={{ color: 'black', fontSize: 14, }}>Yes,I would like Gift Aid clamed on my donation </Text>
                                    </View>

                                </View>
                            </TouchableWithoutFeedback >
                        </View>

                    </View>
                    <CreditCardInput onChange={(value) => _onChange(value)} />


                    <TouchableOpacity style={styles.button} >
                        <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Donate </Text>
                    </TouchableOpacity>





                    {isAnimating &&

                        <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                    }
                </View>
            </KeyboardAwareScrollView>


        </SafeAreaView >
    )
}
export default sadqahDonation;



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0178B9",




    },

    inputContainer2: {

        backgroundColor: '#FFF',
        borderRadius: 25,
        shadowColor: "#000",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    flatView: {
        width: '100%',
        marginBottom: "3%",
        paddingTop: '4%',
        paddingBottom: "4%",
        paddingLeft: '2%',
        paddingRight: '2%',
        borderRadius: 10,

        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
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


})