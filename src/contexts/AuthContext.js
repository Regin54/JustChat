import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const signUp = (email, password, displayName) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userCredential.user.displayName = displayName;
      })
      .catch((err) => {
        return err.message;
      });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential;
      })
      .catch((err) => {
        return err.message;
      });
  };

  const logOut = () => {
    return signOut(auth).then(() => {
      console.log("user signed out", currentUser);
    });
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
    signIn,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
