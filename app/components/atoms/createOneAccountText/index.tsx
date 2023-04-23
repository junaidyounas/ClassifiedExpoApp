import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseText from 'components/base/text';
import { fonts } from 'theme/fontNames';
import { fontSizes } from 'theme/fontSizes';
import { TouchableOpacity } from 'react-native';
import { colors } from 'theme/colors';
import { ln } from 'i18n';
import { heightRatio } from 'utils/pixelRatio';

type Props = {
          marginTop?: number
}

const CreateOneAccountText = (props: Props | any) => {
          const { marginTop } = props;
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
            <BaseText textAlign="center" fontFamily={fonts.medium} ontSize={fontSizes.sm}>
                 {ln("donthave")}
            </BaseText>
            <TouchableOpacity>
                 <BaseText fontSize={fontSizes.sm} color={colors.blue}>
                      {ln("createone")}
                 </BaseText>
            </TouchableOpacity>
       </View>
  );
}

export default CreateOneAccountText

const styles = StyleSheet.create({})