import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../home";
import Profile from "../profile";
import groupDashBoard from "../groupDashBoard";
import Donate from "../donate";
import donationMonthly from "../donationMonthly";
import donationOnTime from "../donationOnTime";

import LovedOne from "../lovedOne";
import nextOfKin from "../nextOfKin";
import feedBack from "../feedBack";
import profileEdit from "../profileEdit";
import profileVerify from "../profileVerify";
import homePostDetail from "../homePostDetail";









const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false

};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PostDetail" component={homePostDetail} />
        </Stack.Navigator>
    );
}

const profileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="profileEdit" component={profileEdit} />
            <Stack.Screen name="profileVerify" component={profileVerify} />


        </Stack.Navigator>
    );
}
const donateStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="donate" component={Donate} />
            <Stack.Screen name="donationMonthly" component={donationMonthly} />
            <Stack.Screen name="donationOnTime" component={donationOnTime} />

        </Stack.Navigator>
    );
}
const groupStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="groupDashBoard" component={groupDashBoard} />
        </Stack.Navigator>
    );
}

const loveStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="LovedOne" component={LovedOne} />
        </Stack.Navigator>
    );
}
const feedbackStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="feedBack" component={feedBack} />
        </Stack.Navigator>
    );
}
const nextOfKinStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="nextOfKin" component={nextOfKin} />
        </Stack.Navigator>
    );
}
export { MainStackNavigator, profileStackNavigator, donateStackNavigator, groupStackNavigator, nextOfKinStackNavigator, feedbackStackNavigator, loveStackNavigator };