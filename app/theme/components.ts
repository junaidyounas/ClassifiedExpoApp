import { textRatio } from "utils/textRatio";
import { colors } from "./colors";


export const components = {
     Text: {
          baseStyle: {
               _light: { color: colors.earieBlack },
               _dark: { color: colors.mustard },
          },
          fontFamily: "bold",
          fontSize: "2xl",
     },
     View: {
          baseStyle: {
               _light: { backgroundColor: colors.white },
               _dark: { backgroundColor: colors.richBlack },
          },
     },
     Input: {
          baseStyle: {
               fontFamily: "regular",
               _focus: {
                    bg: colors.transparent,
                    backgroundColor: colors.transparent,
               },
               _light: { backgroundColor: colors.white },
               _dark: {
                    _focus: {
                         borderColor: colors.platinum,
                         borderWidth: 0.6
                    },
               },
          },
          fontSize: textRatio(30),
     },
};