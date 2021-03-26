
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
import Camera from '../Assets/Icons/camera.png';
import Logo from '../Assets/Icons/Logo.jpg'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'



function homePostDetail({ navigation }) {

    //...........selection of image







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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Post Detail </Text>

                </View>
            </View>

            <Animatable.View style={{ backgroundColor: "#FFF", flex: 1 }}>
                <View style={{ height: 300, width: "100%" }}>
                    <Image source={Logo} resizeMode="cover" style={{ height: 300, width: "100%", resizeMode: "contain" }} />

                </View>

                <View style={styles.shopInfo}>
                    <View style={{ width: "50%", height: 30, flexDirection: "column", justifyContent: "center" }}>
                        <Text style={styles.shopHeading}>post detail</Text>
                        <Text style={styles.shopText}>12/12/12 </Text>
                    </View>
                    {/* <TouchableOpacity style={{width:"35%", backgroundColor:this.state.backClolr, height:50,justifyContent:"center",alignItems:"center", borderRadius:10}} onPress={()=>{this.shopNowProduct()}}> 
                          <Text style={{  fontSize: 16,textAlign:"center",  fontWeight: "bold",color:"white"}}>Shop Now  </Text>
                          </TouchableOpacity> */}
                </View>

                <View style={styles.shopDescription}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 14
                    }}>{123} </Text>
                </View>
            </Animatable.View>
        </SafeAreaView>
    )
}
export default homePostDetail;



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0178B9",




    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5

    },
    textField: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,

        fontSize: 15,
        width: "90%",


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
    ImageView: {
        height: 150,
        width: 150,
        borderRadius: 75,
        alignItems: "center", justifyContent: "center",
        backgroundColor: "#F4F4F4"


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


    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',

    },



    shopHeading: {

        fontSize: 14,
        fontWeight: "bold",

    },
    shopText: {

        marginTop: 5,
        fontWeight: "500",
        fontSize: 12
    },
    shopInfo: {
        borderBottomColor: "silver",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        alignSelf: "center",
        paddingVertical: 10,
        width: "90%"
    },
    shopDescription: {


        alignSelf: "center",
        paddingVertical: 10,
        width: "90%"
    },
})