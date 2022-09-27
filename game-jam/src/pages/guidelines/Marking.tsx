import React from 'react';
import styled from 'styled-components';
import { mainHex, redLightHex } from '../../colors';

import SafeArea, { RowContainer } from '../../components/SafeArea';
import uiux from '../../resources/uiux.svg';
import gameDesign from '../../resources/gameDesign.svg';
import graphicSmoothness from '../../resources/graphicSmoothness.svg';
import codeDesign from '../../resources/codeDesign.svg';
import gameCreativity from '../../resources/gameCreativity.svg';
import themeSuitability from '../../resources/themeSuitability.svg';


const margin = "margin: 10px 20px;";

const space = "height: 25px";

const Page = styled.div`
    color: ${mainHex};
    padding: 100px 20px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;

    @media only screen and (max-width: 768px) {
        height: calc(100vh - 80px);
    } 

    @media only screen and (max-width: 425px) {
        padding: 5px;
    } 
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContainerVertical = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 25px 0;
`;

const Space = styled.div`
    ${space}
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;

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
    line-height: 1.8em;

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

export const Category = styled.div`
    box-shadow: 1px 3.97px 3.97px 0 rgb(84,84,84,0.15);
    width: 13%;
`;

export const CategoryText = styled.p`
    color: #3a3a3a;
    font-size: calc(8px + 1vmin);
`;

export const CategoryImage = styled.img`
    width: 50%;
    height: 45%;
`;


function Home() {
    return (
        <Page id="rubric">
            <SafeArea>
                <Container>
                    <Content>
                        <Title>Marking Rubric</Title>
                        <Text>A basic diluted version of the marking rubric will be made available during on Wednesday 28th September. There are three winning categories that we will be judging; Overall Winner (Judged by GDSC), People’s Choice (Voted by students) and Best Design (On Polished Mechanics).</Text>
                        <Text>These, while not specifying exact requirements for each, will be judged on:</Text>
                    </Content>
                    <Space/>
                    <ContainerVertical>
                        <Category>
                            <CategoryImage src={uiux}/>
                            <CategoryText>
                                UI/UX
                            </CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage src={gameDesign}/>
                            <CategoryText>
                                Game Design
                            </CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage src={graphicSmoothness}/>
                            <CategoryText>
                                Game Juice
                            </CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage src={codeDesign}/>
                            <CategoryText>
                                Code Design
                            </CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage src={gameCreativity}/>
                            <CategoryText>
                                Game Creativity
                            </CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage src={themeSuitability}/>
                            <CategoryText>
                                Theme Suitability
                            </CategoryText>
                        </Category>
                    </ContainerVertical>
                </Container>
            </SafeArea>
        </Page>
    );
}

export default Home;
