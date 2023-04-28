import {
     User,
     createUserWithEmailAndPassword,
     getAuth,
     sendEmailVerification,
     signInWithEmailAndPassword,
     updateProfile,
     signOut,
     linkWithCredential,
     AuthCredential,
     signInWithCredential,
     signInWithCustomToken,
     GoogleAuthProvider
} from "firebase/auth";
import { screens } from "navigations/constants";
import { navigate } from "navigations/navRef";
import { _firebase } from "./";
import { store } from "store/store";
import { setUser } from "store/auth/authSlice";

export const auth = getAuth(_firebase);
const createFirebaseUser = (email: string, name: string, password: string) => {
     
     return new Promise((resolve, reject) => {
          createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                         displayName: name,
                    });
                    sendEmailVerification(user);
                    resolve(user);
                    // simpleToastShow("Account created successfully.")
                    navigate(screens.Login)
               })
               .catch((error) => {
                    reject(error);
               });
     });
};

const loginFirebaseUser = (email: string, password: string) => {
     return new Promise<User>((resolve, reject) => {
          signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    const user = userCredential.user;
                    store.dispatch(setUser(user));
                    resolve(user);
               })
               .catch((error) => {
                    reject(error);
               });
     });
};

const loginGoogleSignInLinkWithCredientials = (token: string) => {
     return new Promise<User>((resolve, reject) => {
          const cred = GoogleAuthProvider.credential(token);
          signInWithCredential(auth, cred)
               .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("===> ~ file: user.ts:61 ~ .then ~ user:", user);
                    store.dispatch(setUser(user));
                    resolve(user);
               })
               .catch((error) => {
                    console.log("===> ~ file: user.ts:65 ~ error:", error);
                    reject(error);
               });
     });
};

const logoutFirebaseEmail = () => {
     signOut(auth).then(() => {
                    store.dispatch(setUser({}));

     });
}

export const firebaseUserService = {
     createFirebaseUser,
     loginFirebaseUser,
     logoutFirebaseEmail,
     loginGoogleSignInLinkWithCredientials,
};
