import React from 'react';
import styled from 'styled-components';

const SafeArea = styled.div`
    max-width: 1100px;
    padding: 0 20px;
    margin: 0 auto;

    @media only screen and (max-width: 425px) {
        padding: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }  
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: 768px) {
        flex-direction: column;  
    } 
`;

export const ColContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default SafeArea;