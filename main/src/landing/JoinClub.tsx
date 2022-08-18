import React from 'react';
import styled from 'styled-components';
import { CallToAction } from '../App';
import { blueBackground, blueHex } from '../colors';

import placeholder from '../resources/placeholder-300.png';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${blueHex};
    background: ${blueBackground};
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: calc(40px + 1vmin);
    ${margin}
`;

export const Text = styled.p`
    ${margin}
    font-size: calc(18px + 1vmin);
`;

const Image = styled.img`
    width: 400px;
`;

const CtAContainer = styled.div`
    padding: 30px 8px;
`;

function JoinClub() {
    return (
        <Page>
            <Content>
                <Title>Join the club today!</Title>
                <Text>Join in for our social events, competitions, and community programs today!</Text>
                <CtAContainer>
                    <CallToAction className="btn-hoverable" href="https://gdsc.community.dev/accounts/login/?next=/the-university-of-sydney/">Join us</CallToAction>
                </CtAContainer>
            </Content>
            <Content>
                <Image src={placeholder} />
            </Content>
        </Page>
    );
}

export default JoinClub;
