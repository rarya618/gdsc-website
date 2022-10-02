import React from 'react';
import './App.css';

import Header from './components/Header';
import Subheader from './components/Subheader';
import Landing from './pages/landing/Landing';
import TechImpact from './pages/techimpact/TechImpact';
import Footer from './Footer';

import { Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Subheader />
      <Routes>
				<Route path="/" element={<Landing />} />
        <Route path="/opensource" element={<TechImpact />} />
			</Routes>
      <Footer />
    </div>
  );
}

export default App;
