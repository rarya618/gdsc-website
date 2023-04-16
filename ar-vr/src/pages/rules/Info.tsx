import React from 'react';
import styled from 'styled-components';
import { appUrl } from '../../App';
import { mainHex, greenLightHex } from '../../colors';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const space = "height: 25px";

const Page = styled.div`
    color: ${mainHex};
    padding: 60px 20px;
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
        <Page id="info">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Info</Title>
                        <Text>You’ll be competing individually to find all the GDSC posters/markers around the campus,  meeting all the Disney characters that have made their way to USYD. You can then scan the center marker with your phone, and rack up points 💥. </Text>
                            
                        <Text>The competition is running during <b>week 8, 17th - 21st of April</b> ⏰. During any of this time, you can go out into the campus and collect points. </Text>
                        <ButtonGroup>
                            <ButtonMain id="setup">
                                <a href={appUrl} style={bttnLinkStyleAlt} target="blank">Get started</a>
                            </ButtonMain>
                        </ButtonGroup>
                    </Content>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
