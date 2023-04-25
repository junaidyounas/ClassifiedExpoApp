import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";
import { colors } from "theme/colors";
import BaseView from "components/base/view";
import { widthRatio } from "utils/pixelRatio";
import BaseText from "components/base/text";
import { fontSizes } from "theme/fontSizes";
import { fonts } from "theme/fontNames";

type Props = {};

const StarRating = (props: Props) => {
     return (
          <BaseView style={styles.container}>
               <Rating
                    type="star"
                    ratingColor={colors.mustard}
                    ratingBackgroundColor={colors.platinum}
                    ratingCount={5}
                    imageSize={13}
                    readonly
                    style={{ paddingVertical: widthRatio(1) }}
               />
               <BaseText
                    fontSize={fontSizes["2xs"]}
                    fontFamily={fonts.semiBold}
                    marginLeft={1}
               >
                    (45)
               </BaseText>
          </BaseView>
     );
};

export default StarRating;

const styles = StyleSheet.create({
     container: {
          flexDirection: "row",
          alignItems: "center",
     },
});
