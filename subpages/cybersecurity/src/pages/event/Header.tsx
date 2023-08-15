import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import placeholder from '../../resources/heeader.png';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${mainHex};
    background-color: #fff;
    padding: 0;
    height:auto;
    background-size: cover;

    @media only screen and (max-width: 1024px) {
        height:auto;
    } 

    @media only screen and (max-width: 425px) {
        height:auto;
    } 
`;


const Image = styled.img`
    margin: 0;
    width: 100%;
`;

function Home() {
    return (
        <Page>
            <Image src={placeholder} />
        </Page>
    );
}

export default Home;
