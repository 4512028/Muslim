
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




function profileEdit({ route, navigation }) {
    const { item } = route.params;

    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState(item.firstName);
    const [lastNAme, setlastNAme] = useState(item.LastName);
    const [emailAdress, setEmail] = useState("");
    const [address, setAddres] = useState(item.phoneNumber);
    const [phoneNumber, setPhone] = useState(item.firstName);
    const [postalCode, setPostalCode] = useState(item.postalCode);
    const [town, setTown] = useState(item.firstName);
    const [mosque, setMosque] = useState(item.mosque);
    const [isAnimating, setAnimating] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const [response1, setResponse1] = React.useState(null);
    const [isSelected1, setSelected1] = useState(false);


    Back = () => {
        route.params.getProfile
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

    const editProfile = async () => {
        if (title.trim() === "") {
            alert("Title is required!");
            return
        } else if (firstName.trim() === "") {
            alert("First Name is required!");
            return
        }
        else if (lastNAme.trim() === "") {
            alert("Last Name is required!");
            return
        }
        else if (address.trim() === "") {
            alert("Address is required!");
            return
        } else if (phoneNumber.trim() === "") {
            alert("phone Number is required!");
            return
        }
        else if (postalCode.trim() === "") {
            alert("postal Code is required!");
            return
        }
        else if (town.trim() === "") {
            alert("Town is required!");
            return
        }
        else if (mosque.trim() === "") {
            alert("Mosque is required!");
            return
        }
        // else if (emailAdress.trim() === "") {
        //     alert("Email is required");
        //     return
        // }
        // else if (validator.validate(emailAdress.trim()) === false) {
        //     alert("Email format is not correct.");
        //     return
        // }
        // else if (password.trim() === "") {
        //     alert("Password is required!");
        //     return
        // }
        // else if (password.length < 5) {
        //     alert("Password type more than 5 words");
        //     return
        // }
        // else if (password !== confirmPassword) {
        //     alert("Password not match! Try again");
        //     return
        // }

        else {
            setDisabled(true)
            setAnimating(true)
            var data = new FormData();
            data.append("id", "1")
            data.append("action", "profile_update")
            data.append("first_name", firstName)
            data.append("last_name", lastNAme)
            data.append("mosque", mosque)
            data.append("address", address)
            data.append("town", town)
            data.append("phone", phoneNumber)
            data.append("post_code", postalCode)
            data.append("post_code", postalCode)
            data.append("uploadedFile", {
                uri: response1.uri,
                name: 'uploadedFile.jpg',
                type: 'uploadedFile/jpg'
            })

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
                    console.log(responseData, "jnkkn")

                    console.log(responseData, "responseData of api")

                    if (responseData.status === true) {
                        setDisabled(false)
                        setAnimating(false)
                        alert(responseData.msg)
                    }
                    else {
                        alert(responseData.msg)
                        setDisabled(false)
                        setAnimating(false)
                    }

                })
                .catch((error) => {

                    console.log("error from home API", error);

                    setDisabled(false)
                    setAnimating(false)
                });


        }
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
                                    value={firstName}
                                    onChangeText={(val) => setFirstName(val)}
                                // textContentType={"name"}
                                >
                                </TextInput>
                                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                                    <Image source={Profile} style={{ height: 15, width: 15 }}></Image>
                                </View>
                            </Animatable.View>
                            <Animatable.View animation="fadeInUp" style={styles.seperater}></Animatable.View>
                            <Animatable.Text animation="fadeInUp" style={styles.label}>Last Name</Animatable.Text>
                            <Animatable.View animation="fadeInUp" style={{ flexDirection: 'row', }} >
                                <TextInput
                                    animation="fadeInUp"
                                    style={styles.textField}
                                    placeholder='First Name'
                                    placeholderTextColor='#d5c9de'
                                    placeholderTextColor='#d5c9de'
                                    value={lastNAme}
                                    onChangeText={(val) => setlastNAme(val)}
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

                                <TouchableOpacity style={styles.button} onPress={() => editProfile()} >
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