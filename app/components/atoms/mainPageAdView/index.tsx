import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightRatio, widthRatio } from 'utils/pixelRatio'
import { colors } from 'theme/colors'

type Props = {}

const MainPageAdView = (props: Props) => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default MainPageAdView

const styles = StyleSheet.create({
     container: {
          width: widthRatio(92),
          height: heightRatio(24),
          backgroundColor: colors.earieBlack,
          borderRadius: widthRatio(3),
          marginTop: heightRatio(2)
     }
});