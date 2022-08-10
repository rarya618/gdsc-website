import React from 'react';
import styled from 'styled-components';
import { whiteHex } from './colors';

import background from './resources/footer.png';
import logo from './resources/footer-logo.png';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${whiteHex};
    background: url(${background});
    background-size: cover;
    padding: 50px 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: top;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Content = styled.div`
    padding: 10px;
    width: 26%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: calc(28px + 1vmin);
    ${margin}
`;

export const Text = styled.p`
    ${margin}
    font-size: calc(18px + 1vmin);
`;

const Image = styled.img`
    margin: 25px;
    height: 40px;
`;

const Spacer = styled.div`
    height: 120px;
`;

const footerContent = [
    {
        title: "Quick links",
        content: [
            {text: "AI/ML"},
            {text: "Cybersecurity"},
            {text: "Game Jam"},
            {text: "Design Month"},
        ]
    },
    {
        title: "Resources",
        content: [
            {text: "GDSC Page"},
            {text: "Club Charter"},
        ]
    },
    {
        title: "Club",
        content: [
            {text: "Partner with us"},
            {text: "Who are we?"},
            {text: "Join the exec"},
        ]
    },
]

function Footer() {
    return (
        <Page>
            <Container>
            {footerContent.map(column => {
                return (
                <Content>
                    <Title>{column.title}</Title>
                    {column.content.map(item => {
                        return <Text>{item.text}</Text>
                    })}
                </Content>
                )
            })}
            </Container>
            <Spacer />
            <Container>
                <Image src={logo} />
            </Container>
        </Page>
    );
}

export default Footer;