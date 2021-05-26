// ./screens/Home.js

import React, { useState, useEffect, useContext, useRef } from "react";
import { View, StyleSheet, Button, Share, TextInput, ActivityIndicator, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import profilee from '../Assets/Icons/profile.png'
import edit from '../Assets/Icons/edit.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'
import post from '../Assets/Icons/post.png'
import Cross from '../Assets/Icons/close.png'
import manue from '../Assets/Icons/manue.png'
import Modal from "react-native-modal";
import { Domain } from '../Api/Api';


import { Card, CardItem, Body, } from 'native-base';




function groupDashBoard({ navigation }) {


    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    let [heading, setHeading] = useState("DashBoard ");
    let [modalVisible, setModalVisible] = useState(false);
    let [requestModalVisible, setRequestModalVisible] = useState(false);
    let [claimModalVisible, setclaimModalVisible] = useState(false);

    let [userHaveGroup, setUserHaveGroup] = useState(false);





    haveUSerGroup = async () => {
        async function haveGroup() {
            let haveGroup = await AsyncStorage.getItem('haveGroup')
            if (haveGroup) return true
            else return false
        }
        haveGroup();



    }

    useEffect(() => {
        (async () => {
            let haveGroup = await AsyncStorage.getItem('haveGroup')
            console.log(haveGroup)
            if (haveGroup == true) setUserHaveGroup(true)
            else setUserHaveGroup(false)
        })();
    }, []);



    openManue = () => {
        navigation.openDrawer();

    }

    goToPayNow = () => {
        navigation.navigate('communityPaynow', {
            sethaveGRoup: sethaveGRoup,

        })

    }


    sethaveGRoup = (value) => {
        setUserHaveGroup(value)
    }


    gotoJoinGroup = () => {
        setModalVisible(!modalVisible)
        navigation.navigate('CommunityJoinGroup', {
            sethaveGRoup: sethaveGRoup,

        })
    }
    gotochatScreen = () => {
        navigation.navigate('chatScreen', {
        })
    }


    gotoCreateGroup = () => {
        setModalVisible(!modalVisible)
        navigation.navigate('communityGroupCreate', {
            sethaveGRoup: sethaveGRoup,

        })


    }

    // share app code staert for android
    let Group_ID = '12AEDsFWW';
    const title = 'MMB';
    const message = 'Please check this out.';
    const options = Platform.select({
        ios: {
            activityItemSources: [
                { // For sharing url with custom title.
                    placeholderItem: { type: 'url', content: Group_ID },
                    item: {
                        default: { type: 'url', content: Group_ID },
                    },
                    subject: {
                        default: title,
                    },
                    linkMetadata: { originalUrl: Group_ID, title: message },
                },
                { // For sharing text.
                    placeholderItem: { type: 'text', content: message },
                    item: {
                        default: { type: 'text', content: message },
                        message: null, // Specify no text to share via Messages app.
                    },
                    linkMetadata: { // For showing app icon on share preview.
                        title: message
                    },
                },

            ],
        },
        default: {
            title,
            subject: title,
            message: `${message} ${Group_ID}`,
        },
    });



    gotoShairing = async () => {

        let Group_ID = ""

        if (Platform.OS === "ios") {
            Group_ID = "232dswFFF"
        }
        else {
            Group_ID = "232dswFFF"

        }

        try {
            const result = Share.share({
                message: 'MMB App' +
                    Group_ID,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    alert('Shared Successfully');
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }



        // Share.open(options)
        //   .then((res) => { console.log(res) })
        //   .catch((err) => { err && console.log(err); });
    }

    requestForFund = () => {

    }

    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />


            {claimModalVisible &&
                <Modal isVisible={claimModalVisible} transparent={true}>
                    <View style={styles.modalContainer}>


                        <View style={{
                            backgroundColor: "white", width: "100%", paddingHorizontal: 18, borderRadius: 5, marginVertical: 10,
                        }}>

                            {/* modal top bar */}
                            <View style={{ justifyContent: "space-between", flexDirection: "row", paddingTop: 10 }}>
                                < Text animation="fadeInUp" style={{ fontSize: 18, color: "#0178B9", fontWeight: "bold" }}>Public fund claim</Text>


                                <TouchableOpacity onPress={() => { setclaimModalVisible(!claimModalVisible) }
                                }>
                                    <Image source={Cross} style={{ resizeMode: "contain", height: 20, width: 20, marginBottom: 5 }} />
                                </TouchableOpacity>
                            </View>
                            {/* modal top bar */}

                            <View style={[styles.inputContainer]}>
                                <TextInput

                                    multiline={true}
                                    autoCapitalize="none"
                                    placeholder="Public fund claim"
                                    placeholderTextColor={'#9a9999'}
                                    onChangeText={(val) => { }}


                                    style={styles.input2}

                                    underlineColorAndroid='transparent' />


                            </View>






                            <View style={{ justifyContent: 'flex-end', width: '100%', flexDirection: "row", marginBottom: 20 }}>

                                <TouchableWithoutFeedback onPress={() => { }} style={{ width: '50%' }} onPress={() => setclaimModalVisible(!claimModalVisible)}>
                                    <View style={{ paddingStart: 20, paddingEnd: 20, backgroundColor: "#0178B9", borderRadius: 20, height: 42, marginTop: 15, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 14, color: "#FFF", textAlign: 'center' }}>Submit Claim</Text>

                                    </View>
                                </TouchableWithoutFeedback>


                            </View>


                            {/* modal foooter */}



                            {/* modal foooter  ends*/}

                        </View>

                    </View>
                </Modal>
            }
            {requestModalVisible &&
                <Modal isVisible={requestModalVisible} transparent={true}>
                    <View style={styles.modalContainer}>


                        <View style={{
                            backgroundColor: "white", width: "100%", paddingHorizontal: 18, borderRadius: 5, marginVertical: 10,
                        }}>

                            {/* modal top bar */}
                            <View style={{ justifyContent: "space-between", flexDirection: "row", paddingTop: 10 }}>
                                < Text animation="fadeInUp" style={{ fontSize: 18, color: "#0178B9", fontWeight: "bold" }}>Request for release fund</Text>


                                <TouchableOpacity onPress={() => { setRequestModalVisible(!requestModalVisible) }
                                }>
                                    <Image source={Cross} style={{ resizeMode: "contain", height: 20, width: 20, marginBottom: 5 }} />
                                </TouchableOpacity>
                            </View>
                            {/* modal top bar */}

                            <View style={[styles.inputContainer]}>
                                <TextInput

                                    multiline={true}
                                    autoCapitalize="none"
                                    placeholder="Request for release fund"
                                    placeholderTextColor={'#9a9999'}
                                    onChangeText={(val) => { }}


                                    style={styles.input2}

                                    underlineColorAndroid='transparent' />


                            </View>






                            <View style={{ justifyContent: 'flex-end', width: '100%', flexDirection: "row", marginBottom: 20 }}>

                                <TouchableWithoutFeedback onPress={() => { }} style={{ width: '50%' }} onPress={() => setRequestModalVisible(!requestModalVisible)} >
                                    <View style={{ paddingStart: 20, paddingEnd: 20, backgroundColor: "#0178B9", borderRadius: 20, height: 42, marginTop: 15, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 14, color: "#FFF", textAlign: 'center' }}>Submit Request</Text>

                                    </View>
                                </TouchableWithoutFeedback>


                            </View>


                            {/* modal foooter */}



                            {/* modal foooter  ends*/}

                        </View>

                    </View>
                </Modal>
            }

            {
                modalVisible &&
                <Modal isVisible={modalVisible} transparent={true}>
                    <View style={styles.modalContainer}>


                        <View style={{
                            backgroundColor: "white", width: "100%", paddingHorizontal: 18, borderRadius: 5, marginVertical: 10,
                        }}>

                            {/* modal top bar */}
                            <View style={{ alignSelf: "flex-end", paddingTop: 10 }}>
                                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }
                                }>
                                    <Image source={Cross} style={{ resizeMode: "contain", height: 20, width: 20, marginBottom: 5 }} />
                                </TouchableOpacity>
                            </View>
                            {/* modal top bar */}
                            <View style={{ flexDirection: "column", alignSelf: "center", marginVertical: 30 }}>
                                <Text style={{ color: '#0178B9', fontSize: 20, fontWeight: 'bold', textAlign: "center" }}>You can create / join community group. </Text>


                            </View>
                            <TouchableOpacity style={styles.ModalButton} onPress={() => { gotoCreateGroup() }} >
                                <View style={{ flexDirection: "row", alignSelf: "center" }}>

                                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' }}>Create Community Group</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ModalButton} onPress={() => { gotoJoinGroup() }}>
                                <View style={{ flexDirection: "row", alignSelf: "center" }}>

                                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 'bold', textAlign: "center" }}>Join Community Group</Text>
                                </View>
                            </TouchableOpacity>

                            {/* modal foooter */}



                            {/* modal foooter  ends*/}

                        </View>

                    </View>
                </Modal>
            }

            {/* top bar */}
            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: '#0178B9' }}>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => openManue()}  >
                    <Image source={manue} style={{ width: 25, height: 25 }}></Image>

                </TouchableOpacity>
                <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>{heading}</Text>
                </View>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => { gotoEditProofile() }} >
                </TouchableOpacity>
            </View>
            {/* top bar */}
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>




                {
                    userHaveGroup == false ?
                        <View style={{ flex: 1, width: "100%", paddingHorizontal: 20, backgroundColor: "#F2F2F2" }}>
                            <Card >
                                <CardItem>
                                    <Body>
                                        <View style={{ width: "100%" }}>
                                            <Text style={{ textAlign: "center", color: "#0178B9", fontSize: 18, fontWeight: "bold" }}>
                                                MMB Group  </Text>

                                            <Text style={{ textAlign: "center" }}>
                                                My Muslim burial group is a public group you can join within your community. you will be paying a monthly fee and should anyone from the group pass away they will get thier funeral costs covered subject to term and conditiond.
                               </Text>
                                        </View>


                                        <TouchableOpacity style={styles.button} onPress={() => { goToPayNow() }} >
                                            <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Join MMB Group </Text>
                                        </TouchableOpacity>
                                    </Body>
                                </CardItem>
                            </Card>


                            <Card >
                                <CardItem>
                                    <Body>
                                        <View style={{ width: "100%" }}>
                                            <Text style={{ textAlign: "center", color: "#0178B9", fontSize: 18, fontWeight: "bold" }}> Community Group </Text>
                                            <Text style={{ textAlign: "center" }}>
                                                The community group allows you to either create a group or join an existing group with unique id code. your group will decided to pay a fee monthly or annually and if anyone should pass away while being part of this group the money will be towards their costs. These funds will be visible to group members.
                               </Text>
                                        </View>

                                        <TouchableOpacity style={styles.button} onPress={() => { setModalVisible(!modalVisible) }} >
                                            <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Create Community Group </Text>
                                        </TouchableOpacity>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>


                        :

                        <View style={{ flex: 1, width: "100%", paddingHorizontal: 20, backgroundColor: "#F2F2F2" }}>

                            <TouchableWithoutFeedback   >

                                <View style={{
                                    width: '100%', flexDirection: 'column', marginVertical: 20, alignItems: 'center', borderRadius: 10, justifyContent: 'center',
                                    backgroundColor: '#FFF',
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.22,
                                    shadowRadius: 2.22,

                                    elevation: 3,
                                }}>
                                    <Text style={{ fontSize: 20, color: "#0178B9", fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Umer Saleem</Text>
                                    <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", marginBottom: 10 }}>£3</Text>
                                    <Text style={{ fontSize: 16, color: "#8A8A8A", fontWeight: "bold", marginBottom: 10 }}>2 Members</Text>
                                    <Text style={{ fontSize: 16, color: "#8A8A8A", fontWeight: "bold", marginBottom: 10 }}>2 Love one</Text>
                                </View>

                            </TouchableWithoutFeedback>

                            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                <TouchableWithoutFeedback   >

                                    <View style={{
                                        height: 120, width: '48%', flexDirection: 'column', marginVertical: 5, alignItems: 'center', borderRadius: 10, justifyContent: 'center',
                                        backgroundColor: '#FFF',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.22,
                                        shadowRadius: 2.22,

                                        elevation: 3,
                                    }}>

                                        <Text style={{ fontSize: 14, color: "black", fontWeight: "bold", }}>START DATE</Text>
                                        <Text style={{ fontSize: 12, color: "#8A8A8A", fontWeight: "bold", marginBottom: 10 }}>12/12/2020</Text>

                                        <Text style={{ fontSize: 14, color: "black", fontWeight: "bold", }}>PAYMENT MADE</Text>
                                        <Text style={{ fontSize: 12, color: "#8A8A8A", fontWeight: "bold", }}>12</Text>
                                    </View>

                                </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback onPress={() => gotoShairing()}   >

                                    <View style={{
                                        height: 120, width: '48%', flexDirection: 'column', marginVertical: 5, paddingHorizontal: 20, alignItems: 'center', borderRadius: 10, justifyContent: 'center',
                                        backgroundColor: '#FFF',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.22,
                                        shadowRadius: 2.22,

                                        elevation: 3,
                                    }}>
                                        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>Share your group ID</Text>
                                    </View>

                                </TouchableWithoutFeedback>
                            </View>
                            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                <TouchableWithoutFeedback onPress={() => gotochatScreen()} >

                                    <View style={{
                                        height: 120, width: '48%', flexDirection: 'column', marginVertical: 5, alignItems: 'center', borderRadius: 10, justifyContent: 'center',
                                        backgroundColor: '#FFF',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.22,
                                        shadowRadius: 2.22,

                                        elevation: 3,
                                    }}><Text style={{ fontSize: 18, color: "black", fontWeight: "bold", textAlign: "center" }}>GROUP CHAT</Text>

                                    </View>

                                </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback onPress={() => setclaimModalVisible(!claimModalVisible)}>

                                    <View style={{
                                        height: 120, width: '48%', flexDirection: 'column', marginVertical: 5, paddingHorizontal: 20, alignItems: 'center', borderRadius: 10, justifyContent: 'center',
                                        backgroundColor: '#FFF',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.22,
                                        shadowRadius: 2.22,

                                        elevation: 3,
                                    }}>
                                        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>PUBLIC FUND CLAIM</Text>
                                    </View>

                                </TouchableWithoutFeedback>
                            </View>
                            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>

                                <TouchableWithoutFeedback onPress={() => setRequestModalVisible(!requestModalVisible)} >

                                    <View style={{
                                        height: 120, width: '48%', flexDirection: 'column', marginVertical: 5, paddingHorizontal: 20, alignItems: 'center', borderRadius: 10, justifyContent: 'center',
                                        backgroundColor: '#FFF',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.22,
                                        shadowRadius: 2.22,

                                        elevation: 3,
                                    }}>
                                        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>FUND RELEASE REQUEST</Text>
                                    </View>

                                </TouchableWithoutFeedback>


                            </View>

                        </View>


                }

                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </ScrollView >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0178B9",
        alignContent: 'center',
    },
    ImageView: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center"


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
    modalContainer: {
        flex: 1,
        width: "100%",

        alignSelf: "center",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        overflow: "hidden",

    },
    ModalButton: {
        marginBottom: 10,
        alignSelf: 'center',
        height: 40,
        width: 200,
        backgroundColor: '#0178B9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
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
});

export default groupDashBoard;
