import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import placeholder from '../../resources/gamePlaceholder.png';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${mainHex};
    padding: 100px 0;
    height: auto;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;

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
    align-items: center;
    overflow: hidden;
`;

export const Title = styled.h1`
    font-size: calc(40px + 1vmin);
    color: ${mainHex};
    ${margin}

    @media only screen and (max-width: 1024px) {
        font-size: calc(25px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(30px + 1vmin);
    } 

    @media only screen and (max-width: 425px) {
        font-size: calc(20px + 1vmin);
    } 
`;

export const GameContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
    gap: 2%;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    } 

    @media only screen and (max-width: 425px) {
        grid-template-columns: 1fr;
    } 
`;

export const GameIndividual = styled.div`
    box-shadow: 1px 3.97px 3.97px 0 rgb(84,84,84,0.15);
    padding: 0.5em;
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

export const GameImage = styled.img`
    width: 100%;
    height: 45%;
`;

export const GameText = styled.p`
    font-size: calc(10px + 1vmin);
    font-weight: 200;
    margin:0;
    padding:0;
    color: #000000;
    line-height: 1.5em;

    @media only screen and (max-width: 425px) {
        font-size: calc(12px + 1vmin);
    }
`;

export const GameTitle = styled.p`
    color: ${mainHex};
    font-size: calc(18px + 1vmin);
    font-weight: 500;
    margin:10px 0;
    padding:0;

    @media only screen and (max-width: 425px) {
        font-size: calc(20px + 1vmin);
    }
`;

export const GameLine = styled.hr`
    border-top: 0.5px solid ${mainHex};
    width: 100%;
    border-color: ${mainHex};
`;


function Header() {
    return (
        <Page>
            <SafeArea>
                <Container>
                    <GameContainer>
                        <GameIndividual>
                            <Content>
                                <GameImage src={placeholder}/>
                                <GameTitle>Game Jam</GameTitle>
                                <GameText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor et arcu ut luctus.</GameText>
                                <GameLine></GameLine>
                                <GameText>Team Name</GameText>
                            </Content>
                        </GameIndividual>
                    </GameContainer>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Header;
