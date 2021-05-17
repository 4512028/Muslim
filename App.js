import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { DrawerNavigator } from "./src/Screens/Drawer/Drawer";
import signIn from "./src//Screens/signIn";
import signUpScreen from "./src/Screens/signUpScreen";
import forgetPassword from "./src/Screens/forgetPassword";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  AsyncStorage,

} from "react-native";

const Stack = createStackNavigator();


const App = () => {

  AsyncStorage.setItem("initialRoute", "groupDashBoard");

  let isLogin = false;
  let initialRoute;
  if (isLogin) {
    initialRoute = "Home"
  }
  else {
    initialRoute = "signIn"

  }

  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={DrawerNavigator} />
          <Stack.Screen name="forgetPassword" component={forgetPassword} />
          <Stack.Screen name="signUpScreen" component={signUpScreen} />
          <Stack.Screen name="signIn" component={signIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
