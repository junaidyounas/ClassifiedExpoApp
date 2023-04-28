import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";
import BaseText from "../text";
import { colors } from "theme/colors";
import { heightRatio } from "utils/pixelRatio";
import { fontSizes } from "theme/fontSizes";
import { ln } from "i18n";
import { fonts } from "theme/fontNames";

type Props = {
     marginTop?: number;
     height?: number;
     backgroundColor?: string;
     text: string;
     leftIcon?: JSX.Element | JSX.Element[];
     textColor?: string
};

const BaseButton = (props: Props | any) => {
     const {
          marginTop = 0,
          height = 6,
          backgroundColor = colors.blue,
          text,
          leftIcon,
          textColor = colors.white,
     } = props;
     return (
          <Button
               backgroundColor={backgroundColor}
               height={heightRatio(height)}
               marginTop={heightRatio(marginTop)}
               leftIcon={leftIcon}
               style={styles.button}
               _pressed={{
                    opacity: 0.5,
               }}
               {...props}
          >
               <BaseText
                    fontFamily={fonts.medium}
                    color={textColor}
                    fontSize={fontSizes.sm}
               >
                    {text}
               </BaseText>
          </Button>
     );
};

export default BaseButton;

const styles = StyleSheet.create({
     button: {
     },
});
