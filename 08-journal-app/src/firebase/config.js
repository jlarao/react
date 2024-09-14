// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmFTRDTpNLu-mEC1n_DmrkEC9ZGpsCRIs",
  authDomain: "journal-4edfb.firebaseapp.com",
  projectId: "journal-4edfb",
  storageBucket: "journal-4edfb.appspot.com",
  messagingSenderId: "511356891715",
  appId: "1:511356891715:web:5f29953815d1a14a649af6",
  measurementId: "G-KH0CHGFJZ4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const analytics = getAnalytics(FirebaseApp);