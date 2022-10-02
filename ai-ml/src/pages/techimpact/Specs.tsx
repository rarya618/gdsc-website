import React from 'react';
import styled from 'styled-components';
import { mainHex, whiteHex } from '../../colors';

import placeholder from '../../resources/Tmeline.svg';

import react from '../../resources/react.svg';
import nodejs from '../../resources/nodejs.svg';
import python from '../../resources/python.svg';
import collab from '../../resources/collab.svg';
import cloud from '../../resources/cloud.svg';
import git from '../../resources/git.svg';

import grid from '../../resources/yellowGrid.png';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${mainHex};
    padding: 100px 20px;
    // height: calc(100vh - 80px);
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

const Container = styled.div`
    display: flex;
    align-content: stretch;
    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

const Content = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    width: 40%;
    margin: 5%;
    background-color: ${whiteHex};
    box-shadow: 1px 3.97px 3.97px 0 rgb(84,84,84,0.15);
    border-radius: 2%;

    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

const Tech = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 5%;
    background-color: ${whiteHex};
    box-shadow: 1px 3.97px 3.97px 0 rgb(84,84,84,0.15);
    border-radius: 2%;
    // align-items:  center;

    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

const TechContent = styled.div`
    padding: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: calc(20px + 1vmin);
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

export const Text = styled.ul`
    ${margin}
    color: #3a3a3a;
    font-size: calc(10px + 1vmin);
    line-height: 2.2em;

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


const TechLogo = styled.img`
    width: 50%;
    margin: 0;
    height: 65%;
`;

const TechTitle = styled.p`
    ${margin}
    color: #3a3a3a;
    font-size: calc(8px + 1vmin);
    line-height: 2.2em;
`;

function Home() {
    return (
        <Page>
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Key Features</Title>
                        <Text>
                            <li>Insights to identify your key conditions of productivity </li>
                            <li>Light and intuitive web interface UI </li>
                            <li>Ability to integrate USYD exam,weekly timetables, social clubs announcements and emails (canvas post) </li>
                            <li>Track and custom design your tasks  </li>
                        </Text>
                    </Content>
                    <Content>
                        <Title>Potential Features</Title>
                        <Text>
                            <li>Quiz creation (inspired from Quizlet) </li>
                            <li>PDF combine/edit tools </li>
                            <li>Summarise/paraphrase tool </li>
                            <li>WAM calculator  </li>
                        </Text>
                    </Content>
                </Container>
                <Container>
                    <Tech>
                        <TechContent>
                            <TechLogo src={react}/>
                            <TechTitle>React</TechTitle>
                        </TechContent>
                        <TechContent>
                            <TechLogo src={nodejs}/>
                            <TechTitle>Node.js</TechTitle>
                        </TechContent>
                        <TechContent>
                            <TechLogo src={python}/>
                            <TechTitle>Python</TechTitle>
                        </TechContent>
                        <TechContent>
                            <TechLogo src={collab}/>
                            <TechTitle>Google Collab</TechTitle>
                        </TechContent>
                        <TechContent>
                            <TechLogo src={cloud}/>
                            <TechTitle>Google Cloud</TechTitle>
                        </TechContent>
                        <TechContent>
                            <TechLogo src={git}/>
                            <TechTitle>Git</TechTitle>
                        </TechContent>
                    </Tech>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
