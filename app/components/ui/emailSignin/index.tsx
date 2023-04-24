import { MaterialCommunityIcons } from "@expo/vector-icons";
import BaseButton from "components/base/button";
import BaseInput from "components/base/input";
import BaseText from "components/base/text";
import { useGoogleAuth } from "hooks/useGoogleAuth";
import { ln } from "i18n";
import { Pressable, View } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { colors } from "theme/colors";
import { fonts } from "theme/fontNames";
import { fontSizes } from "theme/fontSizes";
import * as Yup from "yup";
import { Formik } from "formik";
import { firebaseUserService } from "services/firebase/user";
import useToastShow from "hooks/useToastShow";

type Props = {};

const SignInFormSchema = Yup.object({
     email: Yup.string()
          .email("Please enter valid email address")
          .required("Email is required"),
     password: Yup.string().required("Password is Required"),
});

const EmailSignInComponent = (props: Props) => {
     const [isLoading, setIsLoading] = useState(false);
     const { successToast, errorToast, generalToast } = useToastShow();
     
     const [isSecure, setIsSecure] = useState(true);
     const { user } = useGoogleAuth();
     const formikRef = useRef<any>();

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

     function onSigninSubmit(email: string, password: string) {
          console.log("===> ~ file: index.tsx:57 ~ onSigninSubmit ~ email:", email);
          // setIsLoading(true);
          // firebaseUserService.loginFirebaseUser(email, password).then(() => {
          //      successToast(ln("loggedinsuccess"));
          // }).catch((err) => {
          //      errorToast(ln("invaliduserdetails"));
          // }).finally(() => {
          //      setIsLoading(false);
          // });
     }

     const onLoginButtonPress = () => {
          console.log(
               "===> ~ file: index.tsx:57 ~ onSigninSubmit ~ email:",
               formikRef.current
          );

          formikRef.current.handleSubmit();
     };
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
     return (
          <Formik
               innerRef={formikRef}
               initialValues={{ email: "", password: "" }}
               validationSchema={SignInFormSchema}
               onSubmit={(values) => onSigninSubmit(values.email, values.password)}
          >
               {({ handleChange, touched, errors, values, handleSubmit }) => (
                    <>
                         <BaseInput
                              inputWidth={86}
                              inputMarginTop={2}
                              label={ln("email")}
                              value={values.email}
                              onChange={handleChange("email")}
                              marginTopLabel={4}
                              InputLeftElement={LeftElementEmail}
                              placeHolder={ln("enteremail")}
                              // isError={touched.email && errors.email ? true : false}
                         />
                         <BaseInput
                              inputWidth={86}
                              inputMarginTop={2}
                              label={ln("password")}
                              marginTopLabel={4}
                              value={values.password}
                              onChange={handleChange("password")}
                              secureTextEntry={isSecure}
                              InputLeftElement={LeftElementPassword}
                              InputRightElement={RightElementPassword}
                              placeHolder={ln("enterpassword")}
                         />
                         <BaseText
                              fontSize={fontSizes.xs}
                              fontFamily={fonts.semiBold}
                              marginTop={2}
                              textAlign="right"
                         >
                              Forgot password?
                         </BaseText>
                         <BaseButton
                              isLoading={isLoading}
                              onPress={onLoginButtonPress}
                              text={ln("login")}
                              marginTop={7}
                         />
                    </>
               )}
          </Formik>
     );
};

export default EmailSignInComponent;

const styles = StyleSheet.create({});
