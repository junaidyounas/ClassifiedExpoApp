import { MaterialCommunityIcons } from "@expo/vector-icons";
import HaveAnAccount from "components/atoms/haveAnAccount";
import TermsAndPrivacy from "components/atoms/termsAndPrivacy";
import BaseButton from "components/base/button";
import BaseText from "components/base/text";
import BaseView from "components/base/view";
import ScrollViewLayout from "components/layouts/scroll";
import EmailSignupComponent from "components/ui/emailSignup";
import { ln } from "i18n";
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "theme/colors";
import { fonts } from "theme/fontNames";
import { fontSizes } from "theme/fontSizes";
import { heightRatio, widthRatio } from "utils/pixelRatio";
type Props = {};

const SignupScreen = (props: Props) => {
     

     
     const LeftFacebookIcon = (
          <MaterialCommunityIcons
               name={"facebook"}
               size={fontSizes["xl"]}
               color={colors.white}
               ml={6}
          />
     );
     const LeftAppleIcon = (
          <MaterialCommunityIcons
               name={"apple"}
               size={fontSizes["xl"]}
               color={colors.white}
               ml={6}
          />
     );
     const LeftGoogleIcon = (
          <MaterialCommunityIcons
               name={"google"}
               size={fontSizes["xl"]}
               color={colors.white}
               ml={6}
          />
     );
     return (
          <BaseView style={styles.container}>
               <ScrollViewLayout width={widthRatio(86)}>
                    <BaseText fontFamily={fonts.semiBold} fontSize={33} bold>
                         {ln("createaccount")}
                    </BaseText>
                    <EmailSignupComponent />
                    <TermsAndPrivacy marginTop={2} />
                    <BaseText style={styles.textOr}>OR</BaseText>
                    <BaseButton
                         leftIcon={LeftFacebookIcon}
                         text={ln("signinwithfacebook")}
                         marginTop={4}
                    />
                    <BaseButton
                         leftIcon={LeftAppleIcon}
                         text={ln("signinwithapple")}
                         backgroundColor={colors.black}
                         marginTop={2}
                    />
                    <BaseButton
                         leftIcon={LeftGoogleIcon}
                         text={ln("signinwithgoogle")}
                         backgroundColor={colors.red}
                         textColor={colors.white}
                         marginTop={2}
                    />
                    <HaveAnAccount marginTop={2} />
               </ScrollViewLayout>
          </BaseView>
     );
};

export default SignupScreen;

const styles = StyleSheet.create({
     container: {
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
          flex: 1,
     },
     textOr: {
          fontSize: fontSizes.sm,
          fontFamily: fonts.medium,
          marginTop: heightRatio(1),
          textAlign: "center",
     },
});
