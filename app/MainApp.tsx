import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import MainNavigator from "navigations/mainNavigator";
import React from "react";
import { StyleSheet } from "react-native";

import { useSelector } from "react-redux";
import { IAppState } from "store/IAppState";
import { theme } from "theme";
import { colorModeManager } from "theme/colorModeManager";

const MainApp = () => {
     const { isDarkMode } = useSelector((state: IAppState) => state.app);

     return (
          <NativeBaseProvider theme={theme}>
               <StatusBar style={!isDarkMode ? "light" : "dark"} />
               <MainNavigator />
          </NativeBaseProvider>
     );
};

export default MainApp;

const styles = StyleSheet.create({
     container: {
          backgroundColor: "blue",
          width: "100%",
     },
});
