import React from 'react';
import styled from 'styled-components';
import { mainHex, redLightHex, whiteHex } from '../colors';
import { Link, Route, Routes } from 'react-router-dom';
import SafeArea from './SafeArea';

interface Props {
    open: boolean,
  }

const HeaderObject = styled.div`
    background: ${redLightHex};
    color: ${mainHex};
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

const Heading = styled.h3`
    padding: 12px;
    margin: 0; 
`;


const CallToAction = styled.button`
    background: ${mainHex};
    color: ${whiteHex};
    padding: 7px 9px;
    border-radius: 25px;
    border: none;
    font-size: 16px;
    margin: 0px 12px;
`;

const MenuItem = styled.span`
    padding: 7px 9px;
    border-radius: 25px;
    margin: 0;
`;

export const menuLinkStyle = {
	padding: "10px 14px",
	margin: "5px",
	borderRadius: "3px",
    color: mainHex,
	textDecoration: "none",
    fontSize: "16px"
};

export const mainLinkStyle = {
    color: mainHex,
	textDecoration: "none",
};


const menuItems = [
    {text: "Game Jam Week", link: "/event"},
    {text: "Guidelines", link: "/guidelines"},
    {text: "Gallery"},
]

const Subheader = () => {
    return (
        <HeaderObject>
            <SafeArea className="row spaced">
            <Link to="/" style={mainLinkStyle}><Heading>Game Jam</Heading></Link>
                <MenuItem>
                {menuItems.map(menuItem => { 
                    return <Link 
                        className="hoverable" 
                        to={menuItem.link ? menuItem.link : ""}
                        style={menuLinkStyle}>
                            {menuItem.text}
                        </Link>
                })}
                <CallToAction className="deep-hoverable">Login</CallToAction>
                </MenuItem>
            </SafeArea>
        </HeaderObject>
    )
}

export default Subheader;