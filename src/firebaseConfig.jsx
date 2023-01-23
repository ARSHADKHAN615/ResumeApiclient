import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASS-IP57NbSoEEE1BFvi9ZjAKeMzN9uzE",
  authDomain: "resume-api-75ad4.firebaseapp.com",
  projectId: "resume-api-75ad4",
  storageBucket: "resume-api-75ad4.appspot.com",
  messagingSenderId: "944723526338",
  appId: "1:944723526338:web:9b7d3d03a5bf42433b315b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(FirebaseApp);
export const provider = new GoogleAuthProvider();