import React from "react";
import { StyledMenu } from "./Menu.styled";
import { blueHex, whiteHex } from "../../colors";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

interface Props {
  open: boolean;
}

export const menuLinkStyle = {
  padding: "10px 14px",
  margin: "5px",
  borderRadius: "3px",
  color: blueHex,
  textDecoration: "none",
  fontSize: "16px",
};

export const CallToAction = styled.a`
  background: ${blueHex};
  color: ${whiteHex};
  padding: 10px 14px;
  margin: 6px 12px;
  border-radius: 3px;
  font-size: 16px;
  text-decoration: none;

  @media only screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

const menuItems = [
  { text: "Study Groups", link: "/study-groups" },
  { text: "Contact", link: "/contact" }, // New menu item for About page
];

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      {menuItems.map((menuItem) => {
        return (
          <Link
            className="hoverable"
            to={menuItem.link ? menuItem.link : ""}
            style={menuLinkStyle}
          >
            {menuItem.text}
          </Link>
        );
      })}
      <CallToAction
        className="btn-hoverable"
        href="https://gdsc.community.dev/accounts/login/?next=/the-university-of-sydney/"
      >
        Join us
      </CallToAction>
    </StyledMenu>
  );
};

export default Menu;
