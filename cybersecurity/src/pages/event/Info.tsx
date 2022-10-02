import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import placeholder from '../../resources/cta-one.gif';
import cta from '../../resources/cta-two.png';

import SafeArea, { RowContainer } from '../../components/SafeArea';

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
    margin: 10px 5px 10px 20px;
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

function Home() {
    return (
        <Page id="about">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Introduction</Title>
                        <Text>Capture the Flag is a cyber security exercise consisting of multiple puzzles/challenges. For those that have never heard of it, read more here. Detailed rules and info will be on the Rules page.</Text>
                       
                    </Content>
                    <Content>
                        <Image src={placeholder}/>
                    </Content>
                </Container>
                <Container>
                    <Content>
                        <Image src={cta} />
                    </Content>
                    <Content>
                        <Text>Each puzzle has a flag hidden somewhere and the challenge is to find the flag. The flag usually is a sequence of alphanumeric characters. Once you find a flag you get some points. The objective is the find as many flags as possible and collects points in the shortest time possible.</Text>
                        <ButtonGroup>
                            <ButtonMain>Register now</ButtonMain>
                        </ButtonGroup>
                    </Content>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
