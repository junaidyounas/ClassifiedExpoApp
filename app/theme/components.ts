import { colors } from "./colors";


export const components = {
     Text: {
          baseStyle: {
               _light: { color: colors.earieBlack },
               _dark: { color: colors.primary },
          },
     },
     View: {
          baseStyle: {
               _light: { backgroundColor: colors.transparent },
               _dark: { backgroundColor: colors.richBlack },
          },
     },
};