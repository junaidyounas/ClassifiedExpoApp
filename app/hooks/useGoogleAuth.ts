import React, { useState } from "react";
import { getAuth, onAuthStateChanged, User, updateProfile } from "firebase/auth";
import { _firebase } from "services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "store/auth/authSlice";
import { IAppState } from "store/IAppState";

const auth = getAuth(_firebase);

export function useGoogleAuth() {
     const [user, setUser] = useState<User|null>();
     React.useEffect(() => {
          const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (_user) => {
               if (_user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    // updateProfile(user, {displayName: '2sd'}).then(() => {
                    //      console.log(
                    //           "===> ~ file: useGoogleAuth.ts:24 ~ unsubscribeFromAuthStatuChanged ~ getAuth().currentUser:",
                    //           getAuth().currentUser
                    //      );

                    // })
                    setUser(_user);
               } else {
                    // User is signed out
                    setUser(null);
               }
          });

          return unsubscribeFromAuthStatuChanged;
     }, []);

     return {
          user,
     };
}
