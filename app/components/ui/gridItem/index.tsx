import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightRatio, widthRatio } from 'utils/pixelRatio'
import BaseView from 'components/base/view'
import GridItemDetailView from './detailView'
import BaseImage from 'components/base/image'

type Props = {
          item?: any,
          index?: any
}

const GridSingleItem = (props: Props) => {
 const {item, index} = props
  return (
       <BaseView shadow={2} key={index} style={styles.container}>
          <BaseImage borderTopRightRadius={widthRatio(3)} borderTopLeftRadius={widthRatio(3)} />
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
});