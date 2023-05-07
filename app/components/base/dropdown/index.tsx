import { View } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { colors } from "theme/colors";
import { fonts } from "theme/fontNames";
import { fontSizes } from "theme/fontSizes";
import { heightRatio, widthRatio } from "utils/pixelRatio";
import BaseText from "../text";

type Props = {
     placeHolder?: string;
     marginTopLabel: number;
     inputWidth?: number;
     label?: string;
     labelFontFamily?: string;
     inputMarginTop?: number;
     labelFontSize?: number;
     inputFontSize?: number;
     height?: number;
     secureTextEntry?: boolean;
};

const BaseDropdown = (props: Props | any) => {
     const {
          placeHolder,
          inputMarginTop,
          marginTopLabel,
          inputWidth = 86,
          height = 7,
          label,
          labelFontFamily = fonts.medium,
          labelFontSize = fontSizes.xs,
          secureTextEntry,
     } = props;
     useEffect(() => {
          LogBox.ignoreLogs([
               "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
          ]);
     }, []);
     const [companyOpen, setCompanyOpen] = useState(false);
     const [companyValue, setCompanyValue] = useState(null);
     const [loading, setLoading] = useState(false);
     const [company, setComapny] = useState([
          { label: "PUCIT", value: "pucit" },
          { label: "UCP", value: "ucp" },
          { label: "UET", value: "uet" },
     ]);
     const onCompanyOpen = useCallback(() => {}, []);
     return (
          <View style={styles.dropdownCompany}>
               {label && (
                    <BaseText
                         fontSize={labelFontSize}
                         fontFamily={labelFontFamily}
                         textAlign="left"
                         marginTop={marginTopLabel}
                    >
                         {label}
                    </BaseText>
               )}
               <View marginTop={inputMarginTop}>
                    <DropDownPicker
                         style={styles.dropdown}
                         open={companyOpen}
                         value={companyValue} //companyValue
                         items={company}
                         setOpen={setCompanyOpen}
                         setValue={setCompanyValue}
                         setItems={setComapny}
                         placeholder={label}
                    //      renderListItem={(item) => <BaseText>{item.label}</BaseText>}
                         placeholderStyle={styles.placeholderStyles}
                         loading={loading}
                         activityIndicatorColor="#5188E3"
                         searchable={true}
                         searchPlaceholder={label}
                         onOpen={onCompanyOpen}
                         onChangeValue={(value) => {
                              console.log(value);
                         }}
                         zIndex={1000}
                         zIndexInverse={3000}
                    />
               </View>
          </View>
     );
};

export default BaseDropdown;

const styles = StyleSheet.create({
     input: {
          height: heightRatio(7),
     },
     text: {
          
     },
     dropdownCompany: {
          zIndex: 5,
     },
     dropdown: {
          borderColor: colors.platinum,
          borderWidth: 1,
          zIndex: 5,
          borderRadius: widthRatio(1.5),
     },
     placeholderStyles: {
          color: "grey",
          fontFamily: fonts.regular,
     },
});
