// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "e-commerce-1df07.firebaseapp.com",
  projectId: "e-commerce-1df07",
  storageBucket: "e-commerce-1df07.appspot.com",
  messagingSenderId: "839137675465",
  appId: "1:839137675465:web:b5a854c889bc1832efa518",
  measurementId: "G-P3ZWRBGZ2S"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {auth,provider}