import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightRatio, widthRatio } from 'utils/pixelRatio'
import BaseView from 'components/base/view'
import GridItemDetailView from './detailView'
import BaseImage from 'components/base/image'
import PriceTag from 'components/atoms/priceTag'
import { colors } from 'theme/colors'
import LocationTag from 'components/atoms/locationTag'

type Props = {
          item?: any,
          index?: any
}

const GridSingleItem = (props: Props) => {
 const {item, index} = props
  return (
       <BaseView shadow={2} key={index} style={styles.container}>
            <BaseView style={styles.priceTag}>
                 <PriceTag />
            </BaseView>
            <BaseView style={styles.locationTag}>
                 <LocationTag />
            </BaseView>
            <BaseImage
                 borderTopRightRadius={widthRatio(3)}
                 borderTopLeftRadius={widthRatio(3)}
            />
            <BaseView shadows={2} style={styles.bottomView}>
                 <GridItemDetailView />
            </BaseView>
       </BaseView>
  );
}

export default GridSingleItem;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          maxWidth: widthRatio(44),
          height: heightRatio(25),
          borderRadius: widthRatio(3),
     },
     bottomView: {
          position: "absolute",
          bottom: 0,
          zIndex: 1,
          borderRadius: widthRatio(3),
     },
     priceTag: {
          position: "absolute",
          top: 5,
          right: widthRatio(1.5),
          zIndex: 2,
          backgroundColor: colors.transparent,
     },
     locationTag: {
          position: "absolute",
          top: '40%',
          left: widthRatio(1.5),
          zIndex: 2,
          backgroundColor: colors.transparent,
     },
});