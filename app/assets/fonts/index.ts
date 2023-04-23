import * as Font from 'expo-font';

export const loadFonts = async () => {
    await Font.loadAsync({
         bold: require("./Montserrat-Bold.ttf"),
         semiBold: require("./Montserrat-SemiBold.ttf"),
         extraBold: require("./Montserrat-ExtraBold.ttf"),
         regular: require("./Montserrat-Regular.ttf"),
         light: require("./Montserrat-Thin.ttf"),
         medium: require("./Montserrat-Medium.ttf"),
    });
  }