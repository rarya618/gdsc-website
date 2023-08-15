import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import placeholder from '../../resources/placeholder.png';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";


const Page = styled.div`
    color: ${mainHex};
    padding: 70px 0;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;

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
    align-items: center;
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 25px 0;

    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;




export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: ${mainHex};
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
    margin: 0 30px;

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

function Home() {
    return (
        <Page id="about">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>The Idea</Title>
                        <Text>Machine-learning driven academic planner to track exam prep for Mid-sems, Quizzes ,daily tasks, scheduling etc. Optimise user productivity by providing insights on successful study patterns based on task completion rates,conditions of progress (time, frequency, emotional intent) and other relevant criterions.</Text>
                    </Content>
                    <Content>
                        <Image src={placeholder} />
                    </Content>
                </Container>
                <Container>
                    <Content>
                        <Image src={placeholder} />
                    </Content>
                    <Content>
                        <Title>Objectives</Title>
                        <Text>Provide USYD students the ability to use this all-in-one web platform to simplify their academic planning. As a uni student we are always under pressure with weekly quizzes,exams, assignments and other external commitments. GDSC led surveying of USYD students has highlighted that we need something designed for us exclusively! Well that’s what we aim to provide by the end of 2022.</Text>
                    </Content>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
