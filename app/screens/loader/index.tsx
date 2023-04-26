import BaseView from "components/base/view";
import { Spinner } from "native-base";
import { screens } from "navigations/constants";
import { navigate } from "navigations/navRef";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { colors } from "theme/colors";
type Props = {};

const LoaderScreen = (props: Props) => {
     useEffect(() => {
          setTimeout(() => {
               
          navigate(screens.Main);
          }, 1000)
     }, [])
     return (
          <BaseView style={styles.container}>
               <Spinner size={"lg"} variant={colors.jet} />
          </BaseView>
     );
};

export default LoaderScreen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
     }
});
