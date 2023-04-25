import { MaterialCommunityIcons } from "@expo/vector-icons";
import BaseButton from "components/base/button";
import BaseInput from "components/base/input";
import { KeyboardType } from "enum/KeyboardType";
import { ln } from "i18n";
import { Pressable, View } from "native-base";
import React, { useState, useRef } from "react";
import { StyleSheet } from "react-native";
import { colors } from "theme/colors";
import { fontSizes } from "theme/fontSizes";
import * as Yup from "yup";
import { Formik } from "formik";
import { firebaseUserService } from "services/firebase/user";
import useToastShow from "hooks/useToastShow";

const SignupFormSchema = Yup.object({
     email: Yup.string()
          .email("Please enter valid email address")
          .required("Email is required"),
     password: Yup.string().required("Password is Required"),
});

type Props = {};

const EmailSignupComponent = (props: Props) => {
     const [isLoading, setIsLoading] = useState(false);
     const [isSecure, setIsSecure] = useState(true);
     const formikRef = useRef<any>();
     const { successToast, errorToast, generalToast } = useToastShow();


     function onSignupSubmit(email: string, name: string, password: string) {
          setIsLoading(true);
          firebaseUserService.createFirebaseUser(email, name, password).then(() => {
               successToast(ln("accountcreated"));
          }).catch(() => {
               errorToast(ln("tryagain"));
          }).finally(() => {
               setIsLoading(false);
          });
     }

     const onLoginButtonPress = () => {
          formikRef.current.handleSubmit();
     };
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
     return (
          <Formik
               innerRef={formikRef}
               initialValues={{ email: "", name: "", password: "" }}
               validationSchema={SignupFormSchema}
               onSubmit={(values) =>
                    onSignupSubmit(values.email, values.name, values.password)
               }
          >
               {({ handleChange, touched, errors, values }) => (
                    <>
                         <BaseInput
                              inputWidth={86}
                              inputMarginTop={1}
                              label={ln("email")}
                              KeyboardType={KeyboardType.emailAddress}
                              value={values.email}
                              onChangeText={handleChange("email")}
                              marginTopLabel={2}
                              InputLeftElement={LeftElementEmail}
                              placeHolder={ln("enteremail")}
                              // isError={touched.email && errors.email ? true : false}
                         />
                         <BaseInput
                              inputWidth={86}
                              inputMarginTop={1}
                              label={ln("name")}
                              value={values.name}
                              onChangeText={handleChange("name")}
                              marginTopLabel={2}
                              InputLeftElement={LeftElementEmail}
                              placeHolder={ln("entername")}
                         />
                         <BaseInput
                              inputWidth={86}
                              inputMarginTop={1}
                              label={ln("password")}
                              value={values.password}
                              onChangeText={handleChange("password")}
                              marginTopLabel={2}
                              secureTextEntry={isSecure}
                              InputLeftElement={LeftElementPassword}
                              InputRightElement={RightElementPassword}
                              placeHolder={ln("enterpassword")}
                         />
                         <BaseButton
                              isLoading={isLoading}
                              onPressIn={onLoginButtonPress}
                              text={ln("joinus")}
                              marginTop={6}
                         />
                    </>
               )}
          </Formik>
     );
};

export default EmailSignupComponent;

const styles = StyleSheet.create({});
