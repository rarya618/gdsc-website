import React from 'react';
import styled from 'styled-components';
import { blueHex } from '../../colors';

import placeholder from '../../resources/header-graphic.svg';
import grid from '../../resources/blueGrid.png';
import SafeArea, { RowContainer } from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${blueHex};
    padding: 0 20px;
    height: calc(100vh - 80px);
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: url(${grid});
    background-repeat: repeat;
    background-size: contain;
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    ${margin}
`;

export const Text = styled.p`
    ${margin}
    font-size: calc(18px + 1vmin);
`;

const Image = styled.img`
    width: 450px;
`;

function Home() {
    return (
        <Page>
            <SafeArea>
                <RowContainer>
                    <Content>
                        <Title>Using big tech for big good</Title>
                        <Text>Founded in 2021, the USYD GDSC aims to build a welcoming, passionate and interdisciplinary student community interested in all things tech.</Text>
                    </Content>
                    <Content>
                        <Image src={placeholder} />
                    </Content>
                </RowContainer>
            </SafeArea>
        </Page>
    );
}

export default Home;
