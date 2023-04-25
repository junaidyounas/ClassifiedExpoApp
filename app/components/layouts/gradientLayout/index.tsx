import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { colors } from 'theme/colors';
type Props = {
          children: any
}

const GradientLayout = (props: Props) => {
          const { children } = props;;
  return (
       <LinearGradient
            // Button Linear Gradient
            colors={[
                 "rgba(245, 245, 245, 0.1)",
                 "rgba(245, 245, 245, 0.3)",
                 "rgba(245, 245, 245, 0.2)",
            ]}
       >
            {children}
       </LinearGradient>
  );
}

export default GradientLayout

const styles = StyleSheet.create({})