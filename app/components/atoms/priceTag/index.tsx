import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseView from 'components/base/view'
import BaseText from 'components/base/text'
import { colors } from 'theme/colors'
import { widthRatio } from 'utils/pixelRatio'
import { fonts } from 'theme/fontNames'
import { fontSizes } from 'theme/fontSizes'

type Props = {}

const PriceTag = (props: Props | any) => {
  return (
       <BaseView style={styles.container}>
            <BaseText
                 fontSize={10}
                 fontFamily={fonts.semiBold}
                 color={colors.coral}
                 {...props}
            >
                 Rs 2000
            </BaseText>
       </BaseView>
  );
}

export default PriceTag

const styles = StyleSheet.create({
     container: {
          borderRadius: widthRatio(3),
          paddingHorizontal: widthRatio(1.3),
          paddingVertical: widthRatio(0.2)
     }
});