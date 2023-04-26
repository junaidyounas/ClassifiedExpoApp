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
import PriceTag from "components/atoms/priceTag";
import LocationTag from "components/atoms/locationTag";

type Props = {};

const ListItemDetailView = (props: Props) => {
     return (
          <BaseView style={styles.container}>
               <LocationTag paddingHorizontal={0} mb={1}/>

               <BaseView mb={2} style={styles.horizontalView}>
                    <BaseText
                         width={widthRatio(45)}
                         fontFamily={fonts.semiBold}
                         fontSize={fontSizes["2xs"]}
                    >
                         3d rendering beautiful luxury...
                    </BaseText>
                    <FontAwesome name="bookmark" size={15} color="black" />
               </BaseView>
               <BaseText
                    fontSize={fontSizes["sm"]}
                    fontFamily={fonts.semiBold}
                    color={colors.coral}
               >
                    Rs 2000
               </BaseText>

               <StarRating />
               <BaseView alignItems="center" marginTop={1} style={styles.horizontalView}>
                    <VerifiedBadge />
                    <BaseText
                         fontFamily={fonts.semiBold}
                         fontSize={fontSizes["2xs"]}
                         fixColor={colors.charcol}
                    >
                         40 mins ago
                    </BaseText>
               </BaseView>
          </BaseView>
     );
};

export default ListItemDetailView;

const styles = StyleSheet.create({
     container: {
          width: widthRatio(62),
          padding: widthRatio(2),
          borderTopRightRadius: widthRatio(3),
          borderBottomRightRadius: widthRatio(3),
     },
     horizontalView: {
          flexDirection: "row",
          justifyContent: "space-between",
     },
});
