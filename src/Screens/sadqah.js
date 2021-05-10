
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

import whiteDonation from '../Assets/Icons/whiteDonation.png'

import add_2 from '../Assets/Icons/add_2.png'

import sadaqah from '../Assets/Icons/sadaqah.png';
import tree from '../Assets/Icons/tree.png';
import water from '../Assets/Icons/water.png';
import masjid from '../Assets/Icons/musjid.png';
import food from '../Assets/Icons/food.png';
import { Domain } from '../Api/Api';





function sadqah({ navigation }) {

    //...........selection of image
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    let [modalVisible, setmodalVisible] = useState(false);



    goTODonation = () => {
        navigation.push('sadqahDonation')

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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Sadaqah</Text>

                </View>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.back} styles={{ width: "15%" }} onPress={() => { navigation.push('donationDetail') }}>
                        <Image source={add_2} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ backgroundColor: "#F2F2F2", flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ flexDirection: "column", justifyContent: "space-between", paddingLeft: '6%', paddingRight: '6%' }}>

                        <View style={styles.ImageView}>
                            <Image source={whiteDonation} style={{ height: 70, width: 70, borderRadius: 35, alignSelf: 'center', resizeMode: "contain" }} />

                        </View>
                        < Text style={{ fontSize: 18, textAlign: "center", color: "#0178B9", fontWeight: "bold" }}>Request For Sadaqah</ Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>


                            <View style={styles.flatView}>
                                <Image source={masjid} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                                <Text style={{ color: '#0178B9', fontSize: 15, marginTop: 10, fontWeight: "bold" }}>Biuild a Masjid</Text>
                            </View>




                            <View style={styles.flatView}>
                                <Image source={water} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                                <Text style={{ color: '#0178B9', fontSize: 15, marginTop: 10, fontWeight: "bold" }}>Clean Water</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>


                            <View style={styles.flatView}>
                                <Image source={food} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                                <Text style={{ color: '#0178B9', fontSize: 15, marginTop: 10, fontWeight: "bold" }}>Food Aid</Text>
                            </View>




                            <View style={styles.flatView}>
                                <Image source={tree} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                                <Text style={{ color: '#0178B9', fontSize: 15, marginTop: 10, fontWeight: "bold" }}>Tree</Text>
                            </View>

                        </View>


                        <TouchableOpacity style={styles.button} onPress={() => goTODonation()}  >
                            <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Donate </Text>
                        </TouchableOpacity>




                    </View>


                </ScrollView>

                {isAnimating &&

                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>
        </SafeAreaView >
    )
}
export default sadqah;



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0178B9",




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

    ImageView: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: "#0178B9",
        marginVertical: "10%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"


    },

    flatView: {
        height: 140, width: '42%', padding: 5, flexDirection: 'column', margin: 15, alignItems: 'center', borderRadius: 20, justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }

})