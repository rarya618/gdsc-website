import React from 'react';
import styled from 'styled-components';
import { blueHex } from '../colors';

import grid from '../resources/blueGrid.png';
import SafeArea from './SafeArea';

type Props = {
    content: JSX.Element
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
`;

const Terms = (props: Props) => {
    return <Content className="toc-display">
        <SafeArea>
            {props.content}
        </SafeArea>
    </Content>
}

export default Terms;