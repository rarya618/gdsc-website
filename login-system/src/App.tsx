import React from 'react';
import styled from 'styled-components';

import logo from './resources/header-logo.png';
import grid from './resources/blueGrid.png';

import './App.css';

const Body = styled.div`
  background: url(${grid});
  background-repeat: repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 400px;
  position: absolute;
  left: 20px;
  top: 20px;
`;

function App() {
  return (
    <Body className="App">
      <Logo src={logo} />
    </Body>
  );
}

export default App;
