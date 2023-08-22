// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: "indy-massage.firebaseapp.com",
  projectId: "indy-massage",
  storageBucket: "indy-massage.appspot.com",
  messagingSenderId: "1071214226696",
  appId: "1:1071214226696:web:a5ef08f5bacce8dc6990bd",
  measurementId: "G-V3B9RBLBLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DATABASE = getFirestore(app);
const AUTH = getAuth(app)

export default app
export {DATABASE, AUTH, STORAGE}
