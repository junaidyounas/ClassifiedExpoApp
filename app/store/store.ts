import {configureStore} from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import {storeConfig} from './storeConfig';

export const store = configureStore(storeConfig);

export const persistor = persistStore(store);
