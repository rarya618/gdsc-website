import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import placeholder from '../../resources/header-graphic.svg';
import grid from '../../resources/greenGrid.svg';
import SafeArea, { RowContainer } from '../../components/SafeArea';


import { Link, Route, Routes } from 'react-router-dom';

const margin = "margin: 10px 20px;";

const Section = styled.div`
    color: ${mainHex};
    padding: 0 20px;
    height: calc(100vh - 145px);
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
    margin: 10px 5px 10px 20px;
    border-radius: 3px;
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: ${mainHex};
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
    color: #3a3a3a;
    font-size: calc(12px + 1vmin);
    line-height: 1.5em;

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

export const bttnLinkStyle = {
	textDecoration: "none",
    color: "#ffffff",
};

export const bttnLinkStyleAlt = {
	textDecoration: "none",
    color: "#34A853",
};

function About() {
    return (
        <Section>
            <SafeArea>
                <RowContainer>
                    <Content>
                        <Title>Cybersecurity @ GDSC USYD</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu augue, vulputate quis arcu et, euismod molestie augue. Sed tempor et arcu ut luctus.</Text>
                        <ButtonGroup>
                            <ButtonMain><Link to="/event" style={bttnLinkStyle}>Learn More</Link></ButtonMain>
                            <ButtonAlt><a href="https://profile.gdscusyd.org/sign-in" style={bttnLinkStyleAlt} target="blank">Register</a></ButtonAlt>
                        </ButtonGroup>
                    </Content>
                    <Content>
                        <Image src={placeholder} />
                    </Content>
                </RowContainer>
            </SafeArea>
        </Section>
    );
}

export default About;
