import MainApp from "MainApp.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store/store";

export default function App() {
     return (
          <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                    <MainApp />
               </PersistGate>
          </Provider>
     );
}
