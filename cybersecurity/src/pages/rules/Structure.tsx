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
        <Page id="structure">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Structure of the game</Title>
                        <Text>
                            <ul>
                                <li>There are 8 problems for you to solve.</li>
                                <li>
                                Participants are to find a string of flags in the following format:
                                    <ul>
                                        <li>FLAG: gdsc</li>
                                        <li>flaggdsc</li>
                                    </ul>
                                </li>
                                <li>The competition starts on the Monday of Week 9 at 9 am.</li>
                                <li>The competition runs for 6 days and all submissions close at Sunday 9 am.</li>
                                <li>There is going to be a closing ceremony and announcement of prizes and winners.</li>
                                <li>We will have multiple workshops during the week.</li>
                            </ul>
                        </Text>
                    </Content >
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
