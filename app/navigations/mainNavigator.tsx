// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import AuthNavigator from "./authNavigtator";
import { screens } from "./constants";
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
                    <Stack.Screen name={screens.Main} component={AuthNavigator} />
                    {/* <Stack.Screen name={screens.Main} component={DashboardScreen} /> */}
               </Stack.Navigator>
          </NavigationContainer>
     );
}

export default MainNavigator;
