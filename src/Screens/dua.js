
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
import Camera from '../Assets/Icons/camera.png';
import Modal from "react-native-modal";
import ModalComponent from '../Compmonent/othersModal'


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'






function dua({ navigation }) {

    //...........selection of image
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    let [PPrivate, setPPrivate] = useState(false);
    let [PPvalue, setPPvalue] = useState("Public");



    goToGusal = () => {
        navigation.navigate('ghusl')


    }


    Back = () => {
        navigation.pop()
    }

    useEffect(() => {
        if (PPrivate == true) setPPvalue("Private")
        else setPPvalue("Public")
    }, [PPrivate])

    setPublicPrivateDua = () => {
        setPPrivate(!PPrivate)

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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Dua</Text>

                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: "#F2F2F2", paddingHorizontal: "5%" }}>

                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >



                    <Text animation="fadeInUp" style={{ fontSize: 18, textAlign: "center", marginTop: 30, marginHorizontal: "20%", color: "#0178B9", fontWeight: "bold" }}>Request for Dua</Text>


                    <View style={[styles.inputContainer,]}>

                        <TextInput
                            autoCapitalize="none"
                            placeholder={"Your Name"}
                            placeholderTextColor={'#9a9999'}
                            // value={this.state.userName}
                            // onChangeText={(val) => this.updateInputVal(val, 'userName')}
                            style={styles.input}
                            underlineColorAndroid='transparent' />
                    </View>

                    <View style={[styles.inputContainer]}>
                        <TextInput

                            multiline={true}
                            autoCapitalize="none"
                            placeholder="Your Feedback"
                            placeholderTextColor={'#9a9999'}
                            onChangeText={(val) => { }}


                            style={styles.input2}

                            underlineColorAndroid='transparent' />


                    </View>






                    <View style={{ justifyContent: "space-between", alignItems: "center", width: '100%', flexDirection: "row", paddingLeft: 100, marginTop: 20 }}>

                        <TouchableWithoutFeedback onPress={() => setPublicPrivateDua()} >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>

                                <View style={{ width: 27, backgroundColor: "#C8C7CC", height: 15, padding: 1, borderRadius: 10, marginRight: 10 }}>

                                    {PPrivate == false &&
                                        <View style={{ width: 14, backgroundColor: "white", height: 13, borderRadius: 10 }}>
                                        </View>
                                    }
                                    {PPrivate == true &&
                                        <View style={{ width: 14, backgroundColor: "#0178B9", height: 13, borderRadius: 10, alignSelf: "flex-end" }}>
                                        </View>
                                    }

                                </View>
                                <View >
                                    <Text style={{ color: 'black', fontSize: 15, }}>{PPvalue} </Text>
                                </View>

                            </View>
                        </TouchableWithoutFeedback >


                        <TouchableWithoutFeedback onPress={() => { }} style={{ width: '50%' }}>
                            <View style={{ paddingStart: 20, paddingEnd: 20, backgroundColor: "#0178B9", borderRadius: 20, height: 32, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, color: "#FFF", textAlign: 'center' }}>Submit Request</Text>

                            </View>
                        </TouchableWithoutFeedback>


                    </View>












                </KeyboardAwareScrollView>
                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>



        </SafeAreaView >
    )
}
export default dua;



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
    input: {
        fontSize: 15,
        //   borderWidth:1,
        //   borderColor:"#EEF1EE" ,
        width: "100%",
        paddingLeft: 20,
        paddingBottom: 5,
        paddingTop: 5,

        color: '#9a9999',
        alignItems: 'flex-start',


        //   borderRadius:4,
        //   marginTop:5
    },

    inputContainer: {
        marginTop: 20,
        backgroundColor: '#FFF',
        borderRadius: 25,
        borderColor: "red",
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    input2: {
        fontSize: 15,
        width: "100%",
        paddingLeft: 20,
        paddingBottom: 140,
        color: '#9a9999',
        marginTop: 10,


    },



})