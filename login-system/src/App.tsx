import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Link, Route, Routes } from 'react-router-dom';

import logo from './resources/header-logo.png';
import grid from './resources/blueGrid.png';

import './App.css';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import { blueHex } from './colors';

// set page title
export function useTitle(title: string) {
	useEffect(() => {
		const prevTitle = document.title;

		document.title = title;
		
		return () => {
			document.title = prevTitle
		}
	})
}

// background set up
const Body = styled.div`
  background: url(${grid});
  background-repeat: repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: hidden !important;
`;

const Logo = styled.img`
  max-width: 400px;
  width: 75%;
  position: absolute;
  left: 20px;
  top: 10px;
`;

// box structure
export const Box = styled.div`
  max-width: 350px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 120px auto;

  background: #FFFFFF;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

// field elements
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 22px;
`;

export const Label = styled.span`
  text-align: left;
  margin: 6px 0;
`;

export const TextBox = styled.input`
  padding: 10px;
  border: solid 1px #D2E2FB;
  border-radius: 3px;
`;

export const Description = styled.span`
  text-align: left;
  margin: 7px 5px;
  font-size: 14px;
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  margin: -18px 22px 0 22px;
  justify-content: space-between;
`;

export const Bottom = styled.div`
  display: flex;
  margin: 22px;
  justify-content: space-between;
`;

export const Submit = styled.button`
  background: ${blueHex};
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 12px;
`;

// link styles
export const linkStyle = {
  textDecoration: 'none',
  padding: "10px 0",
  border: "none",
  background: "transparent",
  color: blueHex
}

// app structure
function App() {
  return (
    <Body className="App">
      <Logo src={logo} />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
			</Routes>
    </Body>
  );
}

export default App;
