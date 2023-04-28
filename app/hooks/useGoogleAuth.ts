import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { _firebase } from "services/firebase";
import { setUser } from "store/auth/authSlice";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { firebaseUserService } from "services/firebase/user";
import Constants from "expo-constants";

WebBrowser.maybeCompleteAuthSession();
const auth = getAuth(_firebase);

export function useGoogleAuth() {
     const [token, setToken] = useState("");
     const [idToken, setIdToken] = useState("");
     const [userInfo, setUserInfo] = useState(null);
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
                    dispatch(setUser({}));
               }
          });

          return unsubscribeFromAuthStatuChanged;
     }, []);

     const [request, response, googleSignIn] = Google.useAuthRequest({
          androidClientId: Constants.manifest?.extra?.googleWebClientId,
          expoClientId: Constants.manifest?.extra?.googleWebClientId,

          //    iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
     });

     React.useEffect(() => {
          if (response?.type === "success") {
               setToken(response.authentication.accessToken);
               setIdToken(response.authentication?.idToken);
               getUserInfo();
          }
     }, [response, token]);

     const getUserInfo = async () => {
          try {
               const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
                    headers: { Authorization: `Bearer ${token}` },
               });

               const user = await response.json();
               console.log(
                    "===> ~ file: useGoogleAuth.ts:64 ~ getUserInfo ~ user:",
                    user
               );
               firebaseUserService.loginGoogleSignInLinkWithCredientials(idToken);
               setUserInfo(user);
          } catch (error) {
               // Add your own error handler here
          }
     };

     return {
          userInfo,
          googleSignIn,
     };
}
