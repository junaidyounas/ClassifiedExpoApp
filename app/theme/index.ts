import { extendTheme } from "native-base";
import { typography } from "./typography";
import { components } from "./components";
import { colors } from "./colors";
import { store } from "store/store";
import { shadows } from "./shadow";
export const theme = extendTheme({
     colors: colors,
     fonts: typography.fonts,
     fontWeights: typography.fontWeights,
     fontSizes: typography.fontSizes,
     lineHeights: typography.lineHeights,
     letterSpacings: typography.letterSpacings,
     components: components,
     shadows: shadows,
     config: {
          // Changing initialColorMode to 'dark'
          initialColorMode: "light",
     },
});
