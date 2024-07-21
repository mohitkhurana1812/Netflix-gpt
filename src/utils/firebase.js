// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU_8lX15M8MbCaTQ90mvsWgcyhnquqQq0",
  authDomain: "netflix-gpt-190a3.firebaseapp.com",
  projectId: "netflix-gpt-190a3",
  storageBucket: "netflix-gpt-190a3.appspot.com",
  messagingSenderId: "763043868754",
  appId: "1:763043868754:web:7eb97fb97d4ac3b6c3af8b",
  measurementId: "G-1C6NXPKTSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();