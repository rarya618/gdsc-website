import React from 'react';
import styled from 'styled-components';
import { mainHex, whiteHex } from '../colors';
// import { slide as Menu } from 'react-burger-menu'

import { Link, Route, Routes } from 'react-router-dom';
import logo from '../resources/Logo.png';

const HeaderObject = styled.div`
    background: ${mainHex};
    color: ${whiteHex};
    padding: 10px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Logo = styled.img`
    height: 60px;
    margin-left: 10px;
    @media only screen and (max-width: 525px) { 
		height: 50px;
	} 

	@media only screen and (max-width: 425px) { 
		height: 45px;
		margin-left: 5px;
	} 

	@media only screen and (max-width: 375px) { 
		height: 40px;
	} 

	@media only screen and (max-width: 325px) { 
		height: 35px;
	}
`;

const Menu = styled.div`
    padding: 5px 10px;
`;

const MenuItem = styled.span`
    padding: 10px 12px;
    margin: 5px;
    border-radius: 3px;
    font-size: 16px;
    border: solid 1px transparent;
`;

const CallToAction = styled.button`
    background: ${whiteHex};
    color: ${mainHex};
    padding: 10px 14px;
    margin: 6px 12px;
    border-radius: 3px;
    border: none;
    font-size: 16px;
	border: solid 1px;
`;

// thinking of adding these items to a remote source, where they can automatically be updated for each sub-website
const menuItems = [
    // {text: "AI/ML"},
    // {text: "Cybersecurity"},
    {text: "Game Jam"},
]

const Header = () => {
    return (
        <HeaderObject>
            <Link to="/"><Logo src={logo} /></Link>		
            <Menu>
                {menuItems.map(menuItem => {
                    return <MenuItem className="hoverable">{menuItem.text}</MenuItem>
                })}
                <CallToAction className="hoverable">Join us</CallToAction>
            </Menu>
        </HeaderObject>
    )
}

export default Header;