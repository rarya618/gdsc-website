import React from 'react';
import styled from 'styled-components';
import { greenHex, whiteHex } from '../colors';

const HeaderObject = styled.div`
    background: ${greenHex};
    color: ${whiteHex};
    padding: 10px;
    display: flex;
`;

const Menu = styled.div`
    padding: 5px 10px;
`;

const MenuItem = styled.span`
    padding: 10px 12px;
    margin: 5px;
    font-size: 16px;
`;

const CallToAction = styled.button`
    background: ${whiteHex};
    color: ${greenHex};
    padding: 10px 14px;
    margin: 6px 12px;
    border-radius: 3px;
    border: none;
    font-size: 16px;
`;

// thinking of adding these items to a remote source, where they can automatically be updated for each sub-website
const menuItems = [
    {text: "AI/ML"},
    {text: "Cybersecurity"},
    {text: "Game Jam"},
    {text: "Design Month"},
]

const Header = () => {
    return (
        <HeaderObject>
            <Menu>
                {
                    menuItems.map(menuItem => {
                        return <MenuItem>{menuItem.text}</MenuItem>
                    })
                }
                <CallToAction>Join Us</CallToAction>
            </Menu>
        </HeaderObject>
    )
}

export default Header;