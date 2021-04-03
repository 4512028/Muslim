
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






function joinGroup({ navigation, route }) {
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    const [name, setName] = useState("");
    const [id, setId] = useState("");



    Back = () => {
        navigation.pop()
    }


    joincomminityGroup = () => {
        route.params.sethaveGRoup(true)
        navigation.pop()
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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}> </Text>

                </View>
            </View>
            <View style={{ backgroundColor: "#FFF", flex: 1 }}>

                <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false} >


                    <Animatable.Text animation="fadeInUp" style={{ fontSize: 18, alignSelf: "center", textAlign: "center", marginTop: 30, marginHorizontal: "20%", color: "#0178B9", fontWeight: "bold" }}>Join community group</Animatable.Text>

                    <View style={{ padding: "5%", marginTop: "10%" }}>

                        <Animatable.Text animation="fadeInUp" style={styles.label}>Group name </Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder='TitGroup namele'
                                placeholderTextColor='#d5c9de'
                                value={name}
                                onChangeText={(val) => setName(val)}
                                textContentType={"name"}>
                            </TextInput>

                        </Animatable.View>


                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                        <Animatable.Text animation="fadeInUp" style={styles.label}>Group Id</Animatable.Text>
                        <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >
                            <TextInput
                                animation="fadeInUp"
                                style={styles.textField}
                                placeholder='Group Id'
                                placeholderTextColor='#d5c9de'
                                placeholderTextColor='#d5c9de'
                                value={id}
                                onChangeText={(val) => setId(val)}
                                textContentType={"name"}>
                            </TextInput>

                        </Animatable.View>
                        <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                    </View>


                    <TouchableOpacity style={styles.button} onPress={() => { joincomminityGroup() }} >
                        <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Join Group</Text>
                    </TouchableOpacity>





                </ScrollView>
                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>

        </SafeAreaView >
    )
}
export default joinGroup;



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
    textField: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,

        fontSize: 15,
        width: "90%",


    },
    seperater: {
        height: 1,
        marginBottom: 15,
        backgroundColor: '#d5c9de'
    },


})   