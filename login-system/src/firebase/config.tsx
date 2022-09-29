// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

import {
  getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  signOut 
} from "firebase/auth";

import {
  getDoc
} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

let isTesting = false;

// Your web app's Firebase configuration
const testConfig = {
  apiKey: "AIzaSyD1Z8u6LAQDrwBAd-t-aMzoYFpgrfjFH0E",
  authDomain: "gdscusyd-test.firebaseapp.com",
  projectId: "gdscusyd-test",
  storageBucket: "gdscusyd-test.appspot.com",
  messagingSenderId: "430942619633",
  appId: "1:430942619633:web:66d173a44511aef2d5e650",
  measurementId: "G-QN1CHDNMJM"
};

const prodConfig = {
  apiKey: "AIzaSyCdgEs7mefO_Woe3UJA7lgdlrtiqjpmfCI",
  authDomain: "gdsc-usyd.firebaseapp.com",
  projectId: "gdsc-usyd",
  storageBucket: "gdsc-usyd.appspot.com",
  messagingSenderId: "971303209941",
  appId: "1:971303209941:web:1866f25a953d3e1016cb5c",
  measurementId: "G-S1VSX495L5"
};

let appConfig = isTesting ? testConfig : prodConfig;

// Initialize Firebase
const app = firebase.initializeApp(appConfig);
const auth = getAuth(app);

// Initialize db
const db = app.firestore();

// Initialize analytics
const analytics = getAnalytics(app);

// log in function
const firebaseSignIn = async (email: string, password: string, route?: string) => {
  let status = false;

  await signInWithEmailAndPassword(auth, email, password)
  .then((response) => {
    // @ts-ignore
    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
    sessionStorage.setItem('userId', response.user.uid);

    status = true;
  })
  .catch ((error) => {
    if (error.message === "Firebase: Error (auth/wrong-password).") {
      alert("Incorrect password");
    } else if (error.message === "Firebase: Error (auth/user-not-found).") {
      alert("User not found");
    } else {
      alert(error.message);
    }
  })

  return status;
};

const firebaseSignUp = async (firstName: string, lastName: string, email: string, password: string) => {
  let status = false;
  
  await createUserWithEmailAndPassword(auth, email, password)
  .then(async (response) => {
    const user = response.user;

    // @ts-ignore
    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
    sessionStorage.setItem('userId', user.uid);

    await db.collection("users").doc(user.uid).set({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });

    status = true;
  })
  .catch((error) => {
    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
      alert("Email already exists. Try signing in.");
    } else {
      alert(error.message);
    }
  })

  return status;
};

const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } 
  
  catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
  sessionStorage.clear();
  window.location.href = "/";
};

const getUser = async (uid: string) => {
  let docRef = db.collection('users').doc(uid);

  return (await getDoc(docRef)).data();
}

export {
  app, db, analytics, 
  firebaseSignIn, firebaseSignUp, resetPassword, logout,
  getUser,
};