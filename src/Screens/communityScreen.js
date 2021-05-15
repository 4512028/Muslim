
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
import { Card, CardItem, Body, } from 'native-base';
import { Domain } from '../Api/Api';






function communityScreen({ navigation }) {
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);




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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Community</Text>

                </View>
            </View>
            <View style={{ backgroundColor: "#FFF", flex: 1 }}>

                <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false} >

                    <View style={{ padding: "5%", }}>

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


                                    <TouchableOpacity style={styles.button} onPress={() => { gotoJoinGroup() }} >
                                        <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Join MMB Group </Text>
                                    </TouchableOpacity>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={{ padding: "5%", }}>

                        <Card >
                            <CardItem>
                                <Body>
                                    <View style={{ width: "100%" }}>
                                        <Text style={{ textAlign: "center", color: "#0178B9", fontSize: 18, fontWeight: "bold" }}> Community Group </Text>
                                        <Text style={{ textAlign: "center" }}>
                                            The community group allows you to either create a group or join an existing group with unique id code. your group will decided to pay a fee monthly or annually and if anyone should pass away while being part of this group the money will be towards their costs. These funds will be visible to group members.
                                   </Text>
                                    </View>

                                    <TouchableOpacity style={styles.button} onPress={() => { gotoCreateGroup() }} >
                                        <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Create Community Group </Text>
                                    </TouchableOpacity>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>










                </ScrollView>
                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>

        </SafeAreaView >
    )
}
export default communityScreen;



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