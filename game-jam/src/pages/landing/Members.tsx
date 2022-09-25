import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import placeholder from '../../resources/profilePlaceholder.svg';

import riley from '../../resources/riley.png';
import udit from '../../resources/profilePlaceholder.svg';
import ivan from '../../resources/ivan.png';
import justin from '../../resources/justin.png';



import email from '../../resources/gameJamEmail.svg';
import SafeArea, { RowContainer } from '../../components/SafeArea';
import { Link, Route, Routes } from 'react-router-dom';

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
        height: calc(100vh - 80px);
    } 

    @media only screen and (max-width: 425px) {
        padding: 5px;
    } 
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // width: 50%;

    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: ${mainHex}
    ${margin}

    @media only screen and (max-width: 1024px) {
        font-size: calc(32px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(30px + 1vmin);
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
    fontSize: "calc(12px + 1vmin)",
    fontWeight: "500",
    color: "#3a3a3a",
};

export const imageLinkStyle = {
	marginTop: "-15%",
};

const Image = styled.img`
    margin: 0;

    @media only screen and (max-width: 1024px) {
        width: 400px;  
    }

    @media only screen and (max-width: 525px) {
        width: 360px;  
    }
    
    @media only screen and (max-width: 435px) {
        width: 100%;
    }
`;

const ImageEmail = styled.img`
    margin: 0;

    @media only screen and (max-width: 1024px) {
        width: 400px;  
    }

    @media only screen and (max-width: 525px) {
        width: 360px;  
    }
    
    @media only screen and (max-width: 435px) {
        width: 100%;
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
                        <Title>Game Jam Team</Title>
                </Content>
                <Container>
                    {/* {memberItems.map(menuItem => { 
                        return (
                            <Content>
                                <Image src={placeholder}/>  
                                <Link to={menuItem.link ? menuItem.link : ""} style={imageLinkStyle}>
                                    <ImageEmail src={email} />    
                                </Link>
                                <Link to={menuItem.link ? menuItem.link : ""} style={menuLinkStyle}>
                                        {menuItem.text}     
                                </Link>
                            </Content>)
                    })} */}

                    <Content>
                        <Image src={riley}/>
                        <a style={imageLinkStyle} href="mailto:rjon6734@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Riley Jones</p>
                    </Content>
                    <Content>
                        <Image src={udit}/>
                        <a style={imageLinkStyle} href="mailto:usam6049@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Udit Samant</p>
                    </Content>
                    <Content>
                        <Image src={ivan}/>
                        <a style={imageLinkStyle} href="mailto:yyeh7345@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Ivan Yeh</p>
                    </Content>
                    <Content>
                        <Image src={justin}/>
                        <a style={imageLinkStyle} href="mailto:jkwo3287@uni.sydney.edu.au">
                            <ImageEmail src={email} />
                        </a>
                        <p style={menuLinkStyle}>Justin Oliver Kwon</p>
                    </Content>
                </Container>    
            </SafeArea>
        </Section>
    );
}

export default Home;