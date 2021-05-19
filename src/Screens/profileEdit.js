
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
import Profile from '../Assets/Icons/profile.png';
import Camera from '../Assets/Icons/camera.png';
import edit from '../Assets/Icons/edit.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'
import post from '../Assets/Icons/post.png'
import phone from '../Assets/Icons/phone.png'
import userP from '../Assets/Icons/userP.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import * as ImagePicker from "react-native-image-picker"
import { Domain } from '../Api/Api';




function profileEdit({ navigation }) {



    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [emailAdress, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddres] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [town, setTown] = useState("");
    const [mosque, setMosque] = useState("");
    const [isAnimating, setAnimating] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const [response1, setResponse1] = React.useState(null);
    const [isSelected1, setSelected1] = useState(false);


    Back = () => {
        navigation.goBack()
    }



    //...........selection of image
    selectImagee = (value) => {



        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response) => {


                setResponse1(response)
                setSelected1(true)



            },
        )
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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Edit Profile </Text>

                </View>
            </View>


            <ScrollView keyboardShouldPersistTaps="handled"   >

                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ backgroundColor: "#FFF" }}>


                        <View style={{ alignSelf: "center", paddingTop: "10%" }}>
                            <View style={styles.ImageView}>


                                <Image source={isSelected1 == true ? response1 : userP} style={isSelected1 == true ? { height: 150, width: 150, borderRadius: 75, alignSelf: 'center', } : { height: 100, width: 100, borderRadius: 50, alignSelf: 'center', }} />

                            </View>

                            <View style={{ height: 50, width: 50, position: 'absolute', bottom: -20, right: 20, borderRadius: 25, padding: 5, backgroundColor: "#0178B9" }}>
                                <TouchableOpacity onPress={() => { selectImagee() }} >
                                    <Image source={Camera} style={{ alignSelf: 'center', width: 40, height: 40, borderRadius: 25 }} />
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={{ padding: "5%", marginTop: "10%" }}>

                            <Animatable.Text animation="fadeInUp" style={styles.label}>Title</Animatable.Text>
                            <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >
                                <TextInput
                                    animation="fadeInUp"
                                    style={styles.textField}
                                    placeholder='Title'
                                    placeholderTextColor='#d5c9de'
                                    value={title}
                                    onChangeText={(val) => setTitle(val)}
                                // textContentType={"name"}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    <Image source={Profile} style={{ height: 15, width: 15 }}></Image>
                                </View>
                            </Animatable.View>


                            <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                            <Animatable.Text animation="fadeInUp" style={styles.label}>First Name</Animatable.Text>
                            <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >
                                <TextInput
                                    animation="fadeInUp"
                                    style={styles.textField}
                                    placeholder='First Name'
                                    placeholderTextColor='#d5c9de'
                                    placeholderTextColor='#d5c9de'
                                    onChangeText={(val) => setFirstName(val)}
                                // textContentType={"name"}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    <Image source={Profile} style={{ height: 15, width: 15 }}></Image>
                                </View>
                            </Animatable.View>
                            <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                            <Animatable.Text animation="fadeInUp" style={styles.label}>Address</Animatable.Text>
                            <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >

                                <TextInput
                                    animation="fadeInUp"
                                    style={styles.textField}
                                    placeholder='Address'
                                    placeholderTextColor='#d5c9de'
                                    value={address}
                                    onChangeText={(val) => setAddres(val)}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    <Image source={home} style={{ height: 15, width: 15 }}></Image>
                                </View>
                            </Animatable.View>

                            <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                            <Animatable.Text animation="fadeInUp" style={styles.label}>Town</Animatable.Text>
                            <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >

                                <TextInput
                                    animation="fadeInUp"
                                    style={styles.textField}
                                    placeholder='Town'
                                    placeholderTextColor='#d5c9de'
                                    value={town}
                                    onChangeText={(val) => setTown(val)}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    <Image source={post} style={{ height: 15, width: 15 }}></Image>
                                </View>
                            </Animatable.View>

                            <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                            <Animatable.Text animation="fadeInUp" style={styles.label}>Phone Number</Animatable.Text>
                            <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                                <TextInput
                                    animation="fadeInUp"
                                    style={styles.textField}
                                    placeholder="Phone Number "
                                    placeholderTextColor='#d5c9de'
                                    value={phoneNumber}
                                    onChangeText={(val) => setPhone(val)}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    <Image source={phone} style={{ height: 15, width: 15 }}></Image>
                                </View>


                            </Animatable.View>
                            <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                            <Animatable.Text animation="fadeInUp" style={styles.label}>Postal Code</Animatable.Text>
                            <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                                <TextInput
                                    animation="fadeInUp"
                                    style={styles.textField}
                                    placeholder="Postal Code "
                                    placeholderTextColor='#d5c9de'
                                    value={postalCode}
                                    onChangeText={(val) => setPostalCode(val)}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    <Image source={post} style={{ height: 15, width: 15 }}></Image>
                                </View>


                            </Animatable.View>
                            <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                            <Animatable.Text animation="fadeInUp" style={styles.label}>Nearest masjid</Animatable.Text>
                            <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row' }} >
                                <TextInput
                                    animation="fadeInUp"
                                    style={styles.textField}
                                    placeholder="Nearest masjid "
                                    placeholderTextColor='#d5c9de'
                                    value={mosque}
                                    onChangeText={(val) => setMosque(val)}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    <Image source={home} style={{ height: 15, width: 15 }}></Image>
                                </View>


                            </Animatable.View>
                            <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>

                            <Animatable.View animation="fadeInUp" >

                                <TouchableOpacity style={styles.button} >
                                    <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Update </Text>
                                </TouchableOpacity>
                            </Animatable.View>

                        </View>

                    </View>


                </KeyboardAwareScrollView>
            </ScrollView>
            {isAnimating &&
                <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
            }
        </SafeAreaView>
    )
}
export default profileEdit;



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
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',

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
        backgroundColor: "#0178B9"


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




})