import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { otherStackNavigator, ghuslStackNavigator, profileStackNavigator, donateStackNavigator, nextOfKinStackNavigator, feedbackStackNavigator, loveStackNavigator } from "../Stack/stackScreen";
import DrawerContent from './DrawerItems'

import { BottomTabNavigator } from "../BottomTab/BottomTab";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            drawerStyle={{ width: '60%', backgroundColor: "#FFF", }}>

            <Drawer.Screen name="Home" component={BottomTabNavigator}
                initialParams={{ initialRoute: "Home" }} />
            <Drawer.Screen name="profile" component={profileStackNavigator} />
            <Drawer.Screen name="donate" component={BottomTabNavigator}
                initialParams={{ initialRoute: "donate" }} />
            <Drawer.Screen name="loveOneDetail" component={loveStackNavigator} />
            <Drawer.Screen name="nextOfKinDetail" component={nextOfKinStackNavigator} />
            <Drawer.Screen name="ghusalDetail" component={ghuslStackNavigator} />
            <Drawer.Screen name="other" component={BottomTabNavigator}
                initialParams={{ initialRoute: "Reading" }} />




            <Drawer.Screen name="feedback" component={feedbackStackNavigator} />







        </Drawer.Navigator>
    );
}


export { DrawerNavigator };