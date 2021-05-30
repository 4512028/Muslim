import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { DrawerNavigator } from "./src/Screens/Drawer/Drawer";
import signIn from "./src//Screens/signIn";
import signUpScreen from "./src/Screens/signUpScreen";
import VerificationCodeScree from "./src/Screens/VerificationCodeScree";
import ResetPassword from "./src/Screens/ResetPassword";


import forgetPassword from "./src/Screens/forgetPassword";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  AsyncStorage,

} from "react-native";

const Stack = createStackNavigator();


// const App = () => {

//   console.log(isLogin)

//   if (isLogin == "true") {
//     initialRoute = "Home"
//   }
//   else {
//     initialRoute = "signIn"

//   }
//   return (

//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Home" component={DrawerNavigator} />
//           <Stack.Screen name="forgetPassword" component={forgetPassword} />
//           <Stack.Screen name="VerificationCodeScree" component={VerificationCodeScree} />
//           <Stack.Screen name="ResetPassword" component={ResetPassword} />


//           <Stack.Screen name="signUpScreen" component={signUpScreen} />
//           <Stack.Screen name="signIn" component={signIn} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      initialRouteName: '',
    };
    this.checkLoginStatus();
  }
  checkLoginStatus = async () => {
    const value = await AsyncStorage.getItem('isLogin');
    console.log(value, "sjnjknknkjnnnkndwknd")
    if (value == 'true') {
      this.setState({ initialRouteName: "Home" })
      console.log(this.state.initialRouteName)
    }
    else {

      this.setState({ initialRouteName: "signIn" })
      console.log(this.state.initialRouteName)

    }

  };


  render() {

    return (
      <NavigationContainer>
        {this.state.initialRouteName !== '' && (
          <Stack.Navigator initialRouteName={this.state.initialRouteName} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={DrawerNavigator} />
            <Stack.Screen name="forgetPassword" component={forgetPassword} />
            <Stack.Screen name="VerificationCodeScree" component={VerificationCodeScree} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />


            <Stack.Screen name="signUpScreen" component={signUpScreen} />
            <Stack.Screen name="signIn" component={signIn} />
          </Stack.Navigator>
        )
        }
      </NavigationContainer>

    );
  }
}
