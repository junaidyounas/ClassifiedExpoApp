import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { _firebase } from ".";

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
                    resolve(user);
               })
               .catch((error) => {
                    console.log(
                         "===> ~ file: user.ts:14 ~ createFirebaseUser ~ error:",
                         error
                    );
                    reject(error);
               });
     })
};

export const firebaseUserService = {
     createFirebaseUser,
};
