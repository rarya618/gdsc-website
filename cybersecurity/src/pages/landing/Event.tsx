import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import social from '../../resources/ctaSocial.png';
import SafeArea, { RowContainer } from '../../components/SafeArea';

import { Link, Route, Routes } from 'react-router-dom';

const margin = "margin: 8px 10px;";

const Section = styled.div`
    color: #ffffff;
    padding: 120px 20px;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${mainHex};
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
    width: 50%;

    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

const ButtonGroup = styled.div`
    display: flex;
`;

const buttonStyle = `
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ffffff;
    margin: 10px 5px 10px 10px;
    border-radius: 3px;
`;

const ButtonMain = styled.div`
    ${buttonStyle}
    background-color: ${mainHex};
    color: #ffffff;
`;

const ButtonAlt = styled.div`
    ${buttonStyle}
    background-color: #ffffff;
    color: ${mainHex};
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: #ffffff;
    ${margin}

    @media only screen and (max-width: 1024px) {
        font-size: calc(32px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(30px + 1vmin);
    } 

    @media only screen and (max-width: 268px) {
        font-size: calc(26px + 1vmin);
    }
`;

export const Text = styled.p`
    ${margin}
    margin-bottom: 15px;
    font-size: calc(10px + 1vmin);
    line-height: 2em;


    @media only screen and (max-width: 1024px) {
        font-size: calc(15px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
    }

    @media only screen and (max-width: 268px) {
        font-size: calc(14px + 1vmin);
    }
`;


const Image = styled.img`
    // width: 450px;
    margin-right: 5%;

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

export const bttnLinkStyle = {
	textDecoration: "none",
    color: "#ffffff",
};

export const bttnLinkStyleAlt = {
	textDecoration: "none",
    color: "#34A853",
};

function EventContainer() {
    return (
        <Section>
            <SafeArea>
                <RowContainer>
                    <Content>
                        <Image src={social} />
                    </Content>
                    <Content>
                        <Title>Capture the Flag!</Title>
                        <Text>Capture The Flag is a cyber security exercise consisting of multiple puzzles/challenges. Each puzzle has a flag hidden somewhere and the challenge is to find the flag.</Text>
                        <ButtonGroup>
                            <ButtonMain><Link to="/event" style={bttnLinkStyle}>Learn More</Link></ButtonMain>
                            <ButtonAlt><a href="https://profile.gdscusyd.org/sign-in" style={bttnLinkStyleAlt} target="blank">Register</a></ButtonAlt>
                        </ButtonGroup>
                    </Content>
                </RowContainer>
            </SafeArea>
        </Section>
    );
}

export default EventContainer;