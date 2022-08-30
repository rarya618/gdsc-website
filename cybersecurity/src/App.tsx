import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

initializeApp(firebaseConfig);


function App() {
  // interface UserData {
  //   name: string;
  //   email: string;
  // }

  // const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState<UserData | null>(null);
  // const auth = getAuth();

  // onAuthStateChanged(auth, (user) => {
  //   setLoggedIn(!loggedIn);
  //   if (user) {
  //     setUser({user.displayName, user.email});
  //   } else {
  //     console.log("Logged out");
  //   }
  // })
  
  return (
    <div className="App">
      <Header />
      <Subheader />
      <header className="App-header">
        <p>Cybersecurity</p>
      </header>
    </div>
  );
}

export default App;
