// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_N3Op9ZIBhG3JoPq4BVrCZQN3xfbZFWs",
  authDomain: "netflixgpt-525d9.firebaseapp.com",
  projectId: "netflixgpt-525d9",
  storageBucket: "netflixgpt-525d9.appspot.com",
  messagingSenderId: "865163813974",
  appId: "1:865163813974:web:7963065181aa1613db47f7",
  measurementId: "G-W9HQ8WYYCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();