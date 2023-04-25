import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BaseText from 'components/base/text';
import BaseView from 'components/base/view';
import { heightRatio, widthRatio } from 'utils/pixelRatio';
import { colors } from 'theme/colors';
import { Entypo } from "@expo/vector-icons"; 
import { MaterialIcons } from "@expo/vector-icons"; 
import { Pressable } from 'native-base';

type Props = {
     setIsGrid?: any;
     isGrid?: boolean;
};

const FlatListMenu = (props: Props) => {
  const { setIsGrid, isGrid } = props;
  const [isAds, setIsAds] = useState(false);
  return (
       <BaseView style={styles.container}>
            <BaseView style={styles.leftCard}>
                 {isAds ? (
                      <Pressable
                           style={styles.leftCardPressable}
                           onPress={() => setIsAds(false)}
                      >
                           <BaseView shadow={2} mr={2} style={styles.leftInnerCard}>
                                <BaseText fixColor={colors.primary}>Services</BaseText>
                           </BaseView>
                           <BaseText> Ads</BaseText>
                      </Pressable>
                 ) : (
                      <Pressable
                           style={styles.leftCardPressable}
                           flexDirection="row"
                           onPress={() => setIsAds(true)}
                      >
                           <BaseText> Services</BaseText>
                           <BaseView shadow={2} ml={2} style={styles.leftInnerCard}>
                                <BaseText fixColor={colors.primary}>Ads</BaseText>
                           </BaseView>
                      </Pressable>
                 )}
            </BaseView>
            <BaseView style={styles.rightCard}>
                 <Pressable onPress={() => setIsGrid(true)}>
                      <BaseView
                           backgroundColor={isGrid ? colors.gray : colors.transparent}
                           style={styles.rightInnerCard}
                      >
                           <Entypo name="grid" size={18} color="black" />
                      </BaseView>
                 </Pressable>
                 <Pressable onPress={() => setIsGrid(false)}>
                      <BaseView
                           backgroundColor={!isGrid ? colors.gray : colors.transparent}
                           style={styles.rightInnerCard}
                      >
                           <MaterialIcons
                                name="calendar-view-day"
                                size={18}
                                color="black"
                           />
                      </BaseView>
                 </Pressable>
            </BaseView>
       </BaseView>
  );
}

export default FlatListMenu

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: "row",
          marginTop: heightRatio(2),
          padding: 2,
          backgroundColor: colors.grayRGBA,
          justifyContent: "space-between",
     },
     leftCard: {
          paddingHorizontal: widthRatio(4),
          paddingVertical: widthRatio(2),
          borderRadius: widthRatio(2),
          flexDirection: "row",
          alignItems: "center",
     },
     rightCard: {
          flexDirection: "row",
          borderRadius: widthRatio(6),
          alignItems: "center",
          paddingHorizontal: widthRatio(3),
     },
     leftInnerCard: {
          paddingHorizontal: widthRatio(3),
          borderRadius: widthRatio(2),
          paddingVertical: widthRatio(1)
     },
     rightInnerCard: {
          paddingHorizontal: widthRatio(2),
          paddingVertical: widthRatio(1),
          borderRadius: widthRatio(2),
     },
     leftCardPressable: {
          flexDirection: "row",
          alignItems: "center",
     }
});