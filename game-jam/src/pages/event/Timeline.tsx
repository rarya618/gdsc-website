import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import eventMain from '../../resources/eventMain.png';
import eventDesign from '../../resources/eventDesign.png';
import eventPython from '../../resources/eventPython.png';
import eventPygame from '../../resources/eventPygame.png';
import icon from '../../resources/icon.svg';

import grid from '../../resources/redGrid.png';
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
        height: auto;
        padding: 75px 0 0 0;
        // display: none;
    } 

    @media only screen and (max-width: 425px) {
        padding: 50px 0 0 0;
    } 
`;

const Content = styled.div`
    padding: 10px;
    display: flex;

    @media only screen and (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        align-items: flex-start;
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
    margin: 10px 0;
    border-radius: 3px;
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: ${mainHex};
    text-align: left;
    ${margin}

    @media only screen and (max-width: 1024px) {
        font-size: calc(25px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(25px + 1vmin);
    } 

    @media only screen and (max-width: 425px) {
        font-size: calc(20px + 1vmin);
    } 
`;

export const Text = styled.p`
    ${margin}
    color: #3a3a3a;
    font-size: calc(12px + 1vmin);
    line-height: 1.5em;

    @media only screen and (max-width: 1024px) {
        font-size: calc(12px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
    }

    @media only screen and (max-width: 425px) {
        margin: 0 0 15px 0;
        font-size: calc(10px + 1vmin);
    } 
`;


const Image = styled.img`
    width: 40%;
    margin: 0;

    @media only screen and (max-width: 1024px) {
        width: 400px;  
    }

    @media only screen and (max-width: 768px) {
        margin-top: 10px;
        width: 100%;  
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

function Home() {
    return (
        <Page id="timeline">
            <SafeArea>
                <Title>Game Jam Timeline</Title>
                <VerticalTimeline layout="1-column-left" lineColor='#EA4335'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position='right'
                        iconStyle={{ background: '#EA4335', color: '#fff' }}
                        icon={ <Icon src={icon}/> }
                    >
                        <Content>
                            <ContentInfo>
                                <ContentTitle>Python Workshop</ContentTitle>
                                <ContentSubtitle className="vertical-timeline-element-subtitle">26th September 2022 @ Zoom </ContentSubtitle>
                                <ContentText>
                                The first workshop will be focused on the fundamentals of python for game development, a refresher on what you may have learnt in INFO1110. This workshop will be held online Monday, 26th September at 2 - 3:30pm.
                                </ContentText>
                                <ButtonGroup>
                                    <ButtonMain><a style={bttnLinkStyle} href="https://gdsc.community.dev/events/details/developer-student-clubs-the-university-of-sydney-presents-gdscs-game-development-workshops/">RSVP now</a></ButtonMain>
                                </ButtonGroup>
                            </ContentInfo>
                            <Image src={eventPython} />
                        </Content>
                        
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position='right'
                        iconStyle={{ background: '#EA4335', color: '#fff' }}
                        icon={ <Icon src={icon}/> }
                    >
                        <Content>
                            <ContentInfo>
                                <ContentTitle>PyGame Workshop</ContentTitle>
                                <ContentSubtitle className="vertical-timeline-element-subtitle">28th September 5:30 PM - 7:00 PM @ Google HQ </ContentSubtitle>
                                <ContentText>
                                This workshop will deeper into game development using pyGame, teaching the syntax and the structure. Then we'll focus on the principles of game design that have lead to succesful titles. We'll take a break at the end and have dinner 🍕 and drinks, with time to chat to other students. 
                                </ContentText>
                                <ButtonGroup>
                                    <ButtonMain><a style={bttnLinkStyle} href="https://gdsc.community.dev/events/details/developer-student-clubs-the-university-of-sydney-presents-gdscs-game-development-workshops/">RSVP now</a></ButtonMain>
                                </ButtonGroup>
                            </ContentInfo>
                            <Image src={eventPygame} />
                        </Content>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position='right'
                        iconStyle={{ background: '#EA4335', color: '#fff' }}
                        icon={ <Icon src={icon}/> }
                    >
                        <Content>
                            <ContentInfo>
                                <ContentTitle>Game Design Workshop</ContentTitle>
                                <ContentSubtitle className="vertical-timeline-element-subtitle">28th September 8:00 PM - 9:00 PM  @ Google HQ </ContentSubtitle>
                                <ContentText>
                                This workshop will deeper into game development using pyGame, teaching the syntax and the structure. Then we'll focus on the principles of game design that have lead to succesful titles. We'll take a break at the end and have dinner 🍕 and drinks, with time to chat to other students. 
                                </ContentText>
                                <ButtonGroup>
                                    <ButtonMain><a style={bttnLinkStyle} href="https://gdsc.community.dev/events/details/developer-student-clubs-the-university-of-sydney-presents-gdscs-game-development-workshops/">RSVP now</a></ButtonMain>
                                </ButtonGroup>
                            </ContentInfo>
                            <Image src={eventDesign} />
                        </Content>
                        
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position='right'
                        iconStyle={{ background: '#EA4335', color: '#fff' }}
                        icon={ <Icon src={icon}/> }
                    >
                        <Content>
                            <ContentInfo>
                                <ContentTitle>GAME JAM</ContentTitle>
                                <ContentSubtitle className="vertical-timeline-element-subtitle">30th September 10 AM - 2 October 5 PM</ContentSubtitle>
                                <ContentText>
                                A chance for students to display their coding and creative skills developing a game of their choice. The events runs for 55hrs and can be completed in teams of up to 4. The best games progress to the showcase event where they be put to the test by other students and final winners will be decided for the cash prizes.
                                </ContentText>
                                <ButtonGroup>
                                    <ButtonMain><a style={bttnLinkStyle} href="https://gdsc.community.dev/events/details/developer-student-clubs-the-university-of-sydney-presents-gdscs-game-jam/">RSVP now</a></ButtonMain>
                                </ButtonGroup>
                            </ContentInfo>
                            <Image src={eventMain} />
                        </Content>
                        
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </SafeArea>
        </Page>
    );
}

export default Home;
