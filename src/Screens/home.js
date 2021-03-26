// ./screens/Home.js

import React, { useState, useEffect, useContext, useRef } from "react";
import { View, StyleSheet, ActivityIndicator, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, SafeAreaView, AsyncStorage, FlatList, Platform } from 'react-native';
import Logo from '../Assets/Icons/Logo.jpg'
import manue from '../Assets/Icons/manue.png'

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
                    style={{ width: "100%", }}
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
                                    <Image resizeMode="cover" style={{ height: 190, width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}
                                        source={item.post_Image}
                                    ></Image >
                                </View>
                                <View style={{ width: "100%", alignItems: "flex-start", marginTop: 5 }}>

                                    <Text style={{ marginLeft: 10, fontSize: 12, color: "#999999", }}>{item.post_title} </Text>
                                    <Text style={{ marginLeft: 10, fontSize: 10, color: "#999999", }}>{item.post_description} </Text>
                                    <Text style={{ marginLeft: 10, fontSize: 10, color: "#999999", }}>{item.post_date} </Text>


                                </View>


                            </View>





                        </TouchableWithoutFeedback>

                    )
                    }
                //Setting the number of column


                />
                {/* list end  for Browse By Category  */}


            </View>


        </SafeAreaView>

    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0178B9",
        alignContent: 'center',
    },
});
export default Home;
