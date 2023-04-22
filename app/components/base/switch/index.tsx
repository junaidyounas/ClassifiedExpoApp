import { StyleSheet } from "react-native";
import React from "react";
import { Switch } from "native-base";
import { colors } from "theme/colors";

type Props = {
     offTrackColor?: string;
     onTrackColor?: string;
     onThumbColor?: string;
     offThumbColor?: string;
     onToggle?: (...args: any) => void;
     isChecked: boolean;
};

const BaseSwitch = (props: Props) => {
     const {
          offTrackColor,
          onTrackColor,
          onThumbColor,
          offThumbColor,
          isChecked,
          onToggle,
     } = props;
     return (
          <Switch
               onToggle={onToggle}
               isChecked={isChecked}
               offTrackColor={offTrackColor}
               onTrackColor={onTrackColor ? onTrackColor : colors.primary}
               onThumbColor={onThumbColor ? onThumbColor : colors.primary}
               offThumbColor={offThumbColor ? offThumbColor : colors.primary}
          />
     );
};

export default BaseSwitch;

const styles = StyleSheet.create({});
