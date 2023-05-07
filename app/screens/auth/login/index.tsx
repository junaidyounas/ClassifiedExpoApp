import { MaterialCommunityIcons } from "@expo/vector-icons";
import CreateOneAccountText from "components/atoms/createOneAccountText";
import BaseSpinner from "components/base/Spinner";
import BaseButton from "components/base/button";
import BaseText from "components/base/text";
import BaseView from "components/base/view";
import EmailSignInComponent from "components/ui/emailSignin";
import { useFacebookAuth } from "hooks/useFacebookAuth";
import { useGoogleAuth } from "hooks/useGoogleAuth";
import { ln } from "i18n";
import { Spinner } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { firebaseUserService } from "services/firebase/user";
import { colors } from "theme/colors";
import { fonts } from "theme/fontNames";
import { fontSizes } from "theme/fontSizes";
import { heightRatio, widthRatio } from "utils/pixelRatio";

type Props = {};

const LoginScreen = (props: Props) => {
     const { isLoading, googleSignIn } = useGoogleAuth();
     const {isFacebookLoading,facebookSignIn} = useFacebookAuth();
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
               {isLoading || isFacebookLoading ? <BaseSpinner /> : null}
               <BaseView width={widthRatio(86)}>
                    <BaseText fontFamily={fonts.semiBold} fontSize={33} bold>
                         {ln("welcomeback")}
                    </BaseText>
                    <EmailSignInComponent />
                    <BaseText style={styles.textOr}>OR</BaseText>
                    <BaseButton
                         leftIcon={LeftFacebookIcon}
                         text={ln("continuewithfacebook")}
                         marginTop={4}
                         onPress={facebookSignIn}
                    />
                    <BaseButton
                         leftIcon={LeftAppleIcon}
                         text={ln("continuewithapple")}
                         backgroundColor={colors.black}
                         marginTop={2}
                    />
                    <BaseButton
                         leftIcon={LeftGoogleIcon}
                         text={ln("continuewithgoogle")}
                         backgroundColor={colors.red}
                         textColor={colors.white}
                         marginTop={2}
                         onPress={googleSignIn}
                    />
                    <CreateOneAccountText marginTop={4} />
               </BaseView>
          </BaseView>
     );
};

export default LoginScreen;

const styles = StyleSheet.create({
     container: {
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
          flex: 1,
     },
     textOr: {
          fontSize: fontSizes.xs,
          fontFamily: fonts.medium,
          marginTop: heightRatio(3),
          marginBottom: heightRatio(1),
          textAlign: "center",
     },
});
