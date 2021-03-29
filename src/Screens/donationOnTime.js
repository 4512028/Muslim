// ./screens/Home.js

import React, { useState, useEffect, useContext, useRef } from "react";
import { View, StyleSheet, ActivityIndicator, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform } from 'react-native';
import { PaymentCardTextField } from 'tipsi-stripe'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import back from '../Assets/Icons/Arrr.png';
import profilee from '../Assets/Icons/profile.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'

function oneDonation({ navigation }) {


    Back = () => {
        navigation.goBack()
    }



    _onChange = (form) => console.log(form);


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
            <ScrollView keyboardShouldPersistTaps="handled"   >

                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ backgroundColor: '#F2F2F5', }}>

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
                        <CreditCardInput onChange={(value) => _onChange(value)} />


                    </View>

                </KeyboardAwareScrollView>
            </ScrollView>
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
    field: {
        width: 300,
        color: '#449aeb',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
    }
});
export default oneDonation;
