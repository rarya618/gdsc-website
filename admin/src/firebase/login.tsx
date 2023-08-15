import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app, db } from "./config";

const auth = getAuth(app);

// log in through firebase
const firebaseSignIn = async (email: string, password: string, route?: string) => {
    let status = false;
  
    await signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      // @ts-ignore
      localStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
      localStorage.setItem('userId', response.user.uid);
  
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
      localStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
      localStorage.setItem('userId', user.uid);
  
      await db.collection("users").doc(user.uid).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        hotspots: [],
        teams: []
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
    localStorage.clear();
    window.location.href = "/";
};

export {firebaseSignIn, firebaseSignUp, resetPassword, logout}