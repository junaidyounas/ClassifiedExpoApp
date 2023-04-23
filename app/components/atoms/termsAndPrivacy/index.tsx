import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseText from "components/base/text";
import { fonts } from "theme/fontNames";
import { fontSizes } from "theme/fontSizes";
import { colors } from "theme/colors";

type Props = {};

const TermsAndPrivacy = (props: Props | any) => {
     return (
          <BaseText {...props} fontSize={10} fontFamly={fonts.extraLight}>
               By registering you confirm that you accept our{" "}
               <BaseText
                    fixColor={colors.red}
                    color={colors.red}
                    fontSize={10}
                    fontFamly={fonts.extraLight}
               >
                    Terms of Use
               </BaseText>{" "}
               and{" "}
               <BaseText
                    fixColor={colors.red}
                    color={colors.red}
                    fontSize={10}
                    fontFamly={fonts.extraLight}
               >
                    Privacy Policy
               </BaseText>
          </BaseText>
     );
};

export default TermsAndPrivacy;

const styles = StyleSheet.create({});
