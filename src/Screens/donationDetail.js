// ./screens/Home.js

import React, { useState, useEffect, useContext, useRef } from "react";
import { View, StyleSheet, ActivityIndicator, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform } from 'react-native';
import back from '../Assets/Icons/Arrr.png';
import { Domain } from '../Api/Api';

function donationsDetails({ navigation }) {


    const [donations, setdonations] = useState([
        { donation_date: "Apr 12 2020", donation_description: "App A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles.", donation_title: "Tree", donationAmount: 12, },
        { donation_date: "Apr 12 2020", donation_description: "App A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles.", donation_title: "Clean Water", donationAmount: 14 },
        { donation_date: "Apr 12 2020", donation_description: "App A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles.", donation_title: "Food aid", donationAmount: 13.34 },
        { donation_date: "Apr 12 2020", donation_description: "App A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles.", donation_title: "Bural Funds", donationAmount: 12.43 },
        { donation_date: "Apr 12 2020", donation_description: "App A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles.", donation_title: "donation", donationAmount: 12.34 },
        { donation_date: "Apr 12 2020", donation_description: "App A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles.", donation_title: "Food aid", donationAmount: 13.34 },
        { donation_date: "Apr 12 2020", donation_description: "App A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles.", donation_title: "Bural Funds", donationAmount: 12.43 },
        { donation_date: "Apr 12 2020", donation_description: "App A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles.", donation_title: "donation", donationAmount: 12.34 },

    ]);
    const [isAnimating, setAnimating] = useState(false);
    const [isDisabled, setDisabled] = useState(false);



    openManue = () => {
        navigation.openDrawer();

    }


    Back = () => {
        navigation.pop()
    }
    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />


            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: "#0178B9" }}>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.back} styles={{ width: "15%" }} onPress={() => { Back() }}>
                        <Image source={back} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "70%", height: 60, justifyContent: "center", alignItems: "center" }}>

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Details</Text>

                </View>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.back} styles={{ width: "15%" }} onPress={() => { Back() }}>
                        {/* <Image source={add_2} style={styles.backIcon}></Image> */}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ backgroundColor: '#F2F2F5', flex: 1, }}>

                {/* <View style={{flexDirection:"row",width:"100%",justifyContent:"center"}}> 
            <Text style={{marginTop:20,fontSize:16,color:"#601124",marginBottom:0,paddingLeft:20,paddingRight:20, fontWeight:"bold"}}>Mangle Shop Now</Text>
            </View> */}
                <FlatList
                    style={{ width: "100%", paddingTop: 10, marginBottom: 50 }}
                    data={donations}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (

                        <View style={[styles.flatView,]}   >
                            <View style={{ flexDirection: 'row', width: "100%" }}>
                                <View style={{ width: "30%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: '#0178B9', fontSize: 19, fontWeight: "bold", }}>{item.donationAmount}£</Text>
                                </View>
                                <View style={{ width: "70%", }}>
                                    <Text style={{ color: '#0178B9', fontSize: 17, fontWeight: "bold", }}>{item.donation_title}</Text>
                                    <Text style={{ color: 'black', fontSize: 12, }}>{item.donation_description}</Text>
                                    <Text style={{ color: '#999999', textAlign: "right", fontSize: 11, marginTop: 10, }}>{item.donation_date}</Text>

                                </View>

                            </View>
                        </View>

                    )
                    }
                //Setting the number of column


                />
                {/* list end  for Browse By Category  */}


            </View>


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


    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',

    },

    flatView: {
        width: '90%',
        marginBottom: "3%",
        paddingTop: '4%',
        paddingBottom: "4%",
        paddingLeft: '2%',
        paddingRight: '2%',
        borderRadius: 10,
        alignSelf: "center",
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


});
export default donationsDetails;
