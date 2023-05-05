import { Entypo, Feather, Octicons } from "@expo/vector-icons";
import BaseText from "components/base/text";
import BaseView from "components/base/view";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "theme/colors";
import { fonts } from "theme/fontNames";
import { fontSizes } from "theme/fontSizes";
import { widthRatio } from "utils/pixelRatio";

type Props = {
     title?: string;
     onPress?: any;
     isVerified?: string;
};

const EmailItemWithRightArrow = (props: Props | any) => {
     const { isVerified = true, title, onPress } = props;
     return (
          <Pressable onPress={onPress}>
               <BaseView style={styles.container}>
                    <BaseView flexDirection="row" alignItems="center">
                         <BaseView mr={5}>
                              <Feather name="mail" size={24} color="black" />
                         </BaseView>

                         <BaseView>
                              <BaseText fontFamily={fonts.medium} fontSize={fontSizes.xl}>
                                   {title}{" "}
                                   <Octicons
                                        name={isVerified ? "verified" : "unverified"}
                                        size={20}
                                        color={isVerified ? colors.green : colors.red}
                                   />
                              </BaseText>
                              <BaseText fontSize={13}>junaid@email.com</BaseText>
                         </BaseView>
                    </BaseView>
                    <Entypo name="chevron-small-right" size={24} color="black" />
               </BaseView>
          </Pressable>
     );
};

export default EmailItemWithRightArrow;

const styles = StyleSheet.create({
     container: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: widthRatio(6),
          paddingVertical: widthRatio(4),
     },
});
