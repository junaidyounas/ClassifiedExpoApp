import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseView from 'components/base/view';
import BaseText from 'components/base/text';
import { fonts } from 'theme/fontNames';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from 'theme/colors';
import { fontSizes } from 'theme/fontSizes';
import { widthRatio } from 'utils/pixelRatio';
import { Entypo } from "@expo/vector-icons"; 

type Props = {
     isVerified?: boolean;
}

const VerifiedBadge = (props: Props) => {
  const {isVerified=false} = props;
  return (
       <BaseView
            style={[
                 styles.verifybadge,
                 { backgroundColor: isVerified ? colors.pureGreen : colors.mustard },
            ]}
       >
            <BaseText
                 fontFamily={fonts.medium}
                 fontSize={8.5}
                 paddingHorizontal={2}
                 alignItems="center"
                 justifyContent="center"
            >
                 {isVerified ? (
                      <MaterialCommunityIcons
                           name="check-decagram"
                           size={10}
                           color={colors.darkGreen}
                      />
                 ) : (
                      <Entypo name="circle-with-cross" size={10} color={colors.red} />
                 )}{" "}
                 {isVerified ? "Verified" : "Unverified"}
            </BaseText>
       </BaseView>
  );
}

export default VerifiedBadge

const styles = StyleSheet.create({
     verifybadge: {
          padding: 2,
          borderRadius: widthRatio(2),
          alignItems: "center",
     },
});