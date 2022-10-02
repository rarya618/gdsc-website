import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import placeholder from '../../resources/ctaSocial.png';
import icon from '../../resources/icon.svg';


import grid from '../../resources/greenGrid.svg';
import SafeArea, { RowContainer } from '../../components/SafeArea';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${mainHex};
    padding: 100px 20px 0 20px;
    // height: calc(100vh - 80px);
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: url(${grid});
    background-repeat: repeat;
    background-size: contain;

    @media only screen and (max-width: 768px) {
        height: calc(100vh - 80px);
    } 

    @media only screen and (max-width: 425px) {
        padding: 5px;
    } 
`;

const Content = styled.div`
    padding: 10px;
    display: flex;

    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

const ContentInfo = styled.div`
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const ContentText = styled.div`
    font-size: calc(12px + 1vmin);
    color: #000000;
    text-align: left;
    margin: 10px 0;
    line-height: 1.8em;
`;

const ContentSubtitle = styled.div`
    font-size: calc(12px + 1vmin);
    color: $(mainHex);
    text-align: left;
    margin: 10px 0;
`;

const ContentTitle = styled.div`
    font-size: calc(20px + 1vmin);
    font-weight: bold;
    color: #000000;
    text-align: left;
    margin: 10px 0;
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
    margin: 10px 15px 10px 0;
    border-radius: 3px;
`;

const ButtonAlt = styled.div`
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: ${mainHex};
    color: #ffffff;
    border: 1px solid ${mainHex};
    margin: 10px 15px 10px 0;
    border-radius: 3px;
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: ${mainHex};
    text-align: center;
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
    color: #3a3a3a;
    font-size: calc(12px + 1vmin);
    line-height: 1.5em;

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


const Image = styled.img`
    width: 50%;
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

const Icon = styled.img`
    width: 80%;
    margin: 10%;
`;

export const bttnLinkStyle = {
	textDecoration: "none",
    color: "#ffffff",
};

const eventList = [
    {
        title: "Competition",
        date: "3rd Oct 9am - 9 Oct 9am",
        description: "Capture the Flag is a cyber security exercise consisting of multiple puzzles/challenges. For those that have never heard of it, read more here. Detailed rules and info will be on the Rules page.",
        info: {
            text: "Learn more",
            link: "https://gdsc.community.dev/events/details/developer-student-clubs-the-university-of-sydney-presents-gdscs-capture-the-flag-hackathon/"
        },
        callToAction: { 
            text: "Register",
            link: "https://profile.gdscusyd.org/"
        }
    },
    {
        title: "Workshop I",
        date: "4th Oct 8pm",
        description: "For the first half hour, we are going to be talking about networking in cybersecurity! For the next half hour, we will go through hints on all the encryption questions!"
    },
    {
        title: "Workshop II",
        date: "5th Oct 8pm",
        description: "Here we mainly troubleshoot through problems you may have and provide any extra hints you might need just to pull through!"
    },
];

function Home() {
    return (
        <Page id="timeline">
            <SafeArea>
                <Title>Timeline</Title>
                <VerticalTimeline layout="1-column-left" lineColor='#34A853'>
                    {eventList.map((eventObj) => {
                    return <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position='right'
                        iconStyle={{ background: '#34A853', color: '#fff' }}
                        icon={ <Icon src={icon}/> }
                    >
                        <Content>
                            <ContentInfo>
                                <ContentTitle>{eventObj.title}</ContentTitle>
                                <ContentSubtitle className="vertical-timeline-element-subtitle">{eventObj.date}</ContentSubtitle>
                                <ContentText>
                                    {eventObj.description}
                                </ContentText>
                                <ButtonGroup>
                                    {eventObj.callToAction ? 
                                        <ButtonMain><a style={bttnLinkStyle} href={eventObj.callToAction.link}>{eventObj.callToAction.text}</a></ButtonMain>
                                    : null}
                                    {eventObj.info ? 
                                        <ButtonAlt><a style={{
                                            textDecoration: "none",
                                            color: mainHex,
                                        }} href={eventObj.info.link}>{eventObj.info.text}</a></ButtonAlt>
                                    : null}
                                 </ButtonGroup>
                            </ContentInfo>
                            <Image src={placeholder} />
                        </Content>
                        
                    </VerticalTimelineElement>})}
                </VerticalTimeline>
            </SafeArea>
        </Page>
    );
}

export default Home;
