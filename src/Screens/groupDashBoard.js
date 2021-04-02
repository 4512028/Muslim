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





function groupDashBoard({ navigation }) {







    openManue = () => {
        navigation.openDrawer();

    }

    goTocomunity = () => {
        navigation.navigate('communityScreen')

    }




    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />

            {/* top bar */}
            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: '#0178B9' }}>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => openManue()}  >
                    <Image source={manue} style={{ width: 25, height: 25 }}></Image>

                </TouchableOpacity>
                <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Group Dashboard</Text>
                </View>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => { gotoEditProofile() }} >
                </TouchableOpacity>
            </View>
            {/* top bar */}
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
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

                        <TouchableWithoutFeedback   >

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
                            }}><Text style={{ fontSize: 18, color: "black", fontWeight: "bold", textAlign: "center" }}>GROUP CHAT</Text>

                            </View>

                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback   >

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

                        <TouchableWithoutFeedback   >

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

                        <TouchableWithoutFeedback onPress={() => { goTocomunity() }} >

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
                                <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>Community</Text>
                            </View>

                        </TouchableWithoutFeedback>
                    </View>

                </View>


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
});

export default groupDashBoard;
