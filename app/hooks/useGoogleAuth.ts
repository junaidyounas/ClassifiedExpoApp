import React from "react";
import { getAuth, onAuthStateChanged, User, updateProfile } from "firebase/auth";
import { _firebase } from "services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "store/auth/authSlice";
import { IAppState } from "store/IAppState";

const auth = getAuth(_firebase);

export function useGoogleAuth() {
     const dispatch = useDispatch();
     const { user } = useSelector((state: IAppState) => state.auth);
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
                    dispatch(setUser(_user));
               } else {
                    // User is signed out
                    dispatch(setUser({}));
               }
          });

          return unsubscribeFromAuthStatuChanged;
     }, []);

     return {
          user,
     };
}
