
import React from 'react';

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
import prayer from '../Assets/Icons/whitePrayer.png';

import time from '../Assets/Icons/time.png';
import book from '../Assets/Icons/book.png';
import pray from '../Assets/Icons/prayer.png';


function Prayer({ navigation }) {

    //...........selection of image




    goToDua = () => {
        navigation.push('dua')


    }
    goToQuran = () => {
        navigation.push('quran')


    }
    goToTasbi = () => {
        navigation.push('tasbi')


    }





    Back = () => {
        navigation.goBack()
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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Prayers</Text>

                </View>
            </View>

            <View style={{ backgroundColor: "#F2F2F2", flex: 1 }}>


                <View style={styles.ImageView}>


                    <Image source={prayer} style={{ height: 70, width: 70, borderRadius: 35, alignSelf: 'center', resizeMode: "contain" }} />

                </View>
                {/* < Text style={{ fontSize: 18, textAlign: "center", marginVertical: 30, color: "#0178B9", fontWeight: "bold" }}>Request For Dua</ Text> */}

                <TouchableOpacity style={[styles.flatView,]} onPress={() => goToDua()} >
                    <View style={{ flexDirection: 'row', width: "100%" }}>
                        <View style={{ width: "50%" }}>
                            <Image source={pray} style={{ alignSelf: 'center', width: 60, height: 60, resizeMode: "contain" }} />
                        </View>
                        <View style={{ width: "50%", justifyContent: "center" }}>
                            <Text style={{ color: '#0178B9', fontSize: 17, marginTop: 10, fontWeight: "bold", textAlign: "center" }}>Dua</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.flatView,]} onPress={() => goToQuran()} >
                    <View style={{ flexDirection: 'row', width: "100%" }}>
                        <View style={{ width: "50%" }}>
                            <Image source={book} style={{ alignSelf: 'center', width: 60, height: 60, resizeMode: "contain" }} />
                        </View>
                        <View style={{ width: "50%", justifyContent: "center" }}>
                            <Text style={{ color: '#0178B9', fontSize: 17, marginTop: 10, fontWeight: "bold", textAlign: "center" }}>Quran </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.flatView,]} onPress={() => goToTasbi()} >
                    <View style={{ flexDirection: 'row', width: "100%" }}>
                        <View style={{ width: "50%" }}>
                            <Image source={time} style={{ alignSelf: 'center', width: 60, height: 60, resizeMode: "contain" }} />
                        </View>
                        <View style={{ width: "50%", justifyContent: "center" }}>
                            <Text style={{ color: '#0178B9', fontSize: 17, marginTop: 10, fontWeight: "bold", textAlign: "center" }}>Tasbih </Text>
                        </View>
                    </View>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
    )
}
export default Prayer;



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0178B9",




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

    ImageView: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: "#0178B9",
        marginVertical: "10%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",


    },


    flatView: {
        width: '70%',
        marginBottom: "3%",
        paddingTop: '4%',
        paddingBottom: "4%",
        paddingLeft: '2%',
        paddingRight: '2%',
        borderRadius: 10,
        alignSelf: "center",
        backgroundColor: 'white',
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
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




})