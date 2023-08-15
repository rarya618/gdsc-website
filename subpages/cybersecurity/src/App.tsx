import React from 'react';
import './App.css';

import Header from './components/Header';
import Subheader from './components/Subheader';
import MobileMenu from './components/MobileMenu';
import Landing from './pages/landing/Landing';
import Event from './pages/event/Event';
import Rules from './pages/rules/Rules';
import Footer from './Footer';

import { Link, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from 'react-router-scroll-to-top';

function App() {
  return (
    <div className="App">
      <MobileMenu/>
      <Header />
      <Subheader />
      <ScrollToTop />
      <Routes>
				<Route path="/" element={<Event />} />
        <Route path="/rules" element={<Rules />} />
			</Routes>
      <Footer />
    </div>
  );
}

export default App;
