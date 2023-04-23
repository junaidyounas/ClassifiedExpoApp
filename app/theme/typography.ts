import { fonts } from "./fontNames";
import { fontSizes } from "./fontSizes";

export const typography = {
     letterSpacings: {
          xs: "-0.05em",
          sm: "-0.025em",
          md: 0,
          lg: "0.025em",
          xl: "0.05em",
          "2xl": "0.1em",
     },
     lineHeights: {
          "2xs": "1em",
          xs: "1.125em",
          sm: "1.25em",
          md: "1.375em",
          lg: "1.5em",
          xl: "1.75em",
          "2xl": "2em",
          "3xl": "2.5em",
          "4xl": "3em",
          "5xl": "4em",
     },
     fontWeights: {
          hairline: 100,
          thin: 200,
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          black: 900,
          extraBlack: 950,
     },
     fonts: fonts,
     fontSizes: fontSizes,
};
