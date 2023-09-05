import React from "react"; // Make sure to import React
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
    </div>
  );
}

export default Contact;
