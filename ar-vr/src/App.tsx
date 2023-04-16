import React from 'react';
import './App.css';

import Header from './components/Header';
import Subheader from './components/Subheader';
import MobileMenu from './components/MobileMenu';
import Landing from './pages/landing/Landing';
import Rules from './pages/rules/Main';
import Clues from './pages/clues/Main';
import Footer from './Footer';

import {Link, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from 'react-router-scroll-to-top';

export const appUrl = "https://gdsc-ar-hunt.web.app/";

function App() {
  return (
    <div className="App">
      <MobileMenu/>
      <Header />
      <Subheader />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/clues" element={<Clues />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
