
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

import { Domain } from '../Api/Api';





function communityPaynow({ navigation, route }) {
    let [isAnimating, setAnimating] = useState(false);
    let [isDisabled, setisDisabled] = useState(false);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    let [firstValue, setFirstValue] = useState(false);
    let [secondValue, setSecondValue] = useState(false);
    let [GiftAid, setAGiftAid] = useState(true);
    let [administrationSadqa, setadministrationSadqa] = useState(2);
    let [administration, setAddministration] = useState(false);


    Back = () => {
        navigation.pop()
    }

    Paynow = () => {
        route.params.sethaveGRoup(true)
        navigation.pop()

    }

    //...........selection of image


    selectOfValue = (value) => {
        if (value == 1) { setFirstValue(true); setSecondValue(false); }
        else if (value == 2) { setFirstValue(false); setSecondValue(true); }
        else if (value == 3) { setFirstValue(false); setSecondValue(false); }
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



                    <View style={{ padding: "5%", marginTop: "5%" }}>


                        <Animatable.Text animation="fadeInUp" style={styles.label}>Select amount </Animatable.Text>


                        <Animatable.View animation="fadeInUp" style={{ flexDirection: "row", width: "100%", marginTop: 5, marginBottom: 10, backgroundColor: "#F2F2F2" }}>

                            <TouchableOpacity onPress={() => selectOfValue(1)} style={[styles.fundAmount, { backgroundColor: firstValue == true ? "#0178B9" : "#F2F2F2", }]}>
                                <Text>£12-50 Monthly</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectOfValue(2)} style={[styles.fundAmount, { backgroundColor: secondValue == true ? "#0178B9" : "#F2F2F2", }]}>

                                <Text>£150 Annually </Text>

                            </TouchableOpacity>

                        </Animatable.View>

                    </View>
                    <View style={[styles.inputContainer2, {}]}>

                        <View style={{}}>
                            <TouchableWithoutFeedback onPress={() => setAddministration(!administration)}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>

                                    <View style={{ width: 27, backgroundColor: "#C8C7CC", height: 15, padding: 1, borderRadius: 10, marginRight: 10 }}>

                                        {administration == false &&
                                            <View style={{ width: 14, backgroundColor: "white", height: 13, borderRadius: 10 }}>
                                            </View>
                                        }
                                        {administration == true &&
                                            <View style={{ width: 14, backgroundColor: "#0178B9", height: 13, borderRadius: 10, alignSelf: "flex-end" }}>
                                            </View>
                                        }

                                    </View>
                                    <View >
                                        <Text style={{ color: 'black', fontSize: 15, }}>Addministration </Text>
                                    </View>

                                </View>
                            </TouchableWithoutFeedback >

                        </View>
                        <Text style={{ color: '#B7B7BB', fontSize: 12, }} >Sadaqa £{administrationSadqa} - one off</Text>
                    </View>

                    <View style={[styles.inputContainer2, { marginVertical: 20 }]}>

                        <View style={{ width: '100%', justifyContent: "center" }}>
                            <TouchableWithoutFeedback onPress={() => setAGiftAid(!GiftAid)}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>

                                    <View style={{ width: 27, backgroundColor: "#C8C7CC", height: 15, padding: 1, borderRadius: 10, marginRight: 10 }}>

                                        {GiftAid == false &&
                                            <View style={{ width: 14, backgroundColor: "white", height: 13, borderRadius: 10 }}>
                                            </View>
                                        }
                                        {GiftAid == true &&
                                            <View style={{ width: 14, backgroundColor: "#0178B9", height: 13, borderRadius: 10, alignSelf: "flex-end" }}>
                                            </View>
                                        }

                                    </View>
                                    <View style={{ paddingRight: 20 }}>
                                        <Text style={{ color: 'black', fontSize: 14, }}>Yes,I would like Gift Aid clamed on my donation </Text>
                                    </View>

                                </View>
                            </TouchableWithoutFeedback >
                        </View>

                    </View>



                    <TouchableOpacity style={styles.button} onPress={() => Paynow()}>
                        <Text style={{ color: '#FFFFFF', fontSize: 17, }}>PAY NOW TO JOIN</Text>
                    </TouchableOpacity>


                </ScrollView>
                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>

        </SafeAreaView >
    )
}
export default communityPaynow;



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
    fundAmount: {
        flexDirection: "row", width: "50%", height: 40,
        alignItems: "center", justifyContent: "center",

        borderWidth: 1, borderColor: "#0178B9"
    },
    inputContainer2: {
        //   alignItems: 'flex-start',
        //   justifyContent: 'flex-start',

        backgroundColor: '#FFF',
        borderRadius: 25,
        shadowColor: "#000",
        padding: 10,
        flexDirection: "row",
        marginHorizontal: "5%",
        justifyContent: "space-between",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

})