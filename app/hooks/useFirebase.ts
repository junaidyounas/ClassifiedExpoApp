import React, { useEffect } from "react";
import firestore from "@react-native-firebase/firestore";
import { useSelector } from "react-redux";
import { IAppState } from "store/IAppState";

export default function useFirebase() {
          const {user} = useSelector((state: IAppState) => state.auth);
     useEffect(() => {
          const subscriber = firestore()
               .collection("users")
               .doc(user.uid)
               .onSnapshot((documentSnapshot) => {
                    console.log("User data: ", documentSnapshot.data());
               });

          // Stop listening for updates when no longer required
          return () => subscriber();
     }, [user.uid]);
}
