import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "justchat-a4829.firebaseapp.com",
  projectId: "justchat-a4829",
  storageBucket: "justchat-a4829.appspot.com",
  messagingSenderId: "364408484956",
  appId: "1:364408484956:web:af5b93cb688cd047b0e299",
  measurementId: "G-WWTH704SH3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
