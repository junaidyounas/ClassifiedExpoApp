import AsyncStorage from "@react-native-async-storage/async-storage";
import { ColorMode } from "native-base";

export const colorModeManager = {
     get: async () => {
          try {
               let val = await AsyncStorage.getItem("@color-mode");
               return val === "dark" ? "dark" : "light";
          } catch (e) {
               return "light";
          }
     },
     set: async (value: ColorMode | any) => {
          try {
               await AsyncStorage.setItem("@color-mode", value);
          } catch (e) {
               console.log(e);
          }
     },
};
