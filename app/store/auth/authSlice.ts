import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AuthState } from './authState';
import { User } from 'firebase/auth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: AuthState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<User>>) => {
      state.user = action.payload
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
