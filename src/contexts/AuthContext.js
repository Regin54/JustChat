import { useContext, useState, createContext, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential)
        return userCredential;
      })
      .catch((err) => {
        return err.message;
      });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential);
        return userCredential;
      })
      .catch((err) => {
        return err.message;
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((credential) => {
        return credential;
      })
      .catch((err) => {
        return err.message;
      });
  };

  const logOut = () => {
    return signOut(auth).then(() => {
      setCurrentUser(null);
    });
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsub;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    logOut,
    signInWithGoogle,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
