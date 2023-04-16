import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import riley from '../../resources/riley.png';
import antriksh from '../../resources/antriksh.png';
import sabaat from '../../resources/syed.png';

import email from '../../resources/email.svg';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const Section = styled.div`
    color: ${mainHex};
    padding: 80px 20px;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
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
    justify-content: space-around;

    @media only screen and (max-width: 425px) {
        flex-direction: column;
    } 
 
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 5px;
        justify-content: flex-start;
    } 

    @media only screen and (max-width: 425px) {
        margin: 10px 0;
    } 
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: ${mainHex}
    ${margin}

    @media only screen and (max-width: 1024px) {
        font-size: calc(25px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(25px + 1vmin);
    } 

    @media only screen and (max-width: 268px) {
        font-size: calc(26px + 1vmin);
    }
`;

export const Text = styled.p`
    ${margin}
    font-size: calc(12px + 1vmin);
    font-weight: 500;
    color: #3a3a3a;

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

export const menuLinkStyle = {
	padding: "10px 5px",
	margin: "5px",
	borderRadius: "3px",
	textDecoration: "none",
    fontSize: "calc(10px + 1vmin)",
    fontWeight: "500",
    color: "#3a3a3a",
};

export const imageLinkStyle = {
	// marginTop: "-15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const Image = styled.img`
    margin: 0;
    width: 200px;

    @media only screen and (max-width: 1024px) {
        width: 160px;
    }

    @media only screen and (max-width: 768px) {
        width: 120px;
    }
    
    @media only screen and (max-width: 425px) {
        width: 50%;
    }
`;

const ImageEmail = styled.img`
    margin: 0;
    margin-top:-65%;

    @media only screen and (max-width: 1024px) {
        width: 80%;  
        margin-top:-55%;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55%;  
        margin-top:-35%;
    }

    @media only screen and (max-width: 425px) {
        width: 90%;
        margin-top:-45%;
    }
`;


const memberItems = [
    {text: "Riley Jones"},
    {text: "Udit Samant"},
    {text: "Ivan Yeh"},
    {text: "Justin Kwon"},
]

function Home() {
    return (
        <Section>
            <SafeArea>
                <Content>
                        <Title>The Team</Title>
                </Content>
                <Container>
                    <Content>
                        <Image src={riley}/>
                        <a style={imageLinkStyle} href="mailto:rjon6734@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Riley Jones</p>
                    </Content>
                    <Content>
                        <Image src={antriksh}/>
                        <a style={imageLinkStyle} href="mailto:usam6049@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Antriksh Dhand</p>
                    </Content>
                    <Content>
                        <Image src={sabaat}/>
                        <a style={imageLinkStyle} href="mailto:yyeh7345@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Syed Ahmed Sabaat</p>
                    </Content>
                </Container>    
            </SafeArea>
        </Section>
    );
}

export default Home;