import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';
import { Link, Route, Routes } from 'react-router-dom';

import arrow from '../../resources/arrow.svg';
import SafeArea, { RowContainer } from '../../components/SafeArea';

import { HashLink } from 'react-router-hash-link';
import * as Scroll from 'react-scroll';

interface Props {
    open: boolean,
  }

const HeaderObject = styled.div`
    background: #ffffff;
    color: ${mainHex};
    padding: 6px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 58px;
    z-index: 10;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const MenuItem = styled.span`
    padding: 7px 9px;
    border-radius: 25px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 100%
`;

export const menuLinkStyle = {
	padding: "10px 5px",
	margin: "5px",
	borderRadius: "3px",
    color: mainHex,
	textDecoration: "none",
    fontSize: "16px"
};

const Image = styled.img`
    margin: 0 10px;
    // width: 100%;
`;

const menuItems = [
    {text: "Info", link: "/rules/#info"},
    {text: "Rules", link: "/rules/#rules"},
    {text: "Prizes", link: "/rules/#prizes"},
    {text: "Tips", link: "/rules/#tips"},
]

const RowMenu = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -58; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const Anchor = () => {
    return (
        <HeaderObject>
            <SafeArea>
                <MenuItem>
                {menuItems.map(menuItem => { 
                    return (
                        <RowMenu>
                           <HashLink 
                                scroll={el => scrollWithOffset(el)} 
                                to={menuItem.link ? menuItem.link : ""}
                                style={menuLinkStyle}>
                                    {menuItem.text}
                                    <Image src={arrow} /> 
                            </HashLink>
                        </RowMenu>)
                })}
                </MenuItem>
            </SafeArea>
        </HeaderObject>
    )
}

export default Anchor;