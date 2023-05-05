import { Entypo, MaterialIcons, Octicons } from "@expo/vector-icons";
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

const PhoneItemWithRightArrow = (props: Props | any) => {
     const { isRightArrow, isVerified = true, title, onPress } = props;
     return (
          <Pressable onPress={onPress}>
               <BaseView style={styles.container}>
                    <BaseView flexDirection="row" alignItems="center">
                         <BaseView mr={5}>
                              <MaterialIcons name="local-phone" size={24} color="black" />
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
                              <BaseText fontSize={13}>+923121231123</BaseText>
                         </BaseView>
                    </BaseView>
                    <Entypo name="chevron-small-right" size={24} color="black" />
               </BaseView>
          </Pressable>
     );
};

export default PhoneItemWithRightArrow;

const styles = StyleSheet.create({
     container: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: widthRatio(6),
          paddingVertical: widthRatio(4),
     },
});
