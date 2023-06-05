// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDqvrn7zjWhVI0Y8bgjHn9lG3kfW4YWBw",
  authDomain: "chat-app-c3cf4.firebaseapp.com",
  projectId: "chat-app-c3cf4",
  storageBucket: "chat-app-c3cf4.appspot.com",
  messagingSenderId: "435819312081",
  appId: "1:435819312081:web:0868575edb3711c66466f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Google hesap doğrulama
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// Firestore database bağlanmak için kullanıldı!
