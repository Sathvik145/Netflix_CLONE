
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2YwKxZ6NqQ0080shBjMKYELaZb1vq72A",
  authDomain: "react-netflix-clone-57ad3.firebaseapp.com",
  projectId: "react-netflix-clone-57ad3",
  storageBucket: "react-netflix-clone-57ad3.appspot.com",
  messagingSenderId: "548101426250",
  appId: "1:548101426250:web:c0f2eac03505a96fcceab3",
  measurementId: "G-TD3F2BSLS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);