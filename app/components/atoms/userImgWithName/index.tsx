import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseView from 'components/base/view';
import BaseImage from 'components/base/image';
import BaseText from 'components/base/text';
import { images } from 'assets/images';
import { heightRatio, widthRatio } from 'utils/pixelRatio';
import { colors } from 'theme/colors';
import { fonts } from 'theme/fontNames';

type Props = {}

const UserImageWithName = (props: Props) => {
  return (
       <BaseView style={styles.horizontalView}>
            <BaseImage source={images.avatar} style={styles.avatar} />
            <BaseView>
                 <BaseText color={colors.jet}>Welcome</BaseText>
                 <BaseText fontFamily={fonts.semiBold}>Mr. Junaid Younas</BaseText>
            </BaseView>
       </BaseView>
  );
}

export default UserImageWithName

const styles = StyleSheet.create({
     avatar: {
          width: widthRatio(15),
          height: widthRatio(15),
          borderRadius: widthRatio(15 / 2),
          resizeMode: "cover",
          marginVertical: heightRatio(2),
          marginHorizontal: widthRatio(5),
     },
     horizontalView: {
          flexDirection: "row",
          alignItems: "center",
     },
});