// general libraries
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Firebase APIs
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// in-app assets
import { menuLinkStyle } from "../../components/menu/Menu";
import { blueHex, whiteHex } from "../../colors";
import { ClubEvent } from "../../dataTypes/ClubEvent";

type Props = {
  block: ClubEvent;
};

// get default Firebase storage bucket
const storage = getStorage();

// block styles
const BlockObject = styled.div`
  background: white;
  border-radius: 5px;
  max-width: 320px;
  margin: 0 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  @media only screen and (max-width: 385px) {
    max-width: 100%;
    margin: 0 20px;
  }
`;

const Content = styled.div`
  padding: 10px 20px 20px 20px;
`;

// text styles
const Title = styled.h2`
  text-align: left;
  margin: 10px 0 12px 0;

  @media only screen and (max-width: 425px) {
    font-size: calc(18px + 1vmin);
  }

  @media only screen and (max-width: 375px) {
    font-size: calc(16px + 1vmin);
  }
`;

const Text = styled.p`
  margin: 0;
  text-align: left;
  line-height: 30px;
`;

// button styles
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const buttonStyle = `
    border: none;
    text-align: left;
    margin: 5px 10px 5px 0 !important;
    border: solid 1px ${blueHex};
`;

const BlueButton = styled.a`
  background: ${blueHex};
  color: ${whiteHex} !important;
  ${buttonStyle}
`;

const Button = styled.a`
  ${buttonStyle}
`;

// info box styles
const InfoBox = styled.div`
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

// image styles
const imageMarginOffset = 18;

const Image = styled.img`
  width: ${100 + imageMarginOffset * 2}%;
  margin: 0 -${imageMarginOffset}%;
`;

const Block = (props: Props) => {
  const [imageUrl, setImageUrl] = useState("");

  // securely gets download URL from Firebase storage
  useEffect(() => {
    getDownloadURL(ref(storage, "events/" + props.block.id + "/main.jpg"))
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <BlockObject>
      <Image src={imageUrl} />
      <Content>
        <Title>{props.block.title}</Title>
        <Text>{props.block.shortDescription}</Text>

        {props.block.date ? (
          <InfoBox>
            <InfoText>{props.block.date}</InfoText>
          </InfoBox>
        ) : null}

        {props.block.address ? (
          <InfoBox>
            <InfoText>{props.block.address}</InfoText>
          </InfoBox>
        ) : null}

        <ButtonContainer>
          <BlueButton href={props.block.link} style={menuLinkStyle}>
            RSVP
          </BlueButton>
          <Button href={props.block.link} style={menuLinkStyle}>
            Learn more
          </Button>
        </ButtonContainer>
      </Content>
    </BlockObject>
  );
};

export default Block;
