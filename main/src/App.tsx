import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from './resources/header-logo.png';
import './App.css';
import Landing from './landing/Landing';
import { blueHex, whiteHex } from './colors';
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

export const standardSpacing = 'padding: 10px 14px; margin: 6px 12px; border-radius: 3px;'

const Header = styled.header`
	display: flex;
	flex-direction: row;
	padding: 10px;
	justify-content: space-between;
	font-size: calc(12px + 1vmin);
	align-items: center;
	position: sticky;
	top: 0;
	background: white;
`;

const Menu = styled.div`
	display: flex;
	flex-direction: row;
	padding: 5px 10px;
`;

const MenuItem = styled.a`
	padding: 10px 14px; 
	margin: 5px; 
	border-radius: 3px;
  	color: ${blueHex};
  	font-size: 16px;
`;

export const CallToAction = styled.a`
  	background: ${blueHex};
  	color: ${whiteHex};
  	padding: 10px 14px; 
	margin: 6px 12px; 
	border-radius: 3px;
  	font-size: 16px;
	text-decoration: none;
`;

const Logo = styled.img`
  height: 60px;
  margin-left: 10px;
`;

const menuItems = [
    {text: "Study Groups"},
    {text: "Events"}
]

const subMenuItems = [
    {text: "AI/ML"},
    {text: "Cybersecurity"},
    {text: "Game Jam"},
    {text: "Design Month"},
]

function App() {
	return (
		<div className="App">
			<Header>
				<Logo src={logo} />
				<Menu>
					{menuItems.map(menuItem => {
						return <MenuItem className="hoverable">{menuItem.text}</MenuItem>
					})}
					<CallToAction className="btn-hoverable" href="https://gdsc.community.dev/accounts/login/?next=/the-university-of-sydney/">Join us</CallToAction>
				</Menu>
			</Header>
			<Landing />
			<Footer />
		</div>
	);
}

export default App;
