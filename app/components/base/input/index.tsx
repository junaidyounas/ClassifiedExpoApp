import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input } from "native-base";
import { heightRatio, widthRatio } from "utils/pixelRatio";
import { textRatio } from "utils/textRatio";
import BaseText from "../text";
import { fonts } from "theme/fontNames";
import { fontSizes } from "theme/fontSizes";
import { colors } from "theme/colors";

type Props = {
     placeHolder?: string;
     marginTopLabel: number;
     inputWidth?: number;
     label?: string;
     labelFontFamily?: string;
     inputMarginTop?: number;
     labelFontSize?: number;
     inputFontSize?: number;
     height?: number;
     secureTextEntry?: boolean;
};

const BaseInput = (props: Props | any) => {
     const {
          placeHolder,
          inputMarginTop,
          marginTopLabel,
          inputWidth = 86,
          height = 7,
          label,
          labelFontFamily = fonts.regular,
          labelFontSize = fontSizes.xs,
          secureTextEntry,
     } = props;
     return (
          <>
               {label && (
                    <BaseText
                         fontSize={labelFontSize}
                         fontFamily={labelFontFamily}
                         textAlign="left"
                         marginTop={marginTopLabel}
                    >
                         {label}
                    </BaseText>
               )}
               <Input
                    {...props}
                    marginTop={inputMarginTop}
                    width={widthRatio(inputWidth)}
                    height={heightRatio(height)}
                    _input={styles.text}
                    fontSize={"sm"}
                    placeholderTextColor={colors.platinum}
                    secureTextEntry={secureTextEntry}
                    variant="outline"
                    textDecorationLine={"none"}
                    placeholder={placeHolder}
               />
          </>
     );
};

export default BaseInput;

const styles = StyleSheet.create({
     input: {
          height: heightRatio(7),
     },
     text: {
          fontFamily: "light",
     },
});
