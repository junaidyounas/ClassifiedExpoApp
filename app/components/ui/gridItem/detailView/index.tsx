import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseView from "components/base/view";
import { widthRatio } from "utils/pixelRatio";
import { colors } from "theme/colors";
import { shadows } from "./../../../../theme/shadow";
import BaseText from "components/base/text";
import { FontAwesome } from "@expo/vector-icons";
import { fontSizes } from "theme/fontSizes";
import { fonts } from "theme/fontNames";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import VerifiedBadge from "components/atoms/verifiedBadge";
import StarRating from "components/atoms/starRating";

type Props = {};

const GridItemDetailView = (props: Props) => {
     return (
          <BaseView shadow={3} style={styles.container}>
               <BaseView style={styles.horizontalView}>
                    <BaseText
                         width={widthRatio(35)}
                         fontFamily={fonts.semiBold}
                         fontSize={9}
                    >
                         3d rendering beautiful luxury...
                    </BaseText>
                    <FontAwesome name="bookmark" size={15} color="black" />
               </BaseView>
               <StarRating />
               <BaseView alignItems="center" marginTop={1} style={styles.horizontalView}>
                    <VerifiedBadge />
                    <BaseText
                         fontFamily={fonts.semiBold}
                         fontSize={9}
                         fixColor={colors.charcol}
                    >
                         40 mins ago
                    </BaseText>
               </BaseView>
          </BaseView>
     );
};

export default GridItemDetailView;

const styles = StyleSheet.create({
     container: {
          width: widthRatio(44),
          borderRadius: widthRatio(3),
          padding: widthRatio(2),
          borderTopWidth: 2,
          borderTopColor: colors.grayRGBA,
          borderBottomLeftRadius: widthRatio(3),
          borderBottomRightRadius: widthRatio(3),
     },
     horizontalView: {
          flexDirection: "row",
          justifyContent: "space-between",
     },
     
});
