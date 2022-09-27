import React from 'react';
import styled from 'styled-components';
import { mainHex, whiteHex } from '../colors';
import { slide as Menu } from 'react-burger-menu'

import { Link, Route, Routes } from 'react-router-dom';
import logo from '../resources/Logo.png';
import './MobileMenu.css';

const HeaderObject = styled.div`
    background: ${mainHex};
    color: ${whiteHex};
    padding: 10px;
    display: none;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        display: flex;
        position: sticky;
        align-items: center;
        top: 0;
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

// const Menu = styled.div`
//     padding: 5px 10px;
// `;

const MenuItem = styled.span`
    padding: 10px 12px;
    margin: 5px;
    border-radius: 3px;
    font-size: 16px;
    border: solid 1px transparent;
`;

// const CallToAction = styled.button`
//     background: ${whiteHex};
//     color: ${mainHex};
//     padding: 10px 14px;
//     margin: 6px 12px;
//     border-radius: 3px;
//     border: none;
//     font-size: 16px;
// 	border: solid 1px;
// `;

// thinking of adding these items to a remote source, where they can automatically be updated for each sub-website
const menuItems = [
    // {text: "AI/ML"},
    // {text: "Cybersecurity"},
    // {text: "Game Jam"},
    {text: "Home", link: "/"},
    {text: "Game Jam Week", link: "/event"},
    {text: "Guidelines", link: "/guidelines"},
    {text: "Register for Game Jam"},
    {text: "Join GDSC"},
]

const MobileMenu = () => {
    return (
        <HeaderObject>
            <Link to="/"><Logo src={logo}/></Link>		
            <Menu isOpen={ false } width={ '100%' } noOverlay right>
                {/* {menuItems.map(menuItem => {
                    return <MenuItem className="menu-item">{menuItem.text}</MenuItem>
                })} */}
                {/* <CallToAction className="menu-item">Join us</CallToAction> */}
                <a id="home" className="menu-item" href="/">Home</a>
                <a className="menu-item" href="/event">Game Jam Week</a>
                <a className="menu-item" href="/guidelines">Guidelines</a>
                <a className="menu-item" href="/event">Register for Game Jam</a>
                <a className="menu-item" href="https://gdsc.community.dev/accounts/login/?next=/the-university-of-sydney/">Join GDSC</a>
            </Menu>
        </HeaderObject>
    )
}

export default MobileMenu;