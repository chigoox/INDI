// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACtKl6oWzEUwQUu3kmdHNmrADzmR_ZB0c",
  authDomain: "indymassage-de8e7.firebaseapp.com",
  projectId: "indymassage-de8e7",
  storageBucket: "indymassage-de8e7.appspot.com",
  messagingSenderId: "621972392106",
  appId: "1:621972392106:web:926d39311cf6d3bedba8d3",
  measurementId: "G-J62CBG4XM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DATABASE = getFirestore(app);
const AUTH = getAuth(app)

export default app
export { DATABASE, AUTH }
