import { StyleSheet, Platform } from "react-native";
import React from "react";
import { Text } from "native-base";
import { colors } from "theme/colors";
import { textRatio } from "utils/textRatio";

type Props = {
     children: string | JSX.Element | JSX.Element[];
     fontFamily?: string;
     color?: string;
     fontSize?: number;
     bold?: boolean;
     fixColor?: string
};

const BaseText = (props: Props | any) => {
     
     const {
          fontFamily = "regular",
          color = colors.jet,
          fontSize = 11,
          bold = false,
          fixColor,
     } = props;
     return (
          <Text
               {...props}
               // _light={{ color: fixColor ? fixColor : colors.richBlack }}
               // _dark={{ color: fixColor ? fixColor : colors.white }}
               fontSize={Platform.OS == 'web' ? fontSize : textRatio(fontSize)}
               color={color}
               fontFamily={fontFamily}
          >
               {props.children}
          </Text>
     );
};

export default BaseText;

const styles = StyleSheet.create({
});
