// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3GrPZgiABPd80aGBGRMgx8Dn7PHRuJm4",
  authDomain: "higherbeingset-69912.firebaseapp.com",
  projectId: "higherbeingset-69912",
  storageBucket: "higherbeingset-69912.appspot.com",
  messagingSenderId: "907423462301",
  appId: "1:907423462301:web:0ed1220efb727518dd3574",
  measurementId: "G-J8MNTQQYS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DATABASE = getFirestore(app);
const AUTH = getAuth(app)
const STORAGE = getStorage(app)

export default app
export {DATABASE, AUTH, STORAGE}
