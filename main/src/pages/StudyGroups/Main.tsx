import { collection, getDocs, query, where } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { blueBackground, blueHex } from '../../colors';
import { useTitle } from '../../components/BrowserTitle';
import SafeArea, { ColContainer } from '../../components/SafeArea';
import { ClubEvent } from '../../dataTypes/ClubEvent';

import { db } from "../../firebase/config";
import Block from './Block';

const Hero = styled.div`
    margin: 0;
    padding: 30px 0 0 0;
    background: ${blueBackground};
    color: ${blueHex};
`;

const Title = styled.h1``;

const SubTitle = styled.h2`
    font-weight: 400;
    text-align: left;

    @media only screen and (max-width: 768px) {
        text-align: center;  
    } 
`;

const Content = styled.div`
    color: ${blueHex};
    margin: 10px 0 50px 0;
`;

function Main() {
    useTitle("Study Groups");

    const [blocks, setBlocks] = useState<ClubEvent[]>([]);

    async function getBlocks() {
		const filesRef = collection(db, 'events');
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
            <SafeArea>
                {blocks.map((block) => {
                    return <Block block={block} />
                })}
            </SafeArea>
        </Content>
        </>
    )
}

export default Main;