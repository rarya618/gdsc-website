import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import placeholder from '../../resources/placeholder.png';
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
    margin: 10px 0;
    border-radius: 3px;
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: ${mainHex};
    text-align: left;
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
    width: 40%;
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

function Home() {
    return (
        <Page>
            <SafeArea>
                <Title>Capture the Flag Timeline</Title>
                <VerticalTimeline layout="1-column-left" lineColor='#34A853'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position='right'
                        iconStyle={{ background: '#34A853', color: '#fff' }}
                        icon={ <Icon src={icon}/> }
                    >
                        <Content>
                            <ContentInfo>
                                <ContentTitle>Workshop I</ContentTitle>
                                <ContentSubtitle className="vertical-timeline-element-subtitle">Date | Location</ContentSubtitle>
                                <ContentText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu augue, vulputate quis arcu et, euismod molestie augue. Sed tempor et arcu ut luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </ContentText>
                                <ButtonGroup>
                                    <ButtonMain>RSVP now</ButtonMain>
                                </ButtonGroup>
                            </ContentInfo>
                            <Image src={placeholder} />
                        </Content>
                        
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position='right'
                        iconStyle={{ background: '#34A853', color: '#fff' }}
                        icon={ <Icon src={icon}/> }
                    >
                        <Content>
                            <ContentInfo>
                                <ContentTitle>Workshop II</ContentTitle>
                                <ContentSubtitle className="vertical-timeline-element-subtitle">Date | Location</ContentSubtitle>
                                <ContentText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu augue, vulputate quis arcu et, euismod molestie augue. Sed tempor et arcu ut luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </ContentText>
                                <ButtonGroup>
                                    <ButtonMain>RSVP now</ButtonMain>
                                </ButtonGroup>
                            </ContentInfo>
                            <Image src={placeholder} />
                        </Content>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position='right'
                        iconStyle={{ background: '#34A853', color: '#fff' }}
                        icon={ <Icon src={icon}/> }
                    >
                        <Content>
                            <ContentInfo>
                                <ContentTitle>Workshop III</ContentTitle>
                                <ContentSubtitle className="vertical-timeline-element-subtitle">Date | Location</ContentSubtitle>
                                <ContentText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu augue, vulputate quis arcu et, euismod molestie augue. Sed tempor et arcu ut luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </ContentText>
                                <ButtonGroup>
                                    <ButtonMain>RSVP now</ButtonMain>
                                </ButtonGroup>
                            </ContentInfo>
                            <Image src={placeholder} />
                        </Content>
                        
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position='right'
                        iconStyle={{ background: '#34A853', color: '#fff' }}
                        icon={ <Icon src={icon}/> }
                    >
                        <Content>
                            <ContentInfo>
                                <ContentTitle>Capture the Flag</ContentTitle>
                                <ContentSubtitle className="vertical-timeline-element-subtitle">30th Sep 10 AM  Friday to 2 October 5 PM Sunday</ContentSubtitle>
                                <ContentText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu augue, vulputate quis arcu et, euismod molestie augue. Sed tempor et arcu ut luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </ContentText>
                                <ButtonGroup>
                                    <ButtonMain>Register now</ButtonMain>
                                </ButtonGroup>
                            </ContentInfo>
                            <Image src={placeholder} />
                        </Content>
                        
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </SafeArea>
        </Page>
    );
}

export default Home;
