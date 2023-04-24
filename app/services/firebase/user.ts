import {
     createUserWithEmailAndPassword,
     getAuth,
     sendEmailVerification,
     signInWithEmailAndPassword,
     updateProfile
} from "firebase/auth";
import { screens } from "navigations/constants";
import { navigate } from "navigations/navRef";
import { _firebase } from "./";

export const auth = getAuth(_firebase);
const createFirebaseUser = (email: string, name: string, password: string) => {
     
     return new Promise((resolve, reject) => {
          createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    console.log(
                         "===> ~ file: user.ts:10 ~ .then ~ userCredential:",
                         userCredential.user
                    );
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
                    console.log(
                         "===> ~ file: user.ts:14 ~ createFirebaseUser ~ error:",
                         error
                    );
                    reject(error);
               });
     });
};

const loginFirebaseUser = (email: string, password: string) => {
     return new Promise((resolve, reject) => {
          signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    console.log(
                         "===> ~ file: user.ts:10 ~ .then ~ userCredential:",
                         userCredential.user
                    );
                    const user = userCredential.user;
                    resolve(user);
               })
               .catch((error) => {
                    console.log(
                         "===> ~ file: user.ts:14 ~ createFirebaseUser ~ error:",
                         error.message,
                         error.code
                    );
                    reject(error);
               });
     });
};

export const firebaseUserService = {
     createFirebaseUser,
     loginFirebaseUser,
};
