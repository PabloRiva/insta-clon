// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeBsgAWwAh4m6e5Ldy-CLp29l-MoaWoC0",
  authDomain: "insta-clon-f7d8e.firebaseapp.com",
  projectId: "insta-clon-f7d8e",
  storageBucket: "insta-clon-f7d8e.appspot.com",
  messagingSenderId: "66858637632",
  appId: "1:66858637632:web:3241ab2346a2f526aa02a5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };