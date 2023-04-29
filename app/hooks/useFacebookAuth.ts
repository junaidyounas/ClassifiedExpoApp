import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithCredential } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { _firebase } from "services/firebase";
import { setUser } from "store/auth/authSlice";
import { store } from "store/store";

WebBrowser.maybeCompleteAuthSession();
const auth = getAuth(_firebase);

export function useFacebookAuth() {
     const [token, setToken] = useState("");
     const [idToken, setIdToken] = useState("");
     const [isFacebookLoading, setIsLoading] = useState(false);
     const dispatch = useDispatch();
     const [request, response, facebookLogin] = Facebook.useAuthRequest({
          clientId: "256445990173428",
     });

     React.useEffect(() => {
          if (response?.type === "success") {
               setToken(response.authentication.accessToken);
               setIdToken(response.authentication?.idToken);
               getUserInfo();
          } else {
               setIsLoading(false);
          }
     }, [response, token]);

     const getUserInfo = async () => {
          try {
               // const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
               //      headers: { Authorization: `Bearer ${token}` },
               // });

               // const user = await response.json();
               // console.log(
               //      "===> ~ file: useGoogleAuth.ts:64 ~ getUserInfo ~ user:",
               //      user
               // );
               const cred = FacebookAuthProvider.credential(idToken);
               signInWithCredential(auth, cred)
                    .then((userCredential) => {
                         const user = userCredential.user;
                         store.dispatch(setUser(user));
                    })
                    .catch((error) => {
                         console.log("===> ~ file: user.ts:65 ~ error:", error);
                    }).finally(() => {
                         setIsLoading(false);
                    });
               // setUserInfo(user);
          } catch (error) {
               // Add your own error handler here
          }
     };

     const facebookSignIn = () => {
          setIsLoading(true);
          facebookLogin();
     };

     return {
          isFacebookLoading,
          facebookSignIn,
     };
}
