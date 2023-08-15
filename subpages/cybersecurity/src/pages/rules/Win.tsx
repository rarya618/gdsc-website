import React from 'react';
import styled from 'styled-components';
import { mainHex, greenLightHex } from '../../colors';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const space = "height: 25px";

const Page = styled.div`
    color: ${mainHex};
    padding: 100px 20px;
    // height: calc(100vh - 80px);
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${greenLightHex};

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

const Space = styled.div`
    ${space}
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;

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
    color: ${mainHex};
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

    @media only screen and (max-width: 425px) {
        margin: 10px 0px;
    }
`;

export const linkStyle = {
    color: "#ffffff",
	textDecoration: "none",
};

export const bttnLinkStyleAlt = {
	textDecoration: "none",
    color: "#ffffff",
};


function Home() {
    return (
        <Page id="win">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>How to win</Title>
                        <Text>
                            <ul>
                                <li>
                                To win the competition, there are two metrics:
                                    <ul>
                                        <li>the number of problems solved, and</li>
                                        <li>a tiebreaker of penalty time.</li>
                                    </ul>
                                </li>
                                <li>
                                To solve a problem, you need to:
                                    <ul>
                                        <li>download the files,</li>
                                        <li>try to maintain the flag, and</li>
                                        <li>submit the flag on the website,</li>
                                    </ul>
                                    If the flag is correct you move to the next question!
                                </li>
                                <li>
                                Time is measured through two metrics,
                                    <ul>
                                        <li>the time it takes you to submit a correct flag, and</li>
                                        <li>for every incorrect flag submission, you will receive an extra 30 mins penalty time for that problem.</li>
                                    </ul>
                                </li>
                                <li>
                                At the end of the competition, the penalty time for incomplete problems is reset to 0. Your time will then be added up, and the most correct answers in the lowest time wins!
                                </li>
                            </ul>
                        </Text>
                    </Content >
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
