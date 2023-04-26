import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseView from "components/base/view";
import { Feather } from "@expo/vector-icons";
import { heightRatio, widthRatio } from "utils/pixelRatio";

type Props = {
          children: any
};

const CrossLayout = (props: Props) => {
     return (
          <BaseView style={styles.container}>
               <BaseView style={styles.topBar}>
                    <Feather name="x-circle" size={24} color="black" />
               </BaseView>
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
          height: heightRatio(10),
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: widthRatio(3),
     },
});
