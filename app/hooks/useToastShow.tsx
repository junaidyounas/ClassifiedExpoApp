import BaseText from "components/base/text";
import { useToast, Box } from "native-base";
import {StyleSheet} from 'react-native';
import { colors } from "theme/colors";
import { fonts } from "theme/fontNames";
import { widthRatio } from "utils/pixelRatio";
const useToastShow = () => {
     const toast = useToast();
     const simpleToastShow = (desc: string) => {
          toast.show({
               description: desc,
          });
     }

     const successToast = (desc: string) => {
          toast.show({
               render: () => {
                    return (
                         <Box style={styles.containerSuccess}>
                              <BaseText  fixColor={colors.white} fontFamily={fonts.medium}>{desc}</BaseText>
                         </Box>
                    );
               },
          });
     };

     const generalToast = (desc: string) => {
          toast.show({
               render: () => {
                    return (
                         <Box style={styles.containerGeneral}>
                              <BaseText fixColor={colors.white} fontFamily={fonts.medium}>
                                   {desc}
                              </BaseText>
                         </Box>
                    );
               },
          });
     };

     const errorToast = (desc: string) => {
          toast.show({
               render: () => {
                    return (
                         <Box style={styles.containerError}>
                              <BaseText fixColor={colors.white} fontFamily={fonts.medium}>
                                   {desc}
                              </BaseText>
                         </Box>
                    );
               },
          });
     };

     return { successToast, errorToast, generalToast };
};

export default useToastShow;

const styles = StyleSheet.create({
     containerSuccess: {
          width: widthRatio(86),
          padding: widthRatio(5),
          backgroundColor: colors.pureGreen,
          textAlign: "center",
          borderRadius: widthRatio(2),
     },
     containerError: {
          width: widthRatio(86),
          padding: widthRatio(5),
          backgroundColor: colors.errorRed,
          textAlign: "center",
          borderRadius: widthRatio(2),
     },
     containerGeneral: {
          width: widthRatio(86),
          padding: widthRatio(5),
          backgroundColor: colors.risinBlack,
          textAlign: "center",
          borderRadius: widthRatio(2),
          alignItems: "center",
     },
});
