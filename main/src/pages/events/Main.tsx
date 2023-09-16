import { collection, getDocs, query, where } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { blueBackground, blueHex } from '../../colors';
import { useTitle } from '../../components/BrowserTitle';
import SafeArea, { ColContainer } from '../../components/SafeArea';
import { ClubEvent } from '../../dataTypes/ClubEvent';

import { db } from "../../firebase/config";
import Block from '../StudyGroups/Block';

const Hero = styled.div`
    margin: 0;
    padding: 30px 0 0 0;
    background: ${blueBackground};
    color: ${blueHex};
`;

const Title = styled.h1`
    @media only screen and (max-width: 1024px) {
        font-size: calc(25px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(30px + 1vmin);
    } 

    @media only screen and (max-width: 425px) { 
        font-size: calc(22px + 1vmin);
    } 
`;

const SubTitle = styled.h2`
    font-weight: 400;
    text-align: left;
    margin-left: 15px;

    @media only screen and (max-width: 768px) {
        text-align: center;
        margin-left: 0;
    } 

    @media only screen and (max-width: 1024px) {
        font-size: calc(15px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
        font-size: calc(18px + 1vmin);  
    } 

    @media only screen and (max-width: 425px) {
        font-size: calc(15px + 1vmin);  
    } 
`;

const Content = styled.div`
    color: ${blueHex};
    margin: 10px 0 50px 0;
`;

const EventArea = styled.div`
    max-width: 1100px;
    padding: 0 20px;
    margin: 0 auto;

    @media only screen and (max-width: 725px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

function Main() {
    useTitle("Study Groups");

    const [blocks, setBlocks] = useState<ClubEvent[]>([]);

    async function getBlocks() {
		const filesRef = collection(db, 'events');

        // filters events with type 'studyGroup'
		const q = query(filesRef, where("type", "==", "studyGroup"));

		await getDocs(q).then((querySnapshot) => {
            let blocksFromDb = querySnapshot.docs.map((doc) => {
				// @ts-ignore
				const block: ClubEvent = {id: doc.id, ...doc.data()};				
				return block;
            })
			
			setBlocks(blocksFromDb);
        })
    }

    useEffect(() => {
		getBlocks();
    }, [])
    
    return (
        <>
        <Hero className="hero">
            <SafeArea>
                <Title>Study Groups</Title>
                <SubTitle>Upcoming</SubTitle>
            </SafeArea>
        </Hero>
        <Content>
            <EventArea>
                {blocks.map((block) => {
                    return <Block block={block} />
                })}
            </EventArea>
        </Content>
        </>
    )
}

export default Main;