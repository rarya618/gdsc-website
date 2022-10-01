import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import placeholder from '../../resources/placeholder.png';
import edge from '../../resources/game-one.gif';
import pacman from '../../resources/game-two.gif';
import SafeArea, { RowContainer } from '../../components/SafeArea';

import { HashLink } from 'react-router-hash-link';


const margin = "margin: 10px 20px;";



const Page = styled.div`
    color: ${mainHex};
    padding: 70px 0;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: 1024px) {
        height: auto;
        padding: 100px 0;
    } 

    @media only screen and (max-width: 768px) {
        height: auto;
        padding: 50px 0;
    } 

    @media only screen and (max-width: 425px) {
        height: auto;
        padding: 25px 0;
    } 
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    } 
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 25px 0;

    @media only screen and (max-width: 768px) {
        padding: 5px;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;


const ButtonGroup = styled.div`
    display: flex;
`;

const ButtonMain = styled.div`
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    background-color: ${mainHex};
    color: #ffffff;
    border: 1px solid ${mainHex};
    margin: 10px 5px 10px 20px;
    border-radius: 3px;
`;

const ButtonAlt = styled.div`
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    color: ${mainHex};
    border: 1px solid ${mainHex};
    margin: 10px 5px 10px 10px;
    border-radius: 3px;
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: ${mainHex};
    ${margin}

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
    line-height: 1.5em;

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


const Image = styled.img`
    margin: 0 30px;

    @media only screen and (max-width: 1024px) {
        width: 400px;  
    }

    @media only screen and (max-width: 525px) {
        width: 100%;  
    }
    
    @media only screen and (max-width: 435px) {
        width: 100%;
    }
`;

export const bttnLinkStyle = {
	textDecoration: "none",
    color: "#EA4335",
};

export const bttnLinkStyleAlt = {
	textDecoration: "none",
    color: "#ffffff",
};

function Home() {
    return (
        <Page id="about">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Introduction</Title>
                        <Text>Welcome to The Google Student Developer Game Jam event. Learning programming at university at times can be quite bleak. Most assignments aren’t creative and definitely aren’t something you can show off as a project of your own. You have the basics of python and OOP down, but where do you start in learning how to make an actual application? </Text>
                    </Content>
                    <Content>
                        <Image src={edge} />
                    </Content>
                </Container>
                <Container>
                    <Content>
                        <Image src={pacman} />
                    </Content>
                    <Content>
                        <Text>Over the course of the mid sem break, we will be taking you through how to build a game from scratch using python. We’ll have three workshops <strong>at Google headquarters</strong> to teach you the basics that will recap or help you learn python, teach you game design, and help you understand how we will be programming a game using pygame.</Text>
                        <ButtonGroup>
                            <ButtonMain><a href="https://profile.gdscusyd.org/sign-in" style={bttnLinkStyleAlt} target="blank">Register</a></ButtonMain>
                            <ButtonAlt><HashLink to="/event/#timeline" style={bttnLinkStyle}>Timeline</HashLink></ButtonAlt>
                        </ButtonGroup>
                    </Content>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
