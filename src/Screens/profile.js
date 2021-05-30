// ./screens/Home.js

import React, { useState, useEffect, useContext, useRef } from "react";
import { View, StyleSheet, Button, ActivityIndicator, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import profilee from '../Assets/Icons/pro.png'
import edit from '../Assets/Icons/edit.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'
import post from '../Assets/Icons/post.png'
import phone from '../Assets/Icons/phone.png'
import manue from '../Assets/Icons/manue.png'
import back from '../Assets/Icons/Arrr.png';
import userP from '../Assets/Icons/userP.png';

import { Domain } from '../Api/Api';





function profile({ navigation }) {

    const [state, setState] = useState({
        title: "",
        firstName: "",
        LastName: "",
        emailAdress: "",
        password: "",
        address: "",
        phoneNumber: "",
        postalCode: "",
        town: "",
        image: "",
        mosque: "",


    });

    const [isAnimating, setAnimating] = useState(false);
    const [isDisabled, setDisabled] = useState(false);




    gotoEditProofile = () => {
        navigation.navigate('profileEdit', {
            item: state,
            getProfile: getProfile()
        });

    }

    useEffect(() => {
    }, []);

    gotoVerifyProofile = () => {

        navigation.navigate('profileVerify')

    }

    openManue = () => {
        navigation.openDrawer();

    }


    useEffect(() => {

        getProfile()


    }, []);

    useEffect(() => {


    }, [state.image]);
    getProfile = async () => {

        setDisabled(true)
        setAnimating(true)
        const id = await AsyncStorage.getItem('userID');

        var data = new FormData();
        data.append("userid", id)
        data.append("action", "get")
        data.append("screen", "users")

        fetch(Domain + '/apis/core.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': "multipart/form-data",
            },
            body: data

        }).then((response) => response.text())
            .then(async (responseText) => {

                let responseData = JSON.parse(responseText);
                console.log(responseData)
                if (responseData.status === true) {
                    setDisabled(false)
                    setAnimating(false)
                    console.log(responseData.data.first_name)
                    setState({
                        ...state,
                        firstName: responseData.data[0].first_name,
                        LastName: responseData.data[0].last_name,
                        emailAdress: responseData.data[0].email,
                        address: responseData.data[0].address,
                        phoneNumber: responseData.data[0].phone,
                        postalCode: responseData.data[0].post_code,
                        town: responseData.data[0].town,
                        mosque: responseData.data[0].mosque,
                        image: responseData.data[0].image
                    })
                }
                else {

                    alert(responseData.msg)
                    setDisabled(false)
                    setAnimating(false)
                }

            })
            .catch((error) => {
                console.log("error from addKin  API", error);
                setDisabled(false)
                setAnimating(false)
            });



    }



    openManue = () => {
        navigation.openDrawer();

    }



    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />

            {/* top bar */}
            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: '#0178B9' }}>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => openManue()} >
                    <Image source={manue} style={{ width: 25, height: 25 }}></Image>

                </TouchableOpacity>
                <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Profile</Text>
                </View>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => { gotoEditProofile() }} >
                    <Image source={edit} style={{ width: 25, height: 25 }}></Image>
                </TouchableOpacity>
            </View>
            {/* top bar */}
            <ScrollView keyboardShouldPersistTaps="handled">

                <View style={{ flex: 1, width: "100%", backgroundColor: "#F2F2F2" }}>
                    <TouchableOpacity onPress={() => gotoVerifyProofile()}>
                        <View style={{ alignSelf: "flex-end", height: 30, width: 100, backgroundColor: "#0178B9", alignItems: "center", justifyContent: "center", borderRadius: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ fontSize: 13, color: "black", color: "white", fontWeight: "bold" }}>Virefy Profile</Text>

                        </View>
                    </TouchableOpacity>
                    <View style={{ alignSelf: "center", paddingTop: "5%", }}>

                        <View style={styles.ImageView}>


                            <Image source={state.image == "" ? userP : { uri: Domain + "/apis/" + state.image }} style={{ height: 120, width: 120, borderRadius: 60, alignSelf: 'center', }} />

                        </View>

                    </View>

                    <View style={{ width: "90%", marginHorizontal: 20, }}>
                        <Text style={{ fontSize: 18, color: "black", }}>NAME :</Text>

                        <View style={{
                            flexDirection: 'row', height: 50, alignItems: 'center', marginTop: 5, borderRadius: 5, backgroundColor: "white"
                        }}>

                            <View style={{ width: '10%', alignItems: "center", justifyContent: "center" }}>
                                <Image source={profilee}
                                    style={{ width: 20, height: 20, }}
                                />
                            </View>
                            <View style={{ width: '90%' }
                            } >
                                <Text
                                    style={{
                                        color: "black",

                                        fontSize: 14,
                                        fontWeight: "600",

                                        alignSelf: 'flex-start',


                                    }}
                                >{state.firstName} {state.LastName}</Text>
                            </View>




                        </View>
                    </View>
                    <View style={{ width: "90%", marginHorizontal: 20, marginTop: 10, }}>
                        <Text style={{ fontSize: 18, color: "black", }}>EMAIL :</Text>

                        <View style={{
                            flexDirection: 'row', height: 50, alignItems: 'center', marginBottom: 10, marginTop: 5, borderRadius: 5, backgroundColor: "white"
                        }}>

                            <View style={{ width: '10%', alignItems: "center", justifyContent: "center" }}>
                                <Image source={email}
                                    style={{ width: 20, height: 20, }}
                                />
                            </View>
                            <View style={{ width: '90%' }
                            } >
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 14,
                                        fontWeight: "600",
                                        alignSelf: 'flex-start',
                                    }}
                                >{state.emailAdress}</Text>
                            </View>




                        </View>
                    </View>
                    <View style={{ width: "90%", marginHorizontal: 20, marginTop: 10, }}>
                        <Text style={{ fontSize: 18, color: "black", }}>ADDRESS :</Text>

                        <View style={{
                            flexDirection: 'row', height: 50, alignItems: 'center', marginBottom: 10, marginTop: 5, borderRadius: 5, backgroundColor: "white"
                        }}>


                            <View style={{ width: '10%', alignItems: "center", justifyContent: "center" }}>
                                <Image source={home}
                                    style={{ width: 20, height: 20, }}
                                />
                            </View>
                            <View style={{ width: '90%' }
                            } >
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 14,
                                        fontWeight: "600",

                                        alignSelf: 'flex-start',


                                    }}
                                >{state.address}</Text>
                            </View>




                        </View>
                    </View>
                    <View style={{ width: "90%", marginHorizontal: 20, marginTop: 10, }}>
                        <Text style={{ fontSize: 18, color: "black", }}>PHONE</Text>

                        <View style={{
                            flexDirection: 'row', height: 50, alignItems: 'center', marginBottom: 20, marginTop: 5, borderRadius: 5, backgroundColor: "white"
                        }}>

                            <View style={{ width: '10%', alignItems: "center", justifyContent: "center" }}>
                                <Image source={phone}
                                    style={{ width: 20, height: 20, }}
                                />
                            </View>
                            <View style={{ width: '90%' }
                            } >
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 14,
                                        fontWeight: "600",

                                        alignSelf: 'flex-start',


                                    }}
                                >{state.phoneNumber}</Text>
                            </View>




                        </View>
                    </View>

                    <View style={{ width: "90%", marginHorizontal: 20, marginTop: 10, }}>
                        <Text style={{ fontSize: 18, color: "black", }}>POSTAL CODE</Text>

                        <View style={{
                            flexDirection: 'row', height: 50, alignItems: 'center', marginBottom: 20, marginTop: 5, borderRadius: 5, backgroundColor: "white"
                        }}>

                            <View style={{ width: '10%', alignItems: "center", justifyContent: "center" }}>
                                <Image source={post}
                                    style={{ width: 20, height: 20, }}
                                />
                            </View>
                            <View style={{ width: '90%' }
                            } >
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 14,
                                        fontWeight: "600",

                                        alignSelf: 'flex-start',


                                    }}
                                >{state.postalCode}</Text>
                            </View>




                        </View>
                    </View>


                    <View style={{ width: "90%", marginHorizontal: 20, marginTop: 10, marginBottom: 100 }}>
                        <Text style={{ fontSize: 18, color: "black", }}>NEAREST MASJID</Text>

                        <View style={{
                            flexDirection: 'row', height: 50, alignItems: 'center', marginBottom: 20, marginTop: 5, borderRadius: 5, backgroundColor: "white"
                        }}>

                            <View style={{ width: '10%', alignItems: "center", justifyContent: "center" }}>
                                <Image source={home}
                                    style={{ width: 20, height: 20, }}
                                />
                            </View>
                            <View style={{ width: '90%' }
                            } >
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 14,
                                        fontWeight: "600",

                                        alignSelf: 'flex-start',


                                    }}
                                >{state.mosque}</Text>
                            </View>




                        </View>
                    </View>



                </View>



            </ScrollView>
            {isAnimating &&
                <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
            }
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
        backgroundColor: "#0178B9",
        alignItems: "center",
        justifyContent: "center"


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

});

export default profile;
