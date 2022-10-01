import React from 'react';
import styled from 'styled-components';
import { mainHex, redLightHex } from '../../colors';
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
    background-color: ${redLightHex};

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
        <Page id="register">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Registration</Title>
                        <Text>You’ll be working in teams of 1 - 4 for the Game Jam. Each member of your group will have to signup using the individual registration portal on the GDSC USYD Community Website. Following the individual registration of all members, one member of the team will be tasked with registering the team (and its members) on this website. Please note that this user will be linked to the team registration. If you need to add or remove team members you can do so by following the team registration. However, please contact us should you wish to do so. </Text>
                        <ButtonGroup>
                            <ButtonMain id="setup">
                                <a href="https://profile.gdscusyd.org/sign-in" style={bttnLinkStyleAlt} target="blank">Register</a>
                            </ButtonMain>
                        </ButtonGroup>
                    </Content >
                    <Space/>
                    <Content >
                        <Title>Setup</Title>
                        <Text>After registering for the event your team will be allocated a page on the website which you can customise and populate with information regarding the game your team will be presenting. Now that your team has completed registration you are all set for the Game Jam. The last thing would be to join our GDSC Discord Page and add yourself to the Game Jam Role. </Text>
                        <ButtonGroup>
                            <ButtonMain>
                                <a href="https://discord.gg/H566km5k" style={linkStyle}>
                                    Join Discord
                                </a>
                            </ButtonMain>
                        </ButtonGroup>
                    </Content>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
