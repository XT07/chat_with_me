// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBNr5i4CCo9ENxK5hS5yGZH1BAP3Hbgrc",
  authDomain: "chat-with-me-7003a.firebaseapp.com",
  projectId: "chat-with-me-7003a",
  storageBucket: "chat-with-me-7003a.appspot.com",
  messagingSenderId: "42509510683",
  appId: "1:42509510683:web:140ef9a238741bfc23b0be",
  measurementId: "G-L3M3P45TRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
