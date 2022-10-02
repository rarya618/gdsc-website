import React from 'react';
import './App.css';

import Header from './components/Header';
import Subheader from './components/Subheader';
import Landing from './pages/landing/Landing';
import Event from './pages/event/Event';
import Rules from './pages/rules/Rules';
import Footer from './Footer';

import { Link, Route, Routes } from 'react-router-dom';
import IndividualProblem from './pages/ctf/IndividualProblem';


function App() {
  return (
    <div className="App">
      <Header />
      <Subheader />
      <Routes>
				<Route path="/" element={<Event />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/summary" element={<Rules />} />
        <Route path="/problem/:problemId" element={<IndividualProblem />} />
			</Routes>
      <Footer />
    </div>
  );
}

export default App;
