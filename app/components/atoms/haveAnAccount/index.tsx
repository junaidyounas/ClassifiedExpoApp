import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseText from "components/base/text";
import { fonts } from "theme/fontNames";
import { fontSizes } from "theme/fontSizes";
import { TouchableOpacity } from "react-native";
import { colors } from "theme/colors";
import { ln } from "i18n";
import { heightRatio } from "utils/pixelRatio";

type Props = {
     marginTop?: number;
};

const HaveAnAccount = (props: Props | any) => {
     const { marginTop } = props;
     return (
          <View
               style={[
                    {
                         flexDirection: "row",
                         alignItems: "center",
                         justifyContent: "center",
                    },
                    marginTop ? { marginTop: heightRatio(marginTop) } : {},
               ]}
          >
               <BaseText
                    textAlign="center"
                    fontFamily={fonts.medium}
                    ontSize={fontSizes.sm}
               >
                    {ln("haveanaccount")}
               </BaseText>
               <TouchableOpacity>
                    <BaseText fixColor={colors.red} fontSize={fontSizes.sm} color={colors.blue}>
                         {ln("login")}
                    </BaseText>
               </TouchableOpacity>
          </View>
     );
};

export default HaveAnAccount;

const styles = StyleSheet.create({});
