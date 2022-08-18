import React from 'react';
import styled from 'styled-components';

const SafeArea = styled.div`
    max-width: 1100px;
    padding: 0 20px;
    margin: 0 auto;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ColContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default SafeArea;