import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Link, Route, Routes } from 'react-router-dom';

import logo from './resources/header-logo.png';
import grid from './resources/blueGrid.png';

import './App.css';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import { blueHex } from './colors';
import Dashboard from './views/Dashboard';
import { buttonStyle } from './objectStyles';

// team imports
import TeamPublic from './views/Teams/TeamPublic';
import TeamPrivate from './views/Teams/TeamPrivate';
import GetTeam from './views/Teams/GetTeam';

// ctf imports
import CTFIndividualProblem from './views/ctf/IndividualProblem';
import CTFSummary from './views/ctf/Summary';
import CTFLeaderboard from './views/ctf/Leaderboard';

// set page title
export function useTitle(title: string) {
	useEffect(() => {
		const prevTitle = document.title;

		document.title = title + " - GDSC @ the University of Sydney";
		
		return () => {
			document.title = prevTitle
		}
	})
}

export const addToList = (list: any[], item: any) => {
  return [...list, item];
}

// generate random string of specified length
export function randomString(length: number) {
  var result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

// background set up
const Body = styled.div`
  background: url(${grid});
  background-repeat: repeat;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 200px);
  padding: 100px 0;
  position: fixed;
  overflow-y: scroll;
`;

const Logo = styled.img`
  max-width: 400px;
  width: 75%;
  position: absolute;
  left: 20px;
  top: 10px;
  z-index: 1000;
`;

const Scrollable = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 40px 0;
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;

`;

// box structure
export const Box = styled.form`
  max-width: 350px;
  width: 100%;
  left: 0;
  right: 0;
  margin: auto;

  background: #FFFFFF;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  padding: 15px 0;

  display: flex;
  flex-direction: column;
`;

// field elements
const fieldStyle = `
  display: flex;
  flex-direction: column;
  margin: 10px 22px;
`;

export const Field = styled.div`
  ${fieldStyle}
`;

export const Label = styled.span`
  text-align: left;
  margin: 6px 0;
`;

const textBoxStyle = `
  padding: 10px;
  border: solid 1px #D2E2FB;
  border-radius: 3px;
  font-size: 14px;
`;

export const TextBox = styled.input`
  ${textBoxStyle}
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
  ${buttonStyle}
  background: ${blueHex};
  color: #fff;
  margin-right: 0;
`;

export const SSOSubmit = styled.button`
  // ${buttonStyle}

  background: ${blueHex};
  color: #fff;
  max-width: 350px;
  // width: 100%;
  // left: 0;
  // right: 0;
  margin: auto;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  // padding: 15px 0;

  display: flex;
  flex-direction: column;
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
      <Link to="/"><Logo src={logo}/></Link>
      <Scrollable>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/team/:eventCode/get" element={<GetTeam />} />
          <Route path="/team/:teamId/public" element={<TeamPublic />} />
          <Route path="/team/:teamId/private" element={<TeamPrivate />} />
          <Route path="/ctf" element={<CTFSummary />} />
          <Route path="/ctf/leaderboard" element={<CTFLeaderboard />} />
          <Route path="/ctf/problem/:problemId" element={<CTFIndividualProblem />} />
        </Routes>
      </Scrollable>
    </Body>
  );
}

export default App;
