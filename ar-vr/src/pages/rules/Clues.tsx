import React from 'react';
import styled from 'styled-components';
import { appUrl } from '../../App';
import { mainHex, greenLightHex } from '../../colors';

import SafeArea, { RowContainer } from '../../components/SafeArea';
import { bttnLinkStyle } from './Rules';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${mainHex};
    padding: 70px 20px 80px 20px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;

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
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: ${mainHex};
    ${margin}
    text-align: left;

    @media only screen and (max-width: 1024px) {
        font-size: calc(25px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(25px + 1vmin);
    } 

    @media only screen and (max-width: 425px) {
        font-size: calc(20px + 1vmin);
    } 
`;

export const Text = styled.p`
    ${margin}
    color: #3a3a3a;
    font-size: calc(12px + 1vmin);
    line-height: 1.8em;
    text-align: left;

    @media only screen and (max-width: 1024px) {
        font-size: calc(12px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
    }

    @media only screen and (max-width: 425px) {
        margin: 0 0 15px 0;
        font-size: calc(10px + 1vmin);
    }
`;


const ButtonGroup = styled.div`
    display: flex;
    margin-top: 15px;
`;

const ButtonMain = styled.div`
    padding: 10px 18px;
    display: flex;
    flex-direction: column;
    background-color: ${mainHex};
    color: #ffffff;
    border: 1px solid ${mainHex};
    margin: 10px 5px 10px 20px;
    border-radius: 5px;

    @media only screen and (max-width: 425px) {
        margin: 10px 0px;
    }
`;

const Bullet = styled.li`
   ${margin}
    color: #3a3a3a;
    font-size: calc(12px + 1vmin);
    line-height: 1.6em;
    text-align: left;

    @media only screen and (max-width: 1024px) {
        font-size: calc(12px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
    }

    @media only screen and (max-width: 425px) {
        margin: 0 0 15px 0;
        font-size: calc(10px + 1vmin);
    }
`;

function Home() {
    return (
        <Page id="tips">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Tips</Title>
                        <Text>There are some general clues that may help when searching for the markers around campus:</Text>
                        <Bullet>The majority of posters are with the Engineering, Computer Science, and business side of the university, while few are throughout the rest of campus</Bullet>
                        <Bullet>Posters are not hidden in obscure and hard-to-spot locations (e.g. inside a bin)</Bullet>
                        <Bullet>If the clue leads you to a building, check around the entrance for the poster (It’s not always possible to place the poster inside).</Bullet>
                        <Bullet>Each poster has a clue for its location, you can find them in any order you like.</Bullet>
                        <ButtonGroup>
                            <ButtonMain>
                                <a href={appUrl} style={bttnLinkStyle}>Get started</a>
                            </ButtonMain>
                        </ButtonGroup>
                    </Content>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
