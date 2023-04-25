import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import { images } from 'assets/images'
import BaseView from '../view'
import { widthRatio } from 'utils/pixelRatio'

type Props = {
     width: number;
     height: number;
     borderTopLeftRadius?: number;
     borderTopRightRadius? : number
};

const BaseImage = (props: Props | any) => {
  const { width = "100%", height = "60%", borderTopLeftRadius, borderTopRightRadius } = props;
  return (
       <Image
            source={images.imgPlaceHolder}
            style={[
                 styles.image,
                 { width, height, borderTopRightRadius, borderTopLeftRadius },
            ]}
            {...props}
       />
  );
}

export default BaseImage

const styles = StyleSheet.create({
     image: {
          width: '100%',
          height: '60%',
     }
});