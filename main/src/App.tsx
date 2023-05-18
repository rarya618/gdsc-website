import React, { useEffect } from "react";
import styled from "styled-components";

import logo from "./resources/header-logo.png";
import "./App.css";

import Landing from "./pages/landing/Landing";
import StudyGroups from "./pages/StudyGroups/Main";
import About from "./pages/landing/About";
import Contact from "./pages/landing/Contact";
import Footer from "./Footer";
import Burger from "./components/burger";
import Menu from "./components/menu";

import { blueHex, whiteHex } from "./colors";
import { Link, Route, Routes } from "react-router-dom";
import Terms from "./components/TermsView";
import ToC from "./resources/pages/ToC";
import PrivacyPolicy from "./resources/pages/PrivacyPolicy";

export const standardSpacing =
  "padding: 10px 14px; margin: 6px 12px; border-radius: 3px;";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  font-size: calc(12px + 1vmin);
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
`;

//Menu styles, migrated to components folder

// const Menu = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	padding: 5px 10px;

// 	@media only screen and (max-width: 768px) {
//         display:  none;
//     }
// `;

// export const menuLinkStyle = {
// 	padding: "10px 14px",
// 	margin: "5px",
// 	borderRadius: "3px",
//  color: blueHex,
// 	textDecoration: "none",
//  fontSize: "16px"
// };

// export const CallToAction = styled.a`
//  background: ${blueHex};
//  color: ${whiteHex};
//  padding: 10px 14px;
// 	margin: 6px 12px;
// 	border-radius: 3px;
//  font-size: 16px;
// 	text-decoration: none;

// 	@media only screen and (max-width: 425px) {
//         font-size: 14px;
//     }
// `;

// const menuItems = [
//     {text: "Study Groups", link: "/study-groups"},
//     // {text: "Events"}
// ]

const Logo = styled.img`
  height: 60px;
  margin-left: 10px;

  @media only screen and (max-width: 525px) {
    height: 50px;
  }

  @media only screen and (max-width: 425px) {
    height: 45px;
    margin-left: 5px;
  }

  @media only screen and (max-width: 375px) {
    height: 40px;
  }

  @media only screen and (max-width: 325px) {
    height: 35px;
  }

  @media only screen and (max-width: 265px) {
    height: 25px;
    margin-left: 2.5px;
  }
`;

const subMenuItems = [
  { text: "AI/ML" },
  { text: "Cybersecurity" },
  { text: "Game Jam" },
  { text: "Design Month" },
];

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <Header>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Menu open={open} />
        <Burger open={open} setOpen={setOpen} />
      </Header>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/study-groups" element={<StudyGroups />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/terms"
          element={<Terms content={ToC} title={"Terms"} />}
        />
        <Route
          path="/privacy"
          element={<Terms content={PrivacyPolicy} title={"Privacy Policy"} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
