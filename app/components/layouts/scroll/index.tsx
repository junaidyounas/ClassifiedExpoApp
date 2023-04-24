import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "native-base";
import { heightRatio } from "utils/pixelRatio";

type Props = {
     children: any;
};

const ScrollViewLayout = (props: Props | any) => {
     const { children } = props;
     return (
          <ScrollView
               style={styles.main}
               contentContainerStyle={styles.contentContainer}
               showsVerticalScrollIndicator={false}
               {...props}
          >
               {children}
          </ScrollView>
     );
};

export default ScrollViewLayout;

const styles = StyleSheet.create({
     main: {
          height: heightRatio(100),
     },
     contentContainer: {
          justifyContent: "center",
          height: heightRatio(100),
     },
});
