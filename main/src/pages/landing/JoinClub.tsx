import React from 'react';
import styled from 'styled-components';
import { CallToAction } from '../../App';
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
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: calc(30px + 1vmin);
    ${margin}
`;

export const Text = styled.p`
    ${margin}
    font-size: calc(16px + 1vmin);
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
                        <Text>For access to our current and upcoming events, and programs!</Text>
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
