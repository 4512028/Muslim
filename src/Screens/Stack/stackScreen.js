import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../home";

import Profile from "../profile";
import groupDashBoard from "../groupDashBoard";
import communityScreen from "../communityScreen";
import communityGroupCreate from "../communityGroupCreate";
import CommunityJoinGroup from "../CommunityJoinGroup";
import communityPaynow from "../communityPaynow";
import chatScreen from "../chatScreen";



import Donate from "../donate";
import donationMonthly from "../donationMonthly";
import donationOnTime from "../donationOnTime";

import LovedOne from "../lovedOne";
import nextOfKin from "../nextOfKin";
import feedBack from "../feedBack";
import profileEdit from "../profileEdit";
import profileVerify from "../profileVerify";
import homePostDetail from "../homePostDetail";
import prayer from "../prayer";
import ghusl from "../ghusl";
import others from "../others";
import reading from "../reading";
import dua from "../dua";
import tasbi from "../tasbi";
import quran from "../quran";
import sadqahDonation from "../sadqahDonation"
















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
            <Stack.Screen name="communityScreen" component={communityScreen} />
            <Stack.Screen name="CommunityJoinGroup" component={CommunityJoinGroup} />
            <Stack.Screen name="communityGroupCreate" component={communityGroupCreate} />
            <Stack.Screen name="communityPaynow" component={communityPaynow} />
            <Stack.Screen name="chatScreen" component={chatScreen} />


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

const otherStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="others" component={others} />
            <Stack.Screen name="prayer" component={prayer} />
            <Stack.Screen name="ghusl" component={ghusl} />
            <Stack.Screen name="reading" component={reading} />
            <Stack.Screen name="dua" component={dua} />
            <Stack.Screen name="tasbi" component={tasbi} />
            <Stack.Screen name="quran" component={quran} />
            <Stack.Screen name="sadqahDonation" component={sadqahDonation} />





        </Stack.Navigator>
    );
}

export { otherStackNavigator, MainStackNavigator, profileStackNavigator, donateStackNavigator, groupStackNavigator, nextOfKinStackNavigator, feedbackStackNavigator, loveStackNavigator };