import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseView from 'components/base/view'
import { colors } from 'theme/colors'
import { widthRatio } from 'utils/pixelRatio'
import BaseText from 'components/base/text'
import { Ionicons } from "@expo/vector-icons";
import { textRatio } from 'utils/textRatio'

type Props = {
     paddingHorizontal?: number
};

const LocationTag = (props: Props | any) => {
  const { paddingHorizontal=2 } =props;
  return (
       <BaseView style={[styles.container, { paddingHorizontal }]} {...props}>
            <Ionicons name="location" size={textRatio(13)} color={colors.jungleGreen} />
            <BaseText fontSize={8} ml={0.5}>Silicon Valley</BaseText>
       </BaseView>
  );
}

export default LocationTag

const styles = StyleSheet.create({
     container: {
          flexDirection: "row",
          backgroundColor: colors.rgbaWhite,
          paddingHorizontal: widthRatio(1.5),
          paddingVertical: widthRatio(0.5),
          borderRadius: widthRatio(2),
     },
});