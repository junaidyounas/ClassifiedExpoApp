import { StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";
import { widthRatio } from "utils/pixelRatio";

type Props = {
     children: string | JSX.Element | JSX.Element[];
};

const BaseView = (props: Props | any) => {
     return (
          <View style={styles.container} {...props}>
               {props.children}
          </View>
     );
};

export default BaseView;

const styles = StyleSheet.create({
     container: {
     },
});
