import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsub;
  }, []);

  const value = {
    currentUser,
    signUp,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
