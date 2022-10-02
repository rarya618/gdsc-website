import React from 'react';
import styled from 'styled-components';
import { redHex, redLightHex } from '../../colors';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const space = "height: 25px";

const Page = styled.div`
    color: ${redHex};
    padding: 100px 20px;
    // height: calc(100vh - 80px);
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${redLightHex};

    @media only screen and (max-width: 768px) {
        height: auto;
        padding: 75px 0;
    } 

    @media only screen and (max-width: 425px) {
        height: auto;
        padding: 50px 0;
    } 
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    align-items: stretch;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    text-align: center;
    color: ${redHex};
    ${margin}

    @media only screen and (max-width: 1024px) {
        font-size: calc(25px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        // text-align: center;  
        font-size: calc(25px + 1vmin);
    } 

    @media only screen and (max-width: 425px) {
        font-size: calc(20px + 1vmin);
        margin: 10px 0;
    } 
`;

export const Text = styled.p`
    ${margin}
    color: #3a3a3a;
    font-size: calc(12px + 1vmin);
    line-height: 1.8em;
    width:35%;
    background-color: ${redHex};
    color: white;
    padding: 1.5em;
    border-radius: 0.5em;

    @media only screen and (max-width: 1024px) {
        font-size: calc(12px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        // text-align: center; 
    }

    @media only screen and (max-width: 425px) {
        margin: 0 0 15px 0;
        font-size: calc(10px + 1vmin);
    }
`;




function Home() {
    return (
        <Page id="rest">
            <SafeArea>
                <Container>
                    <Title>What NOT to do</Title>
                    <Content>
                        <Text>Any form of attack on the website and database is strictly prohibited. It is not part of the competition and skill set we are looking for, any attempt of hacking would result in direct disqualification.</Text>
                        <Text>Sharing answers and collaboration are strictly prohibited, and attempts of cheating will result in direct disqualification. Participants will be investigated if they are suspected of cheating to claim PEP hours.</Text>
                    </Content >
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
