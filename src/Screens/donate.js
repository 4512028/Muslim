// ./screens/Home.js

import React, { useState, useEffect, useContext, useRef } from "react";
import down from '../Assets/Icons/down.png';
import { View, StyleSheet, ActivityIndicator, StatusBar, TextInput, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import profilee from '../Assets/Icons/profile.png'
import edit from '../Assets/Icons/edit.png'
import email from '../Assets/Icons/email.png'
import home from '../Assets/Icons/home.png'
import post from '../Assets/Icons/post.png'
import phone from '../Assets/Icons/phone.png'
import manue from '../Assets/Icons/manue.png'
import Modal from "react-native-modal";
import ModalComponent from '../Compmonent/modalComponenet'
import { Card, CardItem, Body, Container, Header, Tab, Tabs, TabHeading, Icon, Text, Fab } from 'native-base';






function donates({ navigation }) {


    let [funds, setFunds] = useState("Genral Burial Funds");
    let [fundsArry, setFundsArry] = useState([
        { value: 'Genral Burial Funds', selected: false },
    ]);
    let [manuallyAddFund, setmanuallyAddFunds] = useState(0);
    let [list, SetModalList] = useState([]);
    let [modalHeading, setModalHeading] = useState("");
    let [modalVisible, setmodalVisible] = useState(false);
    let [donationType, setDonationType] = useState("one time");
    let [onefirstValue, setFirstValue] = useState(false);
    let [onesecondValue, setSecondValue] = useState(false);
    let [onethirdValue, setthirdValue] = useState(false);
    let [monthfirstValue, setMonthFirstValue] = useState(false);
    let [monthsecondValue, setMonthSecondValue] = useState(false);
    let [monththirdValue, setMonththirdValue] = useState(false);
    let [administration, setAddministration] = useState(false);
    let [administrationSadqa, setadministrationSadqa] = useState(2);
    let [GiftAid, setAGiftAid] = useState(true);

    openManue = () => {
        navigation.openDrawer();

    }
    selectOneOfValue = (value) => {
        if (value == 1) { setFirstValue(true); setSecondValue(false); setthirdValue(false) }
        else if (value == 2) { setFirstValue(false); setSecondValue(true); setthirdValue(false) }
        else if (value == 3) { setFirstValue(false); setSecondValue(false); setthirdValue(true) }

    }
    selectMonthOfValue = (value) => {
        if (value == 1) { setMonthFirstValue(true); setMonthSecondValue(false); setMonththirdValue(false) }
        else if (value == 2) { setMonthFirstValue(false); setMonthSecondValue(true); setMonththirdValue(false) }
        else if (value == 3) { setMonthFirstValue(false); setMonthSecondValue(false); setMonththirdValue(true) }

    }



    goForDoantion = () => {
        if (donationType == "one time") navigation.navigate('donationOnTime', {
            administration: administrationSadqa,
            donation: "jbjhb"
        });

        else navigation.navigate('donationMonthly')

    }



    displayModal = (arry, value) => {

        SetModalList(arry);
        if (value == "funds") {
            setModalHeading("Funds")
        }
        setmodalVisible(!modalVisible)
    };

    onSelectList = async (item) => {
        setmodalVisible(!modalVisible)

        await list.find((itm, i) => {
            if (itm.value == item.value) {
                if (itm.selected == false) {
                    list[i].selected = true;

                    setReason(list[i].value);

                    SetModalList(list)


                }
            } else {
                list[i].selected = false;
                SetModalList(list)
            }
        });

    }
    togglelefunction = () => {
        setmodalVisible(!modalVisible)
    }
    tabeIndex = (value) => {
        console.log(value.i)
        if (value.i == 0) setDonationType("one time")
        else setDonationType("month time")

    }





    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />
            {modalVisible &&
                <Modal isVisible={modalVisible} style={{ justifyContent: "flex-end", margin: 0, }} transparent={true}>
                    <ModalComponent modalHeadding={modalHeading} togglelefunction={togglelefunction} list={list} onSelectList={onSelectList} />
                </Modal>
            }
            {/* top bar */}
            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: '#0178B9' }}>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => openManue()}  >
                    <Image source={manue} style={{ width: 25, height: 25 }}></Image>

                </TouchableOpacity>
                <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Donates</Text>
                </View>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => { gotoEditProofile() }} >
                </TouchableOpacity>
            </View>
            {/* top bar */}
            <View style={{ backgroundColor: "#F2F2F2", paddingHorizontal: "5%" }}>
                <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}   >

                    <Text style={{ fontSize: 18, color: "#0178B9", fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>Funds</Text>
                    <TouchableOpacity onPress={() => displayModal(fundsArry, "funds")}>

                        <View style={styles.inputContainer2}>

                            <View style={{ width: '90%', justifyContent: "center" }}>
                                <Text
                                    style={{
                                        color: '#9a9999',
                                        fontSize: 14,
                                        fontWeight: "600",
                                        alignSelf: 'flex-start',


                                    }}
                                >{funds}</Text>
                            </View>

                            <View style={{ width: '10%' }}>
                                <Image source={down}
                                    style={{ width: 20, height: 20, }}
                                />
                            </View>

                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20, }}>

                        <Tabs onChangeTab={(value) => tabeIndex(value)} style={{}}>
                            <Tab heading="One of" tabStyle={{ backgroundColor: '#F8F8F8' }} textStyle={{ color: '#878787' }} activeTabStyle={{ backgroundColor: '#F8F8F8' }} activeTextStyle={{ color: '#0178B9', fontWeight: 'bold' }}  >
                                <View style={{ flexDirection: "row", width: "100%", paddingTop: 5, backgroundColor: "#F2F2F2" }}>
                                    <TouchableOpacity onPress={() => selectOneOfValue(1)} style={[styles.fundAmount, { backgroundColor: onefirstValue == true ? "#0178B9" : "#F2F2F2", }]}>
                                        <Text>30</Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => selectOneOfValue(2)} style={[styles.fundAmount, { backgroundColor: onesecondValue == true ? "#0178B9" : "#F2F2F2", }]}>

                                        <Text>60</Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => selectOneOfValue(3)} style={[styles.fundAmount, { backgroundColor: onethirdValue == true ? "#0178B9" : "#F2F2F2", }]}>


                                        <Text>90</Text>

                                    </TouchableOpacity>
                                </View>
                            </Tab>
                            <Tab heading="Month Donation" tabStyle={{ backgroundColor: '#F8F8F8' }} textStyle={{ color: '#878787' }} activeTabStyle={{ backgroundColor: '#F8F8F8' }} activeTextStyle={{ color: '#0178B9', fontWeight: 'bold' }}  >
                                <View style={{ flexDirection: "row", width: "100%", paddingTop: 5, backgroundColor: "#F2F2F2" }}>
                                    <TouchableOpacity onPress={() => selectMonthOfValue(1)} style={[styles.fundAmount, { backgroundColor: monthfirstValue == true ? "#0178B9" : "#F2F2F2", }]}>
                                        <Text>4</Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => selectMonthOfValue(2)} style={[styles.fundAmount, { backgroundColor: monthsecondValue == true ? "#0178B9" : "#F2F2F2", }]}>

                                        <Text>8</Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => selectMonthOfValue(3)} style={[styles.fundAmount, { backgroundColor: monththirdValue == true ? "#0178B9" : "#F2F2F2", }]}>


                                        <Text>12</Text>

                                    </TouchableOpacity>
                                </View>
                            </Tab>

                        </Tabs>
                    </View>
                    <  Text style={styles.label}>Or enter amount</  Text>
                    <  View style={styles.inputContainer2} >
                        <TextInput

                            style={styles.textField}
                            placeholder="Amount "
                            placeholderTextColor='#d5c9de'
                            value={manuallyAddFund}
                            keyboardType='numeric'
                            onChangeText={(value) => setmanuallyAddFunds(value)}
                        >
                        </TextInput>
                        <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                            {/* <Image source={user} style={{ height: 15, width: 15 }}></Image> */}
                        </View>


                    </  View>
                    <View style={[styles.inputContainer2, { marginTop: 20 }]}>

                        <View style={{ width: '80%', justifyContent: "center" }}>
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
                        <Text style={{ color: '#B7B7BB', fontSize: 12, }} >Sadaqa £{administrationSadqa}</Text>
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
                    <Card >
                        <CardItem>
                            <Body>

                                <Text style={{ alignSelf: "center", fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>
                                    What is Gift Aid?
                                    </Text>
                                <Text style={{ textAlign: "center", fontSize: 14, }}>
                                    By allowing My Muslim burail to claim Gift Aid you can increase the value of donation by 25% at no cost to you.Your donation of £5 will be worth £6.25 without you spending an extra penny.
                                     </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <TouchableOpacity style={styles.button} onPress={goForDoantion} >
                        <Text style={{ color: '#FFFFFF', fontSize: 17, }}>Pay Now </Text>
                    </TouchableOpacity>
                </ScrollView>
                {isAnimating &&
                    <ActivityIndicator size="large" color="#0178B9" animating={isAnimating} style={styles.loading} />
                }
            </View>

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
    inputContainer2: {
        //   alignItems: 'flex-start',
        //   justifyContent: 'flex-start',

        backgroundColor: '#FFF',
        borderRadius: 25,
        shadowColor: "#000",
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    fundAmount: {
        flexDirection: "row", width: "33%", height: 40,
        alignItems: "center", justifyContent: "center",

        borderWidth: 1, borderColor: "#0178B9"
    },
    label: {
        fontWeight: 'bold',
        marginVertical: 10

    },
    textField: {

        fontSize: 15,
        width: "90%",


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
});

export default donates;
