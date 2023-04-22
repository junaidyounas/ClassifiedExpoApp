// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoaderScreen from "screens/loader";
import DashboardScreen from "screens/dashboard";
import { navigationRef } from "./navRef";

const Stack = createNativeStackNavigator();

function MainNavigator() {
     return (
          <NavigationContainer ref={navigationRef}>
               <Stack.Navigator
                    screenOptions={{
                         headerShown: false,
                    }}
               >
                    <Stack.Screen name="Loader" component={LoaderScreen} />
                    <Stack.Screen name="Dashboard" component={DashboardScreen} />
               </Stack.Navigator>
          </NavigationContainer>
     );
}

export default MainNavigator;
