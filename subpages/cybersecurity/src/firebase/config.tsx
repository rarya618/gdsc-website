// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get, child } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdgEs7mefO_Woe3UJA7lgdlrtiqjpmfCI",
  authDomain: "gdsc-usyd.firebaseapp.com",
  projectId: "gdsc-usyd",
  storageBucket: "gdsc-usyd.appspot.com",
  messagingSenderId: "971303209941",
  appId: "1:971303209941:web:5f6664e097a8bbf816cb5c",
  measurementId: "G-6T36YYBFL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// get Realtime Database
const db = getDatabase(app);

const getQuestion = async (questionId: string) => {
    let result: any;

    const dbRef = ref(db);

    await get(child(dbRef, `questions/${questionId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          result = snapshot.val();
        } else {
          result = null;
        }
    }).catch((error) => {
        console.error(error);
    });;

    return result;
    
}

export {analytics, getQuestion};