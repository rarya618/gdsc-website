import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';
import SafeArea, { RowContainer } from '../../components/SafeArea';


const margin = "margin: 10px 20px;";


const Page = styled.div`
    background-color: ${mainHex};
    color:: #000000;
    padding: 40px 0 50px 0;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: 768px) {
        height: auto;
        padding: 35px 0 45px 0;
    } 

    @media only screen and (max-width: 425px) {
        height: auto;
        padding: 40px 0 50px 0;
    } 
`;


const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    color: #ffffff;
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
    color: #ffffff;
    font-size: calc(12px + 1vmin);
    line-height: 1.5em;
    text-align: left;

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

const ContainerVertical = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 25px 0;
    width: 100%;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Category = styled.div`
    box-shadow: 1px 3.97px 3.97px 0 rgb(84,84,84,0.15);
    background-color: #ffffff;
    padding: 28px 24px 20px 22px;
    margin: 0 8px;
    border-radius: 2%;
    width: 25%;

    @media only screen and (max-width: 1024px) {
        width: 25%;  
    }

    @media only screen and (max-width: 768px) {
        width: 75%;  
        margin: 10px 0;
    }
`;

export const CategoryTextMain = styled.p`
    color: ${mainHex};
    font-size: calc(26px + 1vmin);
    font-weight: 700;
    margin:0;
    padding:0;

    @media only screen and (max-width: 425px) {
        font-size: calc(28px + 1vmin);
    }
`;

export const CategoryText = styled.p`
    color: ${mainHex};
    font-size: calc(10px + 1vmin);
    font-weight: 700;
    margin: 3px 0 25px 0;
    padding:0;

    @media only screen and (max-width: 425px) {
        font-size: calc(12px + 1vmin);
    }
`;

const prizes = [
    {title: "1st Grand Prize", main: "$50", subtext: "gift voucher"},
    {title: "2nd - 5th High Tier", main: "Shirts", subtext: "GDSC exclusive"},
    {title: "6th - 10th Mid Tier", main: "Bottle", subtext: "and hats"},
    {title: "11th - 20th Mid Tier", main: "Stickers", subtext: "and socks"},
]


function Home() {
    return (
        <Page id="prizes">
            <SafeArea>
                <Content>
                    <Title>Prizes</Title>
                    <Text>Once you earn 500 pts (~4-5 markers), you are entered into the tournament. If you are a part of the top 20 when to competition ends you get a prize based on your place: </Text>
                    <ContainerVertical>
                        {prizes.map(prize => {
                            return <Category>
                                <CategoryText>{prize.title}</CategoryText>
                                <CategoryTextMain>{prize.main}</CategoryTextMain>
                                <CategoryText>{prize.subtext}</CategoryText>
                            </Category>
                        })}
                    </ContainerVertical>
                    <Text>Your position and the points required to level up are always present in the app, by pressing the yellow button.</Text>
                    <Text>After the conclusion of the event, winners will be contacted via their Google email to sort the collection of prizes.</Text>
                </Content>
            </SafeArea>
        </Page>
    );
}

export default Home;
