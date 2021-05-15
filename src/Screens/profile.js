// ./screens/Home.js

import React from "react";
import { View, StyleSheet, Button, ActivityIndicator, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import profilee from '../Assets/Icons/profile.png'
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






    gotoEditProofile = () => {

        navigation.navigate('profileEdit')

    }


    gotoVerifyProofile = () => {

        navigation.navigate('profileVerify')

    }

    openManue = () => {
        navigation.openDrawer();

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


                            <Image source={userP} style={{ height: 70, width: 70, borderRadius: 35, alignSelf: 'center', resizeMode: "contain" }} />

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
                                >umer</Text>
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
                                >mumersaleem79@gmail.com</Text>
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
                                >umer</Text>
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
                                >0304455665655</Text>
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
                                >32323</Text>
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
                                >umer</Text>
                            </View>




                        </View>
                    </View>



                </View>



            </ScrollView>
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

});

export default profile;
