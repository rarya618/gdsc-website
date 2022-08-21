import React from 'react';
import styled from 'styled-components';
import { blueHex, whiteHex } from './colors';

import background from './resources/footer.png';
import logo from './resources/footer-logo.png';

// social symbols
import gdscLogo from './resources/GDSC-logo.svg';
import facebookLogo from './resources/Facebook-logo.svg';
import instagramLogo from './resources/Instagram-logo.svg';
import linkedInLogo from './resources/Linkedin-logo.svg';
import emailLogo from './resources/Email-logo.svg';
import discordLogo from './resources/Discord-logo.svg';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${whiteHex};
    // background: url(${background});
    background: ${blueHex};
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
    justify-content: space-between;
`;

const Content = styled.div`
    padding: 10px;
    width: 26%;
    display: flex;
    flex-direction: column;
`;

const Line = styled.div`
    margin: 15px;
    width: 99%;
    height: 0.05em;
    background-color: ${whiteHex}; 
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
    height: 35px;
`;

const Spacer = styled.div`
    height: 120px;
`;

const socialWidth = 40;

const Social = styled.img`
    height: ${socialWidth}px;
    width: ${socialWidth}px;
    margin: 18px 16px;
`;

const socialList = [
    {name: "Email", icon: emailLogo, link: "mailto:gdsc.usyd@gmail.com"},
    {name: "GDSC Page", icon: gdscLogo, link: "https://gdsc.community.dev/the-university-of-sydney/"},
    {name: "Facebook Page", icon: facebookLogo, link: "https://fb.me/gdsc.usyd"},
    {name: "Instagram Page", icon: instagramLogo, link: "https://www.instagram.com/gdscusyd"},
    {name: "LinkedIn Page", icon: linkedInLogo, link: "https://linkedin.com/company/gdsc-usyd"},
    {name: "Discord Page", icon: discordLogo, link: "https://discord.gg/3xswfeUb"},
];

const footerContent = [
    {
        title: "Quick links",
        content: [
            {text: "Study Groups"},
            {text: "GDSC Page"},
        ]
    },
    {
        title: "Events",
        content: [
            {text: "AI/ML"},
            {text: "Cybersecurity"},
            {text: "Game Jam"},
            {text: "Design Month"},
        ]
    },
    {
        title: "Club",
        content: [
            {text: "Partner with us"},
            {text: "Who are we?"},
            {text: "Join the exec"},
            {text: "Club Charter"},
        ]
    },
]

function Footer() {
    return (
        <Page>
            {/* <Container>
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
            </Container> */}
            {/* <Spacer /> */}
            <Container>
                <Image src={logo} />
                <Container>
                    {socialList.map(social => {
                        if (social.link) {
                            return <a href={social.link}><Social className="btn-hoverable" src={social.icon} title={social.name} alt={social.name} /></a>
                        }
                        return <Social className="btn-hoverable" src={social.icon} title={social.name} alt={social.name} />
                    })}
                </Container>
            </Container>
            <Line></Line>
        </Page>
    );
}

export default Footer;