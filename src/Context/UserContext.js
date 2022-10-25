import React, { Children } from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const user = { displayName: "Rokib" };

  const authInfo = { user };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
