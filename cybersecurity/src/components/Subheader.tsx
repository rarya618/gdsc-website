import React from 'react';
import styled from 'styled-components';
import { mainHex, greenLightHex } from '../colors';
import SafeArea from './SafeArea';

const HeaderObject = styled.div`
    background: ${greenLightHex};
    color: ${mainHex};
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

const Heading = styled.h3`
    padding: 5px;
    margin: 0;    
`;

const MenuItem = styled.span`
    padding: 7px 9px;
    border-radius: 25px;
    margin: 0;
`;

const Subheader = () => {
    return (
        <HeaderObject>
            <SafeArea className="row spaced">
                <Heading>Cybersecurity</Heading>
                <MenuItem className="deep-hoverable">Capture the Flag</MenuItem>
            </SafeArea>
        </HeaderObject>
    )
}

export default Subheader;