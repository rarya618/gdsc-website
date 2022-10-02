import React from 'react';
import styled from 'styled-components';
import { blueHex } from '../colors';

import grid from '../resources/blueGrid.png';
import { useTitle } from './BrowserTitle';
import SafeArea from './SafeArea';

type Props = {
    content: JSX.Element,
    title: string
}

const Content = styled.div`
    text-align: left;
    padding: 0 40px 30px 40px;
    margin: 0;
    font-size: 18px;
    background: url(${grid});
    background-repeat: repeat;
    background-size: contain;
    color: ${blueHex};

    @media only screen and (max-width: 768px) {
        padding: 0 10px 30px 10px;
        font-size: 16px;  
    } 

    @media only screen and (max-width: 425px) {
        padding: 0 5px 30px 5px;
    } 
`;

const Terms = (props: Props) => {
    useTitle(props.title);

    return <Content className="toc-display">
        <SafeArea>
            {props.content}
        </SafeArea>
    </Content>
}

export default Terms;