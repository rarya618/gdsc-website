import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';
import SafeArea, { RowContainer } from '../../components/SafeArea';


const margin = "margin: 10px 20px;";


const Page = styled.div`
    background-color: ${mainHex};
    color:: #000000;
    padding: 70px 0;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: 768px) {
        height: auto;
        padding: 75px 0;
    } 

    @media only screen and (max-width: 425px) {
        height: auto;
        padding: 50px 0;
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
    text-align: center;

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
    padding: 30px;
    // margin: 0 25px;
    border-radius: 2%;
    width: 25%;

    @media only screen and (max-width: 1024px) {
        padding: 15px;
        width: 25%;  
    }

    @media only screen and (max-width: 768px) {
        padding: 15px;
        width: 75%;  
        margin: 15px 0;
    }
`;

export const CategoryLine = styled.hr`
    border-top: 0.05% solid ${mainHex};
    border-color: ${mainHex};
`;

export const CategoryTextMain = styled.p`
    color: ${mainHex};
    font-size: calc(45px + 1vmin);
    font-weight: 700;
    margin:0;
    padding:0;

    @media only screen and (max-width: 425px) {
        font-size: calc(35px + 1vmin);
    }
`;

export const CategoryTextMinor = styled.p`
    color: #3a3a3a;
    font-size: calc(8px + 1vmin);
    margin:25px 0 0 0;
    padding:0;
`;

export const CategoryText = styled.p`
    color: ${mainHex};
    font-size: calc(15px + 1vmin);
    font-weight: 700;
    margin:0 0 25px 0;
    padding:0;

    @media only screen and (max-width: 425px) {
        font-size: calc(12px + 1vmin);
    }
`;


function Home() {
    return (
        <Page id="prizes">
            <SafeArea>
                <Content>
                    <Title>Prizes</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                    <ContainerVertical>
                        <Category>
                            <CategoryText>Overall Winner</CategoryText>
                            <CategoryTextMain>$250</CategoryTextMain>
                            <CategoryText>cash</CategoryText>
                            <CategoryLine></CategoryLine>
                            <CategoryTextMinor>Judged by GDSC</CategoryTextMinor>
                        </Category>
                        <Category>
                            <CategoryText>People’s Choice</CategoryText>
                            <CategoryTextMain>$115</CategoryTextMain>
                            <CategoryText>of merch</CategoryText>
                            <CategoryLine></CategoryLine>
                            <CategoryTextMinor>Voted by students</CategoryTextMinor>
                        </Category>
                        <Category>
                            <CategoryText>Best Design</CategoryText>
                            <CategoryTextMain>$135</CategoryTextMain>
                            <CategoryText>of merch</CategoryText>
                            <CategoryLine></CategoryLine>
                            <CategoryTextMinor>Polished mechanics</CategoryTextMinor>
                        </Category>
                    </ContainerVertical>
                </Content>
            </SafeArea>
        </Page>
    );
}

export default Home;
