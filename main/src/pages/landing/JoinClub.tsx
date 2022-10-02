import React from 'react';
import styled from 'styled-components';
import { CallToAction } from '../../components/menu/Menu';
import { blueBackground, blueHex } from '../../colors';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 8px 12px;";

const Page = styled.div`
    color: ${blueHex};
    background: ${blueBackground};
    padding: 50px 20px;
    text-align: centre;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 40px 5px 30px 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 30px 2.5px 25px 2.5px;
    } 
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

`;

export const Title = styled.h1`
    font-size: calc(30px + 1vmin);
    ${margin}

    @media only screen and (max-width: 1024px) {
        font-size: calc(25px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(25px + 1vmin);
    } 

    @media only screen and (max-width: 425px) { 
        font-size: calc(22px + 1vmin);
    } 
`;

export const Text = styled.p`
    ${margin}
    font-size: calc(16px + 1vmin);

    @media only screen and (max-width: 1024px) {
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
        font-size: calc(16px + 1vmin);  
    } 

    @media only screen and (max-width: 425px) {
        font-size: calc(14px + 1vmin);  
    } 
`;

const Image = styled.img`
    width: 400px;
`;

const CtAContainer = styled.div`
    padding: 24px 0px;
`;

function JoinClub() {
    return (
        <Page>
            <SafeArea>
                <RowContainer>
                    <Content>
                        <Title>Join the club today!</Title>
                        <Text>For exclusive access to our amazing events and programs</Text>
                        <CtAContainer>
                            <CallToAction className="btn-hoverable" href="https://gdsc.community.dev/accounts/login/?next=/the-university-of-sydney/">Join us</CallToAction>
                        </CtAContainer>
                    </Content>
                    {/* <Content>
                        <Image src={placeholder} />
                    </Content> */}
                </RowContainer>
            </SafeArea>
        </Page>
    );
}

export default JoinClub;
