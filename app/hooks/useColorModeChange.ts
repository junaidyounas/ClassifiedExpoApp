import { ColorModesEnum } from "enum/colorModes";
import { useColorMode } from "native-base";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "store/IAppState";
import { setIsDarkMode } from "store/appState/appSlice";
import { colorModeManager } from "theme/colorModeManager";

const useColorModeChange = () => {
     const dispatch = useDispatch();

     const { isDarkMode } = useSelector((state: IAppState) => state.app);
     const { toggleColorMode } = useColorMode();
     const _onChangeDarkMode = async () => {
          dispatch(setIsDarkMode(!isDarkMode));
          colorModeManager
               .set(isDarkMode ? ColorModesEnum.Dark : ColorModesEnum.Light)
               .then(() => {
                    toggleColorMode();
               });
          colorModeManager.get();
     };
     const setDarkMode = () => {
          _onChangeDarkMode();
     };

     return [setDarkMode];
};

export default useColorModeChange;
