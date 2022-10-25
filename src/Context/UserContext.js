import React, { Children } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // Email Password Register
  const emailPasswordRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUserProfile = (name, imageUrl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageUrl,
    });
  };

  // Verify Email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser);
    return;
  };

  // Email Password Login
  const emailPasswordLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //github login
  const gitHubLogIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const authInfo = {
    user,
    emailPasswordRegister,
    updateUserProfile,
    verifyEmail,
    emailPasswordLogIn,
    googleLogIn,
    gitHubLogIn,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;