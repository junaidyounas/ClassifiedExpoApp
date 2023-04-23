import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Pressable } from "native-base";
import React, { useState } from "react";
import BaseView from "components/base/view";
import BaseText from "components/base/text";
import BaseInput from "components/base/input";
import BaseSwitch from "components/base/switch";
import { ln } from "i18n";
import { heightRatio, widthRatio } from "utils/pixelRatio";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fontSizes } from "theme/fontSizes";
import { colors } from "theme/colors";
import { fonts } from "theme/fontNames";
import BaseButton from "components/base/button";
import CreateOneAccountText from "components/atoms/createOneAccountText";
import TermsAndPrivacy from "components/atoms/termsAndPrivacy";
import HaveAnAccount from "components/atoms/haveAnAccount";
type Props = {};

const SignupScreen = (props: Props) => {
     const [isTrue, setIsTrue] = useState(false);
     const [isSecure, setIsSecure] = useState(true);
     const LeftElementEmail = (
          <View pl={3}>
               <MaterialCommunityIcons
                    name="email-outline"
                    size={fontSizes["3xl"]}
                    color={colors.platinum}
                    ml={6}
               />
          </View>
     );
     const LeftElementPassword = (
          <View pl={3}>
               <MaterialCommunityIcons
                    name="lock-outline"
                    size={fontSizes["3xl"]}
                    color={colors.platinum}
                    ml={6}
               />
          </View>
     );
     const RightElementPassword = (
          <Pressable onPress={() => setIsSecure(!isSecure)} pr={3}>
               <MaterialCommunityIcons
                    name={isSecure ? "eye" : "eye-off"}
                    size={fontSizes["xl"]}
                    color={colors.richBlack}
                    ml={6}
               />
          </Pressable>
     );
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
               <BaseView width={widthRatio(86)}>
                    <BaseText fontFamily={fonts.semiBold} fontSize={33} bold>
                         {ln("createaccount")}
                    </BaseText>
                    <BaseInput
                         inputWidth={86}
                         inputMarginTop={1}
                         label={ln("email")}
                         marginTopLabel={2}
                         InputLeftElement={LeftElementEmail}
                         placeHolder={ln("enteremail")}
                    />
                    <BaseInput
                         inputWidth={86}
                         inputMarginTop={1}
                         label={ln("name")}
                         marginTopLabel={2}
                         InputLeftElement={LeftElementEmail}
                         placeHolder={ln("entername")}
                    />
                    <BaseInput
                         inputWidth={86}
                         inputMarginTop={1}
                         label={ln("password")}
                         marginTopLabel={2}
                         secureTextEntry={isSecure}
                         InputLeftElement={LeftElementPassword}
                         InputRightElement={RightElementPassword}
                         placeHolder={ln("enterpassword")}
                    />
                    <BaseButton text={ln("joinus")} marginTop={6} />
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
               </BaseView>
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
