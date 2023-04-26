import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseView from 'components/base/view';
import { Entypo, SimpleLineIcons } from '@expo/vector-icons';
import BaseText from 'components/base/text';
import { widthRatio } from 'utils/pixelRatio';
import { fontSizes } from 'theme/fontSizes';
import { MaterialIcons } from "@expo/vector-icons"; 
import { fonts } from 'theme/fontNames';

type Props = {
     isRightArrow?: boolean;
     title?: string;
     leftIcon?: any;
     onPress?: any
};

const ItemWithRightArrow = (props: Props | any) => {
          const { isRightArrow, leftIcon, title, onPress} = props;
  return (
       <Pressable onPress={onPress}>
            <BaseView style={styles.container}>
                 <BaseView flexDirection="row" alignItems="center">
                      {leftIcon && <BaseView mr={5}>{leftIcon}</BaseView>}

                      <BaseText fontFamily={fonts.medium} fontSize={fontSizes.xl}>
                           {title}
                      </BaseText>
                 </BaseView>
                 {isRightArrow && (
                      <Entypo name="chevron-small-right" size={24} color="black" />
                 )}
            </BaseView>
       </Pressable>
  );
}

export default ItemWithRightArrow

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: widthRatio(6),
          paddingVertical: widthRatio(4),
     }
});