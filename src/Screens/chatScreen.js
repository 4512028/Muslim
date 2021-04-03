
import React, { useState, useEffect, useContext, useRef } from "react";

import {
    View,
    Text,
    StyleSheet, KeyboardAvoidingView,
    Image,
    StatusBar,
    Alert, Platform,
    TextInput,
    Dimensions, Keyboard,
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
import profileuser from '../Assets/Icons/chatUSer.png';
import profile from '../Assets/Icons/profile.png';

import send from '../Assets/Icons/send.png';


import { Card, CardItem, Body, } from 'native-base';
import { set } from "react-native-reanimated";






function chatScreen({ navigation }) {
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    let [keyboardHieght, setkeyboardHieght] = useState(60);
    let [botmMargin, setbotmMargin] = useState(60);
    let [message, setMessage] = useState("");
    let [initialMessage, setInitialMessage] = useState([
        1, 2, 3, 4, 5, 6, 7, 8
    ]);





    sendMessage = () => {
        setkeyboardHieght(60)
        setbotmMargin(60)
        Keyboard.dismiss()

    }

    useEffect(() => {

        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', async (e) => {
            setkeyboardHieght(e.endCoordinates.height - 30)
            setbotmMargin(60)

        })

        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', async (e) => {
            setkeyboardHieght(0)
            setbotmMargin(60)

        })


    }, []);



    Back = () => {
        navigation.pop()
    }

    //...........selection of image



    gotoJoinGroup = () => {

        navigation.navigate('CommunityJoinGroup')

    }


    gotoCreateGroup = () => {

        navigation.navigate('communityGroupCreate')

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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Chat</Text>

                </View>
            </View>
            <View style={{ backgroundColor: "#FFF", flex: 1 }}>

                <KeyboardAvoidingView behavior={'height'} style={{ flex: 1, }} keyboardVerticalOffset={-25} >

                    <View style={{ height: '72%', flex: 1, transform: [{ rotate: '180deg' }] }} keyboardShouldPersistTaps={'handled'} >


                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ flex: 1 }}

                            keyboardShouldPersistTaps={'handled'}
                            contentContainerStyle={{ height: '100%', }}

                        >


                            <View style={{ padding: 5, marginTop: 20, padding: 1, paddingLeft: 6, paddingRight: 6, transform: [{ rotate: '180deg' }] }}>

                                <FlatList
                                    data={initialMessage}
                                    style={{ transform: [{ rotate: '180deg' }] }}
                                    onEndReachedThreshold={0}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <View style={{ transform: [{ rotate: '180deg' }] }}>
                                                {index % 2 == 0 &&

                                                    <View style={[{ alignSelf: 'flex-start', width: '70%', padding: 1, marginBottom: 5, }]}>
                                                        <View style={{ flexDirection: "row", alignItems: "center", borderRadius: 10, backgroundColor: "#F0F0F0", }}>
                                                            <Image source={profile} style={{ height: 30, width: 30, }} />


                                                            <View style={[{ color: 'black', backgroundColor: "#F0F0F0" }]}>

                                                                <Text style={{ alignSelf: 'flex-start', paddingTop: 3, paddingLeft: 10, paddingRight: 10, fontSize: 16, fontWeight: 'bold' }}>Umer</Text>
                                                                <Text style={{ alignSelf: 'flex-start', paddingLeft: 10, paddingRight: 10, paddingBottom: 5 }}>Message send by umer</Text>

                                                            </View>
                                                        </View>


                                                    </View>





                                                }
                                                {index % 2 != 0 &&
                                                    <View style={[{ alignSelf: 'flex-end', width: '70%', padding: 1, marginLeft: 20, borderRadius: 10, marginBottom: 5 }]}>
                                                        <View style={[{ borderRadius: 10, borderRadius: 10, color: 'black', height: 30, textAlign: 'left', backgroundColor: '#F0F0F0', justifyContent: 'flex-end' }]}>

                                                            <Text style={{ alignSelf: 'flex-end', paddingLeft: 20, paddingRight: 10, paddingBottom: 5 }}>Message send by umer</Text>

                                                        </View>


                                                    </View>
                                                }
                                            </View>
                                        )
                                    }
                                    }

                                />


                                {/* {chatMessagesss} */}


                            </View>


                        </ScrollView>

                    </View>




                </KeyboardAvoidingView >
                <View style={{
                    marginBottom: Platform.OS === 'ios' ? keyboardHieght : botmMargin,
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: "95%",
                    alignSelf: "center"
                }}>
                    <View style={{ borderRadius: 15, width: '90%', backgroundColor: "#C7C7C7", flexDirection: 'row', justifyContent: "flex-end", }}>
                        <View style={{ width: '15%', justifyContent: "flex-end", marginLeft: '1%' }}>
                            <Image source={profileuser} style={{ width: 30, height: 30, marginLeft: 15, marginRight: 5, marginBottom: 5, marginTop: 6, }}></Image>
                        </View>
                        <View style={{ width: '85%', alignSelf: 'center', }}>

                            <TextInput
                                justifyContent={'center'}
                                placeholder={'Write a message'}
                                placeholderTextColor="white"
                                fontSize={15}
                                style={{ color: "white" }}
                                // value={this.state.writeComment}
                                // onChangeText={(val) => this.updateInputVal(val, 'writeComment')}
                                multiline={true}
                                ref={input => { this.textInput = input }}
                            />



                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={this.sendMessage}
                        style={{ width: '13%', alignItems: 'center', paddingRight: '2%', marginRight: 15, marginTop: 5 }}>
                        <Image source={send} style={{ width: 30, height: 30, marginLeft: 15, marginRight: 5, marginBottom: 5, marginTop: 6, }}></Image>

                    </TouchableOpacity>



                </View>

                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>

        </SafeAreaView >
    )
}
export default chatScreen;



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
    label: {
        fontWeight: 'bold',
        marginBottom: 5

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