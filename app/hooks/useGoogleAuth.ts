import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { _firebase } from "services/firebase";
import { setUser } from "store/auth/authSlice";

const auth = getAuth(_firebase);

export function useGoogleAuth() {
     const dispatch = useDispatch();
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
                    dispatch(setUser({}))

               }
          });

          return unsubscribeFromAuthStatuChanged;
     }, []);

     return {
          
     };
}
