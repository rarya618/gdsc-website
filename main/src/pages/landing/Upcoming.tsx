import React from 'react';
import styled from 'styled-components';
import { redHex, redBackground, yellowBackground, whiteHex, blueHex, greenHex, yellowHex } from '../../colors';

import placeholder from '../../resources/placeholder-400.png'; 
import { Title } from './Home';

const margin = "margin: 8px 16px;";

const Page = styled.div`
    color: ${yellowHex};
    background: ${yellowBackground};
    padding: 20px 40px 0px;
    min-height: calc(100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content = styled.div`
    padding: 0px 10px 0px;
    display: flex;
    flex-direction: row;
    flex-flow: nowrap !important;
`;

const Image = styled.img`
    width: 100%;
`;

export const Text = styled.p`
    ${margin}
    padding: 5px 0px 30px;
    font-size: calc(14px + 1vmin);
`;

export const SubTitle = styled.p`
    ${margin}
    padding: 5px 0px 30px;
    font-size: calc(14px + 1vmin);
    font-weight: bold;
`;

type Block = {
    image: string,
    title: string, 
    color: string,
    text: string
}

const BlockTitle = styled.h2`
    font-size: calc(24px + 1vmin);
    padding: 0px 0px 0px;
    ${margin}
`;

const BlockContent = styled.div`
    padding: 10px 10px 30px;
`;

const LearnMoreButton = styled.button`
        background: ${yellowHex};
        color: ${whiteHex};
        padding: 8px 14px; 
        border: none;
        font-size: calc(12px + 1vmin);
        margin: 30px 16px 10px;
        border-radius: 5px;
    `;

const BlockGen = (block: Block) => {
    const BlockContainer = styled.div`
        padding: 0; 
        margin: 5px 40px 5px; 
        border-radius: 25px;
        background: ${whiteHex};
        color: ${block.color};
        text-align: left;
    `;

    const CallToAction = styled.button`
        background: ${block.color};
        color: ${whiteHex};
        padding: 8px 14px; 
        border: none;
        font-size: calc(12px + 1vmin);
        ${margin}
        border-radius: 5px;
    `;

    return (<BlockContainer>
        <Image src={block.image}/>
        <BlockContent>
        <BlockTitle>{block.title}</BlockTitle>
        <Text>{block.text}</Text>
        <CallToAction className="btn-hoverable">Explore</CallToAction>
        </BlockContent>
    </BlockContainer>)
}

const blocks: Block[] = [
    {
        image: placeholder,
        title: "Event 1", 
        color: blueHex,
        text: "This is the event's description where we explain what the event is about."
    },
    {
        image: placeholder,
        title: "Event 2", 
        color: greenHex,
        text: "This is the event's description where we explain what the event is about."
    },
    {
        image: placeholder,
        title: "Event 3", 
        color: yellowHex,
        text: "This is the event's description where we explain what the event is about."
    },
    {
        image: placeholder,
        title: "Event 4", 
        color: redHex,
        text: "This is the event's description where we explain what the event is about."
    }
]

function Home() {
    return (
        <Page>
            <Title>Upcoming Events</Title>
            <SubTitle>Keep an eye out for the amazing events we are holding in the future</SubTitle>
            <Content>
                {blocks.map(block => {
                    return BlockGen(block)
                })}
            </Content>
            <LearnMoreButton className="btn-hoverable">Learn More</LearnMoreButton>
        </Page>
    );
}

export default Home;
