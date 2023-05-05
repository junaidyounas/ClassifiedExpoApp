import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseView from "components/base/view";
import { Feather } from "@expo/vector-icons";
import { heightRatio, widthRatio } from "utils/pixelRatio";
import { Pressable } from "native-base";

type Props = {
          children: any;
          onCrossPress?: any
};

const CrossLayout = (props: Props) => {
     const { onCrossPress } = props;
     return (
          <BaseView style={styles.container}>
               <Pressable onPress={onCrossPress}>
                    <BaseView style={styles.topBar}>
                         <Feather name="x-circle" size={24} color="black" />
                    </BaseView>
               </Pressable>
               {props.children}
          </BaseView>
     );
};

export default CrossLayout;

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     topBar: {
          height: heightRatio(13),
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: widthRatio(5),
     },
});
