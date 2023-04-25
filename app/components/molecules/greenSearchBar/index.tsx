import BaseInput from "components/base/input";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "theme/colors";
import { fonts } from "theme/fontNames";
import { fontSizes } from "theme/fontSizes";
import { heightRatio, widthRatio } from "utils/pixelRatio";

type Props = {};

const GreenSearchBar = (props: Props) => {
     return (
          <View style={styles.container}>
               <BaseInput
                    style={styles.input}
                    height={5}
                    borderColor={"transparent"}
                    placeHolder="Search"
                    backgroundColor={colors.transparentWhite}
               />
          </View>
     );
};

export default GreenSearchBar;

const styles = StyleSheet.create({
     container: {
          width: widthRatio(100),
          height: heightRatio(13),
          backgroundColor: colors.jungleGreen,
          borderBottomLeftRadius: widthRatio(6),
          borderBottomRightRadius: widthRatio(6),
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: heightRatio(2),
     },
     text: {
          color: colors.white,
          fontFamily: fonts.medium,
          fontSize: fontSizes["xl"],
     },
     input: {
      borderRadius: widthRatio(5)
     }
});
