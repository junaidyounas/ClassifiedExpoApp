import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseView from '../view'
import { Spinner } from 'native-base'
import { colors } from 'theme/colors'
import { heightRatio, widthRatio } from 'utils/pixelRatio'

type Props = {}

const BaseSpinner = (props: Props) => {
  return (
       <BaseView style={styles.container}>
            <Spinner size={"lg"} variant={colors.jet} />
       </BaseView>
  );
}

export default BaseSpinner

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.rgbaWhite,
          position: "absolute",
          zIndex: 999,
          width: widthRatio(100),
          height: heightRatio(100)
     }
});