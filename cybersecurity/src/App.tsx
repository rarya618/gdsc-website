import React from 'react';
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';

function App() {
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
