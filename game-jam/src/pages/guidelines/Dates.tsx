import React from 'react';
import styled from 'styled-components';
import { mainHex, redLightHex } from '../../colors';
import SafeArea, { RowContainer } from '../../components/SafeArea';
import grid from '../../resources/redGrid.png';


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
    line-height: 1.8em;

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


function Home() {
    return (
        <Page>
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Dates and Duration</Title>
                        <Text>The Game Jam Event (competition) will run from Friday, 30th September 10 AM until 5 PM Sunday. You will have 55h to code. You may prepare for the event beforehand, brainstorming basic ideas and researching different options for games (PVP, platformers, paddle games, etc). However, you are not allowed to start coding until 10 AM Friday. The Game Jam competition will have a theme that will be given to you on Friday to mark the start of the Competition. </Text>
                        <ButtonGroup>
                            <ButtonMain>
                                View Timeline
                            </ButtonMain>
                        </ButtonGroup>
                    </Content>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
