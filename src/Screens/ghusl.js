
import React from 'react';

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
import { Domain } from '../Api/Api';

import nextTPkin from '../Assets/Icons/nextTPkin.png'
import email from '../Assets/Icons/email.png'

import phone from '../Assets/Icons/phone.png'




function ghusl({ navigation }) {

    //...........selection of image







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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Ghusl</Text>

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


                        < View animation="fadeInUp" style={styles.ImageView}>


                            <Image source={nextTPkin} style={{ height: 70, width: 70, borderRadius: 35, alignSelf: 'center', resizeMode: "contain" }} />

                        </ View>
                        <Animatable.Text animation="fadeInUp" style={{ fontSize: 18, alignSelf: "center", textAlign: "center", marginVertical: 30, marginHorizontal: "20%", color: "#0178B9", fontWeight: "bold" }}>Request For Ghusl</Animatable.Text>


                        <Animatable.Text animation="fadeInUp" style={styles.label}>Person Name</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder='Person Name'
                                placeholderTextColor='#d5c9de'
                            // value={this.state.UserName}
                            // onChangeText={this.nameChangeHandler}
                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={Profile} style={{ height: 15, width: 15 }}></Image>
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
                            // value={this.state.UserInstructor}
                            // onChangeText={this.instructorNameChangeHandler}
                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={email} style={{ height: 15, width: 15 }}></Image>
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
                            // value={this.state.UserGym}
                            // onChangeText={this.gymChangeHandler}
                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={Profile} style={{ height: 15, width: 15 }}></Image>
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
                            // value={this.state.UserInstructor}
                            // onChangeText={this.instructorNameChangeHandler}
                            >
                            </TextInput>
                            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                <Image source={phone} style={{ height: 15, width: 15 }}></Image>
                            </View>


                        </Animatable.View>
                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>


                        <Animatable.View animation="fadeInUp" >

                            <TouchableOpacity style={styles.button} >
                                <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Submit </Text>
                            </TouchableOpacity>
                        </Animatable.View>

                    </View>



                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    )
}
export default ghusl;



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0178B9",




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
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: "#0178B9",
        marginTop: "10%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"


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