import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from './resources/header-logo.png';
import './App.css';
import Home from './landing/Home';
import Offerings from './landing/Offerings';
import { blueHex, whiteHex } from './colors';
import JoinClub from './landing/JoinClub';
import Footer from './Footer';

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

export const standardSpacing = 'padding: 12px 16px; margin: 5px 6px; border-radius: 5px;'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  font-size: calc(12px + 1vmin);
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
`;

const MenuItem = styled.a`
  ${standardSpacing}
  color: ${blueHex};
`;

const CallToAction = styled.a`
  background: ${blueHex};
  color: ${whiteHex};
  ${standardSpacing}
`;

const Logo = styled.img`
  height: 60px;
  padding: 5px 10px;
`;

function App() {
	return (
		<div className="App">
			<Header>
				<Logo src={logo} />
				<Menu>
					<MenuItem className="hoverable">Who are we?</MenuItem>
					<MenuItem className="hoverable">Events</MenuItem>
					<MenuItem className="hoverable">Competitions</MenuItem>
					<CallToAction className="btn-hoverable">Join us</CallToAction>
				</Menu>
			</Header>
			<Home />
			<Offerings />
			<JoinClub />
			<Footer />
		</div>
	);
}

export default App;
