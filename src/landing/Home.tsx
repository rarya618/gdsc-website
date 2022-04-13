import React from 'react';
import styled from 'styled-components';
import { blueHex } from '../colors';

import placeholder from '../resources/placeholder-500.png';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${blueHex};
    padding: 50px 20px;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: calc(40px + 1vmin);
    ${margin}
`;

export const Text = styled.p`
    ${margin}
    font-size: calc(18px + 1vmin);
`;

const Image = styled.img`
    width: 500px;
`;

function Home() {
    return (
        <Page>
            <Content>
                <Title>Using big tech for big good</Title>
                <Text>Founded in 2021, the USYD GDSC aims to build a welcoming, passionate and interdisciplinary student community interested in all things tech.</Text>
            </Content>
            <Content>
                <Image src={placeholder} />
            </Content>
        </Page>
    );
}

export default Home;
