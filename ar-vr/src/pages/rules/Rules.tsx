import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';
import SafeArea from '../../components/SafeArea';
import grid from '../../resources/greenGrid.svg';

import { appUrl } from '../../App';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${mainHex};
    padding: 60px 20px 70px 20px;
    // height: calc(100vh - 80px);
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: url(${grid});
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-top: 15px;
`;

const ButtonMain = styled.div`
    padding: 10px 18px;
    display: flex;
    flex-direction: column;
    background-color: ${mainHex};
    color: #ffffff;
    border: 1px solid ${mainHex};
    margin: 10px 5px 10px 20px;
    border-radius: 5px;

    @media only screen and (max-width: 425px) {
        margin: 10px 0px;
    }
`;


export const bttnLinkStyle = {
	textDecoration: "none",
    color: "#ffffff",
};

export const Bullet = styled.li`
    ${margin}
    color: #3a3a3a;
    font-size: calc(12px + 1vmin);
    line-height: 1.2em;

    @media only screen and (max-width: 1024px) {
        font-size: calc(11px + 1vmin);
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



function Home() {
    return (
        <Page id="rules">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Rules</Title>
                        <Text>There are very few rules for this game. Always abide by them to ensure others can also have a great time. </Text>
                        <Bullet>Never share the location of a poster with any other competitor</Bullet>
                        <Bullet>Do not damage the posters</Bullet>
                        <Bullet>Do not go into any areas that are usually restricted for students</Bullet>
                        <Text>Once you have logged in, via Google, points can be awarded for each marker you scan. You can always check the number of points you have by pressing the yellow button in the AR App. More points are awarded earlier in the competition than later, so get hunting right away.</Text>
                        <ButtonGroup>
                            <ButtonMain>
                                <a href={appUrl} style={bttnLinkStyle}>Get started</a>
                            </ButtonMain>
                        </ButtonGroup>
                    </Content>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
