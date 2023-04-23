import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseText from 'components/base/text';
import { fonts } from 'theme/fontNames';
import { fontSizes } from 'theme/fontSizes';
import { TouchableOpacity } from 'react-native';
import { colors } from 'theme/colors';
import { ln } from 'i18n';
import { heightRatio } from 'utils/pixelRatio';
import { navigate } from 'navigations/navRef';
import { screens } from 'navigations/constants';

type Props = {
          marginTop?: number
}

const CreateOneAccountText = (props: Props | any) => {
          const { marginTop } = props;
          const onPressCreateOne = () => {
               navigate(screens.Signup)
          }
  return (
       <View
            style={[
                 {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                 },
                 marginTop ? { marginTop: heightRatio(marginTop) } : {},
            ]}
       >
            <BaseText textAlign="center" fontFamily={fonts.medium} ontSize={fontSizes.xs}>
                 {ln("donthave")}
            </BaseText>
            <TouchableOpacity onPress={onPressCreateOne}>
                 <BaseText
                      fixColor={colors.red}
                      fontSize={fontSizes.xs}
                      color={colors.blue}
                 >
                      {ln("createone")}
                 </BaseText>
            </TouchableOpacity>
       </View>
  );
}

export default CreateOneAccountText

const styles = StyleSheet.create({})