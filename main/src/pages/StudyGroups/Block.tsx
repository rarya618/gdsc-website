import React from 'react';
import styled from 'styled-components';
import { menuLinkStyle } from '../../App';
import { blueHex, whiteHex } from '../../colors';
// import { RowContainer } from '../../components/SafeArea';
import { ClubEvent } from '../../dataTypes/ClubEvent';

type Props = {
    block: ClubEvent
}

const RowContainerButton = styled.div`
    display: flex;
    flex-direction: row;`

const BlockObject = styled.div`
    background: white;
    border-radius: 5px;
    padding: 20px;
    max-width: 300px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
    text-align: left;
    margin: 10px 0 12px 0;

    @media only screen and (max-width: 1024px) {
        font-size: calc(25px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(30px + 1vmin);
    } 

    @media only screen and (max-width: 425px) { 
        font-size: calc(22px + 1vmin);
    } 

    @media only screen and (max-width: 375px) { 
        font-size: calc(18px + 1vmin);
    } 

`;

const Text = styled.p`
    margin: 0;
    text-align: left;
    line-height: 30px;

    @media only screen and (max-width: 1024px) {
        font-size: calc(15px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
        font-size: calc(18px + 1vmin);  
    } 

    @media only screen and (max-width: 425px) {
        font-size: calc(15px + 1vmin);  
    } 

    @media only screen and (max-width: 375px) {
        font-size: calc(12px + 1vmin);  
    } 
`;

const buttonStyle = `
    border: none;
    text-align: left;
    margin: 5px 10px 5px 0 !important;
    border: solid 1px ${blueHex};
`

const BlueButton = styled.a`
    background: ${blueHex};
    color: ${whiteHex} !important;
    ${buttonStyle}
`;

const Button = styled.a`
    ${buttonStyle}
`;

const Info = styled.div`
    background: ${whiteHex};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    // border: 0.5px solid;
    border-radius: 3px;
    padding: 14px 12px;
    margin: 12px 0;
    display: flex;
`;

const InfoText = styled.p`
    margin: 0;
    text-align: left;
`;

const Block = (props: Props) => {
    return (<BlockObject>
        <Title>{props.block.title}</Title>
        <Text>{props.block.shortDescription}</Text>

        {props.block.date ? <Info>
            <InfoText>{props.block.date}</InfoText>
        </Info> : null}

        {props.block.address ? <Info>
            <InfoText>{props.block.address}</InfoText>
        </Info> : null}

        <RowContainerButton>
            <BlueButton href={props.block.link} style={menuLinkStyle}>RSVP</BlueButton>
            <Button href={props.block.link} style={menuLinkStyle}>Learn more</Button>
        </RowContainerButton>
        
    </BlockObject>)
}

export default Block;