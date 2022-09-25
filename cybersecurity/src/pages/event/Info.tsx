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

    @media only screen and (max-width: 768px) {
        height: calc(100vh - 80px);
    } 

    @media only screen and (max-width: 425px) {
        padding: 5px;
    } 
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 25px 0;

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
    margin: 0 30px;

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
        <Page id="about">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Introduction</Title>
                        <Text>Capture the Flag is a cyber security exercise consisting of multiple puzzles/challenges. For those that have never heard of it, read more here. Detailed rules and info will be on the Rules page.</Text>
                        <ButtonGroup>
                            <ButtonMain>Register now</ButtonMain>
                        </ButtonGroup>
                    </Content>
                    <Content>
                        <Image src={placeholder} />
                    </Content>
                </Container>
                <Container>
                    <Content>
                        <Image src={cta} />
                    </Content>
                    <Content>
                        <Text>Each puzzle has a flag hidden somewhere and the challenge is to find the flag. The flag usually is a sequence of alphanumeric characters. Once you find a flag you get some points. The objective is the find as many flags as possible and collects points in the shortest time possible.</Text>
                        <Text>The following will be an example problem demonstrating how to solve and submit a problem:</Text>
                        <ButtonGroup>
                            <ButtonMain>Download</ButtonMain>
                        </ButtonGroup>
                    </Content>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
