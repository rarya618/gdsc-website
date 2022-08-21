import React, { useEffect } from 'react';
import styled from 'styled-components';

import logo from './resources/header-logo.png';
import './App.css';

import Landing from './pages/landing/Landing';
import StudyGroups from './pages/StudyGroups/Main';
import Footer from './Footer';

import { blueHex, whiteHex } from './colors';
import { Link, Route, Routes } from 'react-router-dom';
import Terms from './components/TermsView';
import ToC from './resources/pages/ToC';
import PrivacyPolicy from './resources/pages/PrivacyPolicy';

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

export const menuLinkStyle = {
	padding: "10px 14px",
	margin: "5px",
	borderRadius: "3px",
  	color: blueHex,
	textDecoration: "none",
  	fontSize: "16px"
};

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
    {text: "Study Groups", link: "/study-groups"},
    // {text: "Events"}
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
				<Link to="/"><Logo src={logo} /></Link>
				<Menu>
					{menuItems.map(menuItem => {
						return <Link 
							className="hoverable" 
							to={menuItem.link ? menuItem.link : ""}
							style={menuLinkStyle}>
								{menuItem.text}
							</Link>
					})}
					<CallToAction className="btn-hoverable" href="https://gdsc.community.dev/accounts/login/?next=/the-university-of-sydney/">Join us</CallToAction>
				</Menu>
			</Header>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/study-groups" element={<StudyGroups />} />
				<Route path="/terms" element={<Terms content={ToC} />} />
				<Route path="/privacy" element={<Terms content={PrivacyPolicy} />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
