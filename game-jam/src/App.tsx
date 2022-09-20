import React from 'react';
import './App.css';

import Header from './components/Header';
import Subheader from './components/Subheader';
import Landing from './pages/landing/Landing';
import Event from './pages/event/Event';
import Guidelines from './pages/guidelines/Guidelines';
import Footer from './Footer';

import { Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Subheader />
      <Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/event" element={<Event />} />
				<Route path="/guidelines" element={<Guidelines />} />
			</Routes>
      <Footer />
    </div>
  );
}

export default App;
