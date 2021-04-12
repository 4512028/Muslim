
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
import add from '../Assets/Icons/add.png';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import Profile from '../Assets/Icons/profile.png';
import edit from '../Assets/Icons/update.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'
import post from '../Assets/Icons/post.png'
import phone from '../Assets/Icons/phone.png'
import userP from '../Assets/Icons/userP.png'
import profile from "./profile";


function ghusalDetail({ navigation }) {

    //...........selection of image
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    let [ghusl, setghusl] = useState([
        {
            Name: "umer",
            detail: [
                { name: "Name", value: "Faisliabad" },
                { name: "Relation", value: "brother" },
                { name: "Phone", value: "2392039203239" },
                { name: "Email", value: "mumersaleem79@gmail.com" },

            ]
        },
        {
            Name: "umer",
            detail: [

                { name: "Name", value: "Faisliabad" },
                { name: "Relation", value: "brother" },
                { name: "Phone", value: "2392039203239" },
                { name: "Email", value: "mumersaleem79@gmail.com" },
            ]
        }
    ]);



    goToGhusalUpdate = () => {

        navigation.navigate('ghusalUpdate')

    }
    goToghusl = () => {

        navigation.navigate('ghusl')

    }







    Back = () => {
        navigation.goBack()
    }



    detail = (item) => {

        console.log(item, "item")

        return (
            <FlatList
                style={{ marginLeft: 10, marginRight: 10, marginTop: 10, with: "100%", flexDirection: "column" }}


                data={item}

                renderItem={({ item, index }) => (

                    <View>
                        <View style={{ width: "100%", flexDirection: "row", paddingRight: 18, backgroundColor: "#F4F5F7", borderRadius: 10, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, marginBottom: 10, }}>

                            <Text style={{ fontSize: 14, color: "black", fontWeight: "bold", marginRight: 10 }} numberOfLines={1}>{item.name} :</Text>

                            <View style={{ alignSelf: "center", flexShrink: 1 }}>

                                <Text style={{ fontSize: 12, color: "#363636" }} numberOfLines={1}>{item.value} </Text>

                            </View>
                        </View>




                    </View>




                )}


            />

        )
    }



    return (
        <SafeAreaView style={styles.containerr}>

            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />


            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: "#0178B9" }}>
                <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.back} styles={{ width: "15%" }} onPress={() => { Back() }}>
                        <Image source={back} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "70%", height: 60, justifyContent: "center", alignItems: "center" }}>

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Ghusl</Text>

                </View>
            </View>

            <View style={{ backgroundColor: "#F2F2F2", flex: 1, position: "relative", }}>


                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={ghusl}

                    style={{
                        paddingLeft: "3%", paddingRight: "3%", paddingBottom: 30, paddingTop: 10

                    }}
                    renderItem={({ item, index }) => (

                        <TouchableWithoutFeedback onPress={() => { }}>
                            <View style={styles.container}  >
                                <View style={styles.linearGradient}>

                                    <View style={{ with: "100%", flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 }}>

                                        <Text style={{ fontSize: 15, color: "black", fontWeight: 'bold', }}>Umer saleem </Text>
                                        <TouchableOpacity onPress={() => goToGhusalUpdate()}>
                                            <Image source={edit} style={styles.backIcon}></Image>
                                        </TouchableOpacity>


                                    </View>


                                    {detail(item.detail)}







                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    )}

                />





                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.addNotes} onPress={() => { goToghusl() }}>

                <Image source={add} resizeMode='cover' style={{ height: 25, width: 25, borderRadius: 50, position: "absolute", }} />


            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default ghusalDetail;



const styles = StyleSheet.create({

    containerr: {
        flex: 1,
        backgroundColor: "#0178B9",




    },

    addNotes: {
        height: 60, width: 60, backgroundColor: "blue", position: "absolute", justifyContent: 'center', alignItems: 'center',
        right: "10%",
        bottom: Platform.OS === 'ios' ? "10%" : "10%",
        borderRadius: 45,
        backgroundColor: "#0178B9",
        shadowColor: "#601124",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,

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


    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        flex: 1, flexDirection: "column", width: "95%", borderRadius: 5, marginBottom: 10, marginTop: 5, alignSelf: "center",

        backgroundColor: "white",
        shadowColor: "#601124",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        elevation: 4,
    },
    linearGradient: {
        paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },


})