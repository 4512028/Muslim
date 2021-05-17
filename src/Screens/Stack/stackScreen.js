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
import tasbiDetail from "../tasbiDetail";




import Donate from "../donate";
import donationMonthly from "../donationMonthly";
import donationOnTime from "../donationOnTime";
import donationDetail from "../donationDetail";


import feedBack from "../feedBack";
import profileEdit from "../profileEdit";
import profileVerify from "../profileVerify";
import homePostDetail from "../homePostDetail";
import prayer from "../prayer";
import ghusl from "../ghusl";
import ghusalDetail from "../ghusalDetail";
import ghusalUpdate from "../ghusalUpdate";


import others from "../others";
import reading from "../reading";
import dua from "../dua";
import duaDetail from "../duaDetail";

import tasbi from "../tasbi";
import quran from "../quran";
import sadqahDonation from "../sadqahDonation"
import sadqah from "../sadqah"
import nextOfKinDetail from "../nextOfKinDetail"
import nextOfKinUpdate from "../nextOfKinUpdate"
import nextOfKin from "../nextOfKin";

import LovedOne from "../lovedOne";
import loveOneDetail from "../loveOneDetail"
import loveOneUpdate from "../loveOneUpdate"
import quranDetail from "../quranDetail"






















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
            <Stack.Screen name="donationDetail" component={donationDetail} />


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
            <Stack.Screen name="loveOneDetail" component={loveOneDetail} />
            <Stack.Screen name="LovedOne" component={LovedOne} />
            <Stack.Screen name="loveOneUpdate" component={loveOneUpdate} />


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
            <Stack.Screen name="nextOfKinDetail" component={nextOfKinDetail} />
            <Stack.Screen name="nextOfKin" component={nextOfKin} />
            <Stack.Screen name="nextOfKinUpdate" component={nextOfKinUpdate} />


        </Stack.Navigator>
    );
}
const ghuslStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="ghusalDetail" component={ghusalDetail} />
            <Stack.Screen name="ghusl" component={ghusl} />
            <Stack.Screen name="ghusalUpdate" component={ghusalUpdate} />


        </Stack.Navigator>
    );
}

const otherStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="others" component={others} />
            <Stack.Screen name="prayer" component={prayer} />
            <Stack.Screen name="reading" component={reading} />
            <Stack.Screen name="dua" component={dua} />
            <Stack.Screen name="tasbi" component={tasbi} />
            <Stack.Screen name="quran" component={quran} />
            <Stack.Screen name="sadqahDonation" component={sadqahDonation} />
            <Stack.Screen name="sadqah" component={sadqah} />
            <Stack.Screen name="donationDetail" component={donationDetail} />
            <Stack.Screen name="duaDetail" component={duaDetail} />
            <Stack.Screen name="quranDetail" component={quranDetail} />
            <Stack.Screen name="tasbiDetail" component={tasbiDetail} />









        </Stack.Navigator>
    );
}

export { ghuslStackNavigator, otherStackNavigator, MainStackNavigator, profileStackNavigator, donateStackNavigator, groupStackNavigator, nextOfKinStackNavigator, feedbackStackNavigator, loveStackNavigator };