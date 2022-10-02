import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import victor from '../../resources/victor.png';
import rushil from '../../resources/rushil.png';
import syed from '../../resources/syed.png';
import darsh from '../../resources/darsh.png';

import email from '../../resources/ctfemail.svg';
import SafeArea, { RowContainer } from '../../components/SafeArea';
import { Link, Route, Routes } from 'react-router-dom';

const margin = "margin: 10px 20px;";

const Section = styled.div`
    color: ${mainHex};
    padding: 40px 20px 80px 20px;
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
    justify-content: space-between;

    @media only screen and (max-width: 425px) {
        flex-direction: column;
    } 
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // width: 50%;

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
    font-size: calc(15px + 1vmin);
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const Image = styled.img`
    margin: 0;

    @ @media only screen and (max-width: 1024px) {
        width: 80%;  
    }

    @media only screen and (max-width: 768px) {
        width: 75%;  
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
    {text: "Victor Li"},
    {text: "Rushil Petrus"},
    {text: "Syed Ahmad Sabaat"},
    {text: "Darsh Chaudhari"},
]





function Home() {
    return (
        <Section id="team">
            <SafeArea>
                <Content>
                        <Title>The Team</Title>
                </Content>
                <Container>
                <Content>
                        <Image src={victor}/>
                        <a style={imageLinkStyle} href="mailto:vili8422@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Victor Li</p>
                    </Content>
                    <Content>
                        <Image src={rushil}/>
                        <a style={imageLinkStyle} href="mailto:rpet2272@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Rushil Petrus</p>
                    </Content>
                    <Content>
                        <Image src={syed}/>
                        <a style={imageLinkStyle} href="mailto:ssab4400@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Syed Ahmad Sabaat</p>
                    </Content>
                    <Content>
                        <Image src={darsh}/>
                        <a style={imageLinkStyle} href="mailto:dcha5612@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Darsh Chaudhari</p>
                    </Content>
                </Container>
                
            </SafeArea>
        </Section>
    );
}

export default Home;