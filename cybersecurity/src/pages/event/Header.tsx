import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import placeholder from '../../resources/greenGrid.svg';
// import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${mainHex};
    background-color: #fff;
    padding: 0;
    // height: calc(100vh - 160px);
    background-size: cover;

    @media only screen and (max-width: 768px) {
        height: calc(100vh - 80px);
    } 

    @media only screen and (max-width: 425px) {
        padding: 5px;
    } 
`;


const Image = styled.img`
    margin: 0;
    width: 100%;

    @media only screen and (max-width: 1024px) {
        width: 400px;  
    }

    @media only screen and (max-width: 525px) {
        width: 360px;  
    }
    
    @media only screen and (max-width: 435px) {
        width: 100%;
    }
`;

function Home() {
    return (
        <Page>
            <Image src={placeholder} />
        </Page>
    );
}

export default Home;
