
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
import duaa from '../Assets/Icons/dua.png';
import { Domain } from '../Api/Api';

import { Radio } from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'






function dua({ navigation }) {

    //...........selection of image
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    let [PPrivate, setPPrivate] = useState(false);
    let [PPublic, setPPublic] = useState(false);




    goToGusal = () => {
        navigation.navigate('ghusl')

    }


    Back = () => {
        navigation.pop()
    }



    setPrivateDua = () => {
        if (PPrivate == true) {
            setPPrivate(false)
            setPPublic(false)
        }
        else if (PPrivate == false) {
            setPPrivate(true)
            setPPublic(false)
        }

    }
    setPublicDua = () => {
        if (PPublic == true) {
            setPPrivate(false)
            setPPublic(false)
        }
        else if (PPublic == false) {
            setPPrivate(false)
            setPPublic(true)
        }

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

                    < View animation="fadeInUp" style={styles.ImageView}>


                        <Image source={duaa} style={{ height: 70, width: 70, borderRadius: 35, alignSelf: 'center', resizeMode: "contain" }} />

                    </ View>

                    < Text style={{ fontSize: 18, textAlign: "center", color: "#0178B9", fontWeight: "bold" }}>Request For Dua</ Text>


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
                            placeholder="Your Dua"
                            placeholderTextColor={'#9a9999'}
                            onChangeText={(val) => { }}


                            style={styles.input2}

                            underlineColorAndroid='transparent' />


                    </View>






                    <View style={{ justifyContent: "space-around", alignItems: "center", width: '100%', flexDirection: "row", marginVertical: 20 }}>

                        <TouchableWithoutFeedback onPress={() => setPrivateDua()} >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>

                                <View style={{ padding: 3, backgroundColor: "#919191", flexDirection: "row", borderRadius: 10, marginRight: 10, }}>

                                    {PPrivate == false &&
                                        <View style={{ width: 16, backgroundColor: "white", height: 16, borderRadius: 15 }}>
                                        </View>
                                    }
                                    {PPrivate == true &&
                                        <View style={{ width: 16, backgroundColor: "#0178B9", height: 16, borderRadius: 15 }}>
                                        </View>
                                    }

                                </View>
                                <View >
                                    <Text style={{ color: 'black', fontSize: 15, }}>Group</Text>
                                </View>

                            </View>
                        </TouchableWithoutFeedback >

                        <TouchableWithoutFeedback onPress={() => setPublicDua()} >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>

                                <View style={{ padding: 3, backgroundColor: "#919191", flexDirection: "row", borderRadius: 10, marginRight: 10, }}>

                                    {PPublic == false &&
                                        <View style={{ width: 16, backgroundColor: "white", height: 16, borderRadius: 15 }}>
                                        </View>
                                    }
                                    {PPublic == true &&
                                        <View style={{ width: 16, backgroundColor: "#0178B9", height: 16, borderRadius: 8, }}>
                                        </View>
                                    }

                                </View>
                                <View >
                                    <Text style={{ color: 'black', fontSize: 15, }}>Public</Text>
                                </View>

                            </View>
                        </TouchableWithoutFeedback >





                    </View>

                    <View style={{ justifyContent: "flex-end", width: '100%', flexDirection: "row", paddingLeft: 100, marginVertical: 10 }}>

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
        height: 40,
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
    ImageView: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: "#0178B9",
        marginTop: "10%",
        marginBottom: "5%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",


    },



})