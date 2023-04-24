import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AppState } from './appState';

export const appSlice = createSlice({
  name: 'app',
  initialState: AppState,
  reducers: {
    networkAvailable: (state, action: PayloadAction<boolean>) => {
      state.isNetworkAvailable = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsFirstLoad: (state, action: PayloadAction<boolean>) => {
      state.isFirstLoadCompleted = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    }
  },
});

export const { networkAvailable, setIsLoading, setIsFirstLoad, setIsDarkMode } =
     appSlice.actions;

export default appSlice.reducer;
