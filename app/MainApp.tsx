import { loadFonts } from "assets/fonts";
import BaseText from "components/base/text";
import BaseView from "components/base/view";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text } from "native-base";
import MainNavigator from "navigations/mainNavigator";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import { theme } from "theme";
import { colorModeManager } from "theme/colorModeManager";
import { useSelector } from "react-redux";
import { IAppState } from "store/IAppState";

const MainApp = () => {
     const { isDarkMode } = useSelector((state: IAppState) => state.app);

     useEffect(() => {
          loadFonts();
     }, []);
     return (
          <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
               <StatusBar style={isDarkMode ? "light" : "dark"} />
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
