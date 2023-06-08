import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

// component Auth Provider Here

const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(null);

   //    google login
   const googleProvider = new GoogleAuthProvider();

   const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
   };

   //  Email Pass login

   const emailPassSignUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const emailPassSignIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   //    update user
   const updateUser = (name, photoUrl) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photoUrl,
      });
   };

   //    reset password

   const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
   };

   // !log out function

   const logOut = () => {
      return signOut(auth);
   };

   // Monitoring User Here

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
         setUser(loggedUser);
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);

   //    All are exporting from here
   const authContext = {
      user,
      loading,
      setLoading,
      googleLogin,
      emailPassSignUp,
      emailPassSignIn,
      updateUser,
      resetPassword,
      logOut,
   };

   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
