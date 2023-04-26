// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import AuthNavigator from "./authNavigtator";
import { screens } from "./constants";
import { navigationRef } from "./navRef";
import { useGoogleAuth } from "hooks/useGoogleAuth";
import DashboardScreen from "screens/dashboard";
import { BottomTabsNavigator } from "./tabsNavigator";
import LoaderScreen from "screens/loader";
import { useSelector } from "react-redux";
import { IAppState } from "store/IAppState";

const Stack = createNativeStackNavigator();

function MainNavigator() {
     const {user} = useSelector((state: IAppState) => state.auth);
     return (
          <NavigationContainer ref={navigationRef}>
               <Stack.Navigator
                    screenOptions={{
                         headerShown: false,
                    }}
               >
                    <Stack.Screen name={screens.Loader} component={LoaderScreen} />

                    {user && user?.emailVerified ? (
                         <Stack.Screen
                              name={screens.Main}
                              component={BottomTabsNavigator}
                         />
                    ) : (
                         <Stack.Screen name={screens.Main} component={AuthNavigator} />
                    )}
               </Stack.Navigator>
          </NavigationContainer>
     );
}

export default MainNavigator;
