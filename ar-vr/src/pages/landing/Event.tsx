import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import eventImage from '../../resources/eventMain.png';
import SafeArea, { RowContainer } from '../../components/SafeArea';

import { Link, Route, Routes } from 'react-router-dom';

const margin = "margin: 10px 20px;";

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
        height: auto;
        padding: 75px 0;
    } 

    @media only screen and (max-width: 425px) {
        height: auto;
        padding: 50px 0;
    } 
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 50%;

    @media only screen and (max-width: 1024px) {
        padding: 5px;
        width:auto;
    } 

    @media only screen and (max-width: 768px) {
        padding: 5px;
        width:100%;
        justify-content: center;
        align-items: center;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

const ButtonGroup = styled.div`
    display: flex;
    margin: 0 10px;

    @media only screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    } 
`;

const buttonStyle = `
    padding: 10px 18px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ffffff;
    margin: 10px 5px 10px 10px;
    border-radius: 5px;
`;

export const bttnLinkStyle = {
	textDecoration: "none",
    color: mainHex,
};

const ButtonMain = styled.div`
    ${buttonStyle}
    background-color: ${mainHex};
    color: #ffffff;

    @media only screen and (max-width: 1024px) {
        margin: 10px 5px 10px 5px;
    }

    @media only screen and (max-width: 425px) {
        font-size: calc(8px + 1vmin);
        padding: 8px 12px;

    } 
`;

const ButtonAlt = styled.div`
    ${buttonStyle}
    background-color: #ffffff;
    color: ${mainHex};

    @media only screen and (max-width: 1024px) {
        margin: 10px 5px 10px 5px;
    }

    @media only screen and (max-width: 425px) {
        font-size: calc(8px + 1vmin);
        padding: 8px 12px;

    } 
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: #ffffff;
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
    margin-bottom: 15px;
    font-size: calc(10px + 1vmin);
    line-height: 2em;


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
    // width: 450px;
    margin-right: 5%;
    border-radius: 5px;

    @media only screen and (max-width: 1024px) {
        display: none; 
    }

    @media only screen and (max-width: 768px) {
        width: 100%;  
    }

    @media only screen and (max-width: 525px) {
        width: 360px;  
    }
    
    @media only screen and (max-width: 435px) {
        width: 100%;
    }
`;

export const bttnLinkStyleAlt = {
	textDecoration: "none",
    color: "#ffffff",
};

function Home() {
    return (
        <Section>
            <SafeArea>
                <RowContainer>
                    <Content>
                        <Image src={eventImage} />
                    </Content>
                    <Content>
                        <Title>Scavenger Hunt Week</Title>
                        <Text>Students will go around the campus following clues and finding designated markers. These markers can be scanned with their phones and using an online AR website images will appear in the footage. Once the marker is found, it will be recorded, so that the students can progress towards collecting the most number of markers.</Text>
                        <ButtonGroup>
                            <ButtonAlt><Link to="/event" style={bttnLinkStyle}>Learn More</Link></ButtonAlt>
                            <ButtonMain><a href="https://competitions.gdscusyd.org/" style={bttnLinkStyleAlt} target="blank">Register</a></ButtonMain>
                        </ButtonGroup>
                    </Content>
                </RowContainer>
            </SafeArea>
        </Section>
    );
}

export default Home;