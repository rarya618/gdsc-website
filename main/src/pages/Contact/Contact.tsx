import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faDiscord,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";
import contactcss from "./Contact.module.css";
import Card from "../../components/ui/Card";
import { blueHex } from "../../colors";
import grid from "../../resources/blueGrid.png";

// Styled component for the main page container
const Page = styled.div`
  color: ${blueHex};
  padding: 20px;
  min-height: calc(100vh - 84px);
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: url(${grid});
  background-repeat: repeat;
  background-size: cover;

  @media only screen and (max-width: 768px) {
    height: calc(100vh - 80px);
  }

  @media only screen and (max-width: 425px) {
    padding: 5px;
  }
`;

function Contact() {
  return (
    <div>
      <div>
        <Page>
          <div>
            <div className={contactcss.contact}>Contact Us</div>
          </div>
        </Page>
      </div>

      <div className={contactcss.card}>
        <Card
          title="We're keen to hear from you!"
          imageUrl="https://images.app.goo.gl/D6m6hHMnP1gjsKKV7"
          body=""
        />
      </div>

      <div className={contactcss.greenbackground}>
        <div className={contactcss.socials}>
          <h1 className={contactcss.oursocials}>Our Socials</h1>
          <p className={contactcss.socialmedia}>
            Stay connected with us through our social channels
          </p>

          <div className={contactcss.socialcircles}>
            <div className={contactcss.circle}></div>
            <div className={contactcss.instagramcircle}></div>
            <div className={contactcss.discordcircle}></div>
            <div className={contactcss.linkedincircle}></div>
          </div>

          <div className={contactcss.sociallogos}>
            <a href="https://www.instagram.com/gdscusyd/">
              <FontAwesomeIcon
                className={contactcss.instagram}
                icon={faInstagram}
              />
            </a>

            <a href="https://www.facebook.com/gdsc.usyd">
              <FontAwesomeIcon
                className={contactcss.facebook}
                icon={faFacebook}
              />
            </a>

            <a href="https://discord.com/channels/872033047652990986/872033047652990989">
              <FontAwesomeIcon
                className={contactcss.discord}
                icon={faDiscord}
              />
            </a>

            <a href="https://www.linkedin.com/company/gdsc-usyd/">
              <FontAwesomeIcon
                className={contactcss.linkedin}
                icon={faLinkedinIn}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={contactcss.bluetext}>
        <h1 className={contactcss.joinclub}>Join the club today !</h1>
        <p className={contactcss.foraccess}>
          For access to our amazing events and competitions
        </p>
        <a
          href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=857409878587-im3f0si9p11h41a6aeiil7cs37frkubb.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fgdsc.community.dev%2Faccounts%2Fgoogle%2Flogin%2Fcallback%2F&scope=profile%20email&response_type=code&state=hLlU8pFhaSiq&access_type=offline&service=lso&o2v=1&theme=glif&flowName=GeneralOAuthFlow"
          target="_blank" // Opens the link in a new tab/window
          className={contactcss.joinusbutton}
        >
          Join Us
        </a>
      </div>

      <div className={contactcss.diagonalbluebackground}></div>
      <div className={contactcss.blankbackground}></div>
    </div>
  );
}

export default Contact;
