// ./screens/Home.js

import React, { useState, useEffect, useContext, useRef } from "react";
import { View, StyleSheet, ActivityIndicator, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform } from 'react-native';
import Logo from '../Assets/Icons/Logo.jpg'
import book from '../Assets/Icons/book.png'
import time from '../Assets/Icons/time.png'
import prayer from '../Assets/Icons/prayer.png'

import manue from '../Assets/Icons/manue.png'
import { Domain } from '../Api/Api';

function Home({ navigation }) {


    const [posts, setPosts] = useState([
        { post_Image: Logo, post_date: "12-12-12", post_description: "App Description", post_title: "POST" },
        { post_Image: Logo, post_date: "12-12-12", post_description: "App Description", post_title: "POST" },
        { post_Image: Logo, post_date: "12-12-12", post_description: "App Description", post_title: "POST" },
        { post_Image: Logo, post_date: "12-12-12", post_description: "App Description", post_title: "POST" },
        { post_Image: Logo, post_date: "12-12-12", post_description: "App Description", post_title: "POST" },

    ]);
    const [isAnimating, setAnimating] = useState(false);
    const [isDisabled, setDisabled] = useState(false);



    openManue = () => {
        navigation.openDrawer();

    }

    useEffect(() => {

        home()


    }, []);

    home = () => {

        setDisabled(true)
        setAnimating(true)
        var data = new FormData();
        data.append("action", "home")
        data.append("page", "1")

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
                console.log(responseData)
                if (responseData.status === true) {
                    setDisabled(false)
                    setAnimating(false)
                    setPosts(responseData.data)

                }
                else {

                    alert(responseData.msg)
                    setDisabled(false)
                    setAnimating(false)
                }

            })
            .catch((error) => {
                console.log("error from home  API", error);
                setDisabled(false)
                setAnimating(false)
            });



    }


    useEffect(() => {


        console.log("hgchg")

    }, []);


    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar barStyle="light-content" backgroundColor="#0178B9" />

            {/* top bar */}
            <View style={{ width: "100%", flexDirection: "row", height: 60, backgroundColor: '#0178B9' }}>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => openManue()} >
                    <Image source={manue} style={{ width: 25, height: 25 }}></Image>

                </TouchableOpacity>
                <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Home</Text>
                </View>
                <TouchableOpacity style={{ width: '15%', justifyContent: "center", alignItems: "center" }} onPress={() => { }} >
                </TouchableOpacity>
            </View>
            {/* top bar */}

            <View style={{ backgroundColor: '#F2F2F5', flex: 1 }}>

                {/* <View style={{flexDirection:"row",width:"100%",justifyContent:"center"}}> 
            <Text style={{marginTop:20,fontSize:16,color:"#601124",marginBottom:0,paddingLeft:20,paddingRight:20, fontWeight:"bold"}}>Mangle Shop Now</Text>
            </View> */}
                <FlatList
                    style={{ width: "100%", marginBottom: 50 }}
                    data={posts}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (

                        <TouchableWithoutFeedback onPress={() => {
                            navigation.navigate('PostDetail')
                        }} >

                            <View style={{
                                width: '95%', paddingBottom: 10, flexDirection: 'column', margin: 8, alignItems: 'center', borderRadius: 10, justifyContent: 'center', backgroundColor: '#FFF',
                                shadowColor: "#000", shadowOffset: { width: 0, height: 1, },
                                shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3,
                            }}>


                                <View style={{ height: 190, width: "100%", alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, justifyContent: 'center' }}>
                                    {item.type == "Admin" &&
                                        <Image resizeMode="cover" style={{ height: 190, width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}
                                            source={item.image == "" ? Logo : { uri: item.image }}
                                        ></Image >
                                    }
                                    {item.type == "Tasbih" &&
                                        <Image resizeMode="cover" style={{ height: 190, width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}
                                            source={time}
                                        ></Image >
                                    }
                                    {item.type == "DUA" &&
                                        <Image resizeMode="cover" style={{ height: 190, width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}
                                            source={prayer}
                                        ></Image >
                                    }
                                    {item.type == "Surah" &&
                                        <Image resizeMode="cover" style={{ height: 190, width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}
                                            source={book}
                                        ></Image >
                                    }
                                    {item.type == "Para" &&
                                        <Image resizeMode="cover" style={{ height: 190, width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}
                                            source={book}
                                        ></Image >
                                    }
                                </View>
                                <View style={{ width: "100%", alignItems: "flex-start", marginTop: 5 }}>

                                    <Text style={{ marginLeft: 10, fontSize: 16, color: "black", fontWeight: "bold", }}>{item.title} </Text>
                                    <Text style={{ marginLeft: 10, fontSize: 14, color: "black", }}>{item.type} : <Text style={{ fontSize: 12, color: "black", }}>{item.description} </Text></Text>
                                    <Text style={{ marginLeft: 10, fontSize: 10, color: "#999999", alignSelf: "flex-end", marginRight: 10 }}>{item.created} </Text>


                                </View>


                            </View>





                        </TouchableWithoutFeedback>

                    )
                    }
                //Setting the number of column


                />
                {/* list end  for Browse By Category  */}


            </View>

            {isAnimating &&
                <ActivityIndicator size="large" color="#58278c" animating={isAnimating} style={styles.loading} />
            }
        </SafeAreaView>

    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0178B9",
        alignContent: 'center',
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default Home;
