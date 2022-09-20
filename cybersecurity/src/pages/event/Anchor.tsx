import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';
import { Link, Route, Routes } from 'react-router-dom';

import arrow from '../../resources/arrow.svg';
import SafeArea, { RowContainer } from '../../components/SafeArea';

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
    {text: "What is Capture The Flag?", link: "/event"},
    {text: "Example", link: "/event"},
    {text: "How to Register?", link: "/event"},
    {text: "Timeline", link: "/event"},
]

const RowMenu = styled.div`
    display: flex;
`;

const Anchor = () => {
    return (
        <HeaderObject>
            <SafeArea>
                <MenuItem>
                {menuItems.map(menuItem => { 
                    return (
                        <RowMenu>
                            <Link 
                                to={menuItem.link ? menuItem.link : ""}
                                style={menuLinkStyle}>
                                    {menuItem.text}
                                    <Image src={arrow} /> 
                            </Link>
                        </RowMenu>)
                })}
                </MenuItem>
            </SafeArea>
        </HeaderObject>
    )
}

export default Anchor;