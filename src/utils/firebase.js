// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd8l3nj3gIIxDqOVkA1miNO2DAoZBamCk",
  authDomain: "cineflixgpt-d14ac.firebaseapp.com",
  projectId: "cineflixgpt-d14ac",
  storageBucket: "cineflixgpt-d14ac.firebasestorage.app",
  messagingSenderId: "804764030720",
  appId: "1:804764030720:web:1a102305660983b7d845e5",
  measurementId: "G-T3TT50PEM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();