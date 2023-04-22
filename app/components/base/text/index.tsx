import { StyleSheet } from "react-native";
import React from "react";
import {Text} from 'native-base'

type Props = {
     children: string | JSX.Element | JSX.Element[];
};

const BaseText = (props: Props | any) => {
     return <Text {...props}>{props.children}</Text>;
};

export default BaseText;

const styles = StyleSheet.create({});
