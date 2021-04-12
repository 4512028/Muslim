import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {

    Image,

} from "react-native";
import home from '../../Assets/Icons/home.png'
import star from '../../Assets/Icons/star.png'
import group from '../../Assets/Icons/group.png'
import profile from '../../Assets/Icons/profile.png'
import menu from '../../Assets/Icons/manu.png'



import { MainStackNavigator, otherStackNavigator, donateStackNavigator, groupStackNavigator } from "../Stack/stackScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            keyboardHidesTabBar: true,
            style: {
                position: 'absolute',
            },
        }}>

            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                forceRenderTabPanel={true}
                options={{
                    tabBarBadgeStyle: {
                        color: '#000',
                        backgroundColor: '#E5E5E5',
                        borderWidth: 0.2,
                        borderColor: '#000',
                    },
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            resizeMode="stretch"
                            source={home}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                    //tabBarBadge: 1,
                }}

            />
            <Tab.Screen
                name="groupDashBoard"
                component={groupStackNavigator}
                forceRenderTabPanel={true}
                options={{
                    tabBarBadgeStyle: {
                        color: '#000',
                        backgroundColor: '#E5E5E5',
                        borderWidth: 0.2,
                        borderColor: '#000',
                    },
                    tabBarLabel: 'Group Dashboard',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            resizeMode="stretch"
                            source={group}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                    //tabBarBadge: 1,
                }}

            />
            <Tab.Screen
                name="donate"
                component={donateStackNavigator}
                forceRenderTabPanel={true}
                options={{
                    tabBarBadgeStyle: {
                        color: '#000',
                        backgroundColor: '#E5E5E5',
                        borderWidth: 0.2,
                        borderColor: '#000',
                    },
                    tabBarLabel: 'Donates',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            resizeMode="stretch"
                            source={star}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                    selectedIconColor: '#187c48',
                    //tabBarBadge: 1,
                }}

            />
            <Tab.Screen
                name="Reading"
                component={otherStackNavigator}
                forceRenderTabPanel={true}
                options={{
                    tabBarBadgeStyle: {
                        color: '#000',
                        backgroundColor: '#E5E5E5',
                        borderWidth: 0.2,
                        borderColor: '#000',
                    },
                    tabBarLabel: 'Reading',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            resizeMode="stretch"
                            source={menu}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                    selectedIconColor: '#187c48',
                    //tabBarBadge: 1,
                }}

            />
        </Tab.Navigator>
    );
};

export { BottomTabNavigator };