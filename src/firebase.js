// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCjnYdYZl7uDcMKPRDgSEIPb7Ys5iEWGyE",
  authDomain: "ecommerce-c4572.firebaseapp.com",
  projectId: "ecommerce-c4572",
  storageBucket: "ecommerce-c4572.firebasestorage.app",
  messagingSenderId: "971692927890",
  appId: "1:971692927890:web:8db5ac94bb7d6f2c65ef4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


// (Opcional) escopos extras para Microsoft, ex:
// microsoftProvider.addScope("User.Read");
