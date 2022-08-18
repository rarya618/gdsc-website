import React from 'react';
import styled from 'styled-components';
import { redHex, redBackground, whiteHex, blueHex, greenHex, yellowHex } from '../../colors';

import placeholder from '../resources/placeholder-400.png';
import { Title } from './Home';

const margin = "margin: 8px 16px;";

const Page = styled.div`
    color: ${redHex};
    background: ${redBackground};
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
`;

const Image = styled.img`
    width: 100%;
`;

export const Text = styled.p`
    ${margin}
    font-size: calc(14px + 1vmin);
`;

type Block = {
    image: string,
    title: string, 
    color: string,
    text: string
}

const BlockTitle = styled.h2`
    font-size: calc(24px + 1vmin);
    ${margin}
`;

const BlockContent = styled.div`
    padding: 15px 5px;
`;

const BlockGen = (block: Block) => {
    const BlockContainer = styled.div`
        padding: 0; 
        margin: 5px 15px; 
        border-radius: 5px;
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
        title: "Events", 
        color: blueHex,
        text: "We organise a variety of events ranging from social events to study groups."
    },
    {
        image: placeholder,
        title: "Competitions", 
        color: greenHex,
        text: "We run multiple hackathons, open to participants of any experience level."
    },
    {
        image: placeholder,
        title: "Programs", 
        color: yellowHex,
        text: "We facilitate weekly study groups and community programs like Hivemind."
    }
]

function Home() {
    return (
        <Page>
            <Title>What we offer?</Title>
            <Content>
                {blocks.map(block => {
                    return BlockGen(block)
                })}
            </Content>
        </Page>
    );
}

export default Home;
