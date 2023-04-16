import React from 'react';
import styled from 'styled-components';
import { mainHex, whiteHex } from '../colors';
import { slide as Menu } from 'react-burger-menu';

import { Link } from 'react-router-dom';
import logo from '../resources/header-logo.png';
import './MobileMenu.css';

const HeaderObject = styled.div`
    background: ${whiteHex};
    color: ${mainHex};
    padding: 10px;
    display: none;
    justify-content: space-between;
    z-index: 100;

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

const MobileMenu = () => {
    return (
        <HeaderObject>
            <Link to="/"><Logo src={logo}/></Link>		
            <Menu isOpen={ false } width={ '100%' } noOverlay right>
                <a id="home" className="menu-item" href="https://gdscusyd.org/">Home</a>
                <a className="menu-item" href="https://competitions.gdscusyd.org/">Get started</a>
                <a className="menu-item" href="https://gdsc.community.dev/accounts/login/?next=/the-university-of-sydney/">Join GDSC</a>
            </Menu>
        </HeaderObject>
    )
}

export default MobileMenu;