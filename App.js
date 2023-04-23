import MainApp from "MainApp.tsx";
import { useEffect } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store/store";
import { loadFonts } from "./app/assets/fonts";

export default function App() {
     useEffect(() => {
          loadFonts();
     }, [])
     return (
          <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                    <MainApp />
               </PersistGate>
          </Provider>
     );
}
