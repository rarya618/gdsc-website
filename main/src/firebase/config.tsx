// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdgEs7mefO_Woe3UJA7lgdlrtiqjpmfCI",
  authDomain: "gdsc-usyd.firebaseapp.com",
  projectId: "gdsc-usyd",
  storageBucket: "gdsc-usyd.appspot.com",
  messagingSenderId: "971303209941",
  appId: "1:971303209941:web:a6d9fa662f48a20916cb5c",
  measurementId: "G-HB1NEN3G3J"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize db
const db = app.firestore();

// Initialize Analytics
const analytics = getAnalytics(app);

export {app, db, analytics};