import React from 'react';
import styled from 'styled-components';
import { blueHex } from '../../colors';

import placeholder from '../../resources/header-graphic.svg';
import grid from '../../resources/blueGrid.png';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${blueHex};
    padding: 0 20px;
    height: calc(100vh - 80px);
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: url(${grid});
    background-repeat: repeat;
    background-size: contain;

    @media only screen and (max-width: 768px) {
        height: calc(100vh - 80px);
    } 

    @media only screen and (max-width: 425px) {
        padding: 5px;
    } 
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    ${margin}

    @media only screen and (max-width: 1024px) {
        font-size: calc(25px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(30px + 1vmin);
    } 

    @media only screen and (max-width: 425px) { 
        font-size: calc(22px + 1vmin);
    } 

    @media only screen and (max-width: 375px) { 
        font-size: calc(18px + 1vmin);
    } 
 
`;

export const Text = styled.p`
    ${margin}
    font-size: calc(18px + 1vmin);

    @media only screen and (max-width: 1024px) {
        font-size: calc(15px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
        font-size: calc(18px + 1vmin);  
    } 

    @media only screen and (max-width: 425px) {
        font-size: calc(15px + 1vmin);  
    } 

    @media only screen and (max-width: 375px) {
        font-size: calc(12px + 1vmin);  
    } 
`;


const Image = styled.img`
    width: 450px;
    margin: 0;

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
            <SafeArea>
                <RowContainer>
                    <Content>
                        <Title>Using big tech for big good</Title>
                        <Text>Founded in 2021, the USYD GDSC aims to build a welcoming, passionate and interdisciplinary student community interested in all things tech.</Text>
                    </Content>
                    <Content>
                        <Image src={placeholder} />
                    </Content>
                </RowContainer>
            </SafeArea>
        </Page>
    );
}

export default Home;
