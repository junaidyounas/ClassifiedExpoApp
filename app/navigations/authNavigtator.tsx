// In App.js in a new project

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import LoginScreen from "screens/auth/login";
import SignupScreen from "screens/auth/signup";
import { screens } from "./constants";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
     return (
          <Stack.Navigator
               screenOptions={{
                    headerShown: false,
               }}
          >
               <Stack.Screen name={screens.Login} component={LoginScreen} />
               <Stack.Screen name={screens.Signup} component={SignupScreen} />
          </Stack.Navigator>
     );
}

export default AuthNavigator;
