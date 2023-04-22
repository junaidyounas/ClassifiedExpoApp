import BaseSwitch from "components/base/switch";
import BaseText from "components/base/text";
import BaseView from "components/base/view";
import useColorModeChange from "hooks/useColorModeChange";
import React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { IAppState } from "store/IAppState";
import { colors } from "theme/colors";
type Props = {};

const LoaderScreen = (props: Props) => {
     const [setDarkMode] = useColorModeChange();
     const { isDarkMode } = useSelector((state: IAppState) => state.app);

     return (
          <BaseView>
               <BaseText>LoaderScreen</BaseText>
               <BaseSwitch
                    onThumbColor={colors.primary}
                    isChecked={isDarkMode}
                    onToggle={setDarkMode}
               />
          </BaseView>
     );
};

export default LoaderScreen;

const styles = StyleSheet.create({});
