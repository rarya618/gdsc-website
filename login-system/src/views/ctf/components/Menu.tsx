import React from 'react';
import styled from "styled-components";
import { greenHex } from '../../../colors';

const listItems = [
    {text: "Dashboard", id: "dashboard", link: "/"},
    {text: "Rules", id: "rules", link: "https://ctf.gdscusyd.org/rules", external: true},
    {text: "Leaderboard", id: "leaderboard", link: "/ctf/leaderboard"},
    {text: "Summary", id: "summary", link: "/ctf"},
];

const MenuView = styled.div`
    display: flex;
    position: absolute;
    right: 30px;
    top: 30px;
`;

const MenuItem = styled.div`
    margin: 0px 20px;
    cursor: pointer;
`;

type Props = {
    current?: string
}

const openLink = (link: string, external: boolean = false) => {
    if (external) {
        window.open(link);
    }
    else {
        window.location.href = link;
    }
}

const Menu = (props: Props) => {
    return (
        <MenuView>
            {listItems.map(item => {
                if (props.current && props.current === item.id)
                    return <MenuItem className="underlineHover" onClick={item.link ? () => openLink(item.link, item.external) : undefined} style={{fontWeight: "700", color: greenHex}}>{item.text}</MenuItem>
                
                return <MenuItem className="underlineHover" onClick={item.link ? () => openLink(item.link, item.external) : undefined}>{item.text}</MenuItem>
            })}
        </MenuView>
    )
}


export default Menu;