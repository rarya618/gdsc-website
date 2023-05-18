import React, { useRef } from "react";
import ReactDOM from "react-dom";
import contactcss from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CallToAction } from "../../components/menu/Menu";
import Card from "../../components/ui/Card";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import emaillogo from "../../resources/email-logo.png";

const Contact: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(0, 0);
    }
  };

  return (
    <div>
      <div>
        <div className={contactcss.background}>
          <img
            className={contactcss.emaillogo}
            src={emaillogo}
            alt="Contact Us"
          />
          <div className={contactcss.contact}>Contact Us</div>
        </div>
      </div>

      <Card
        title="We're keen to hear from you!"
        imageUrl="https://images.app.goo.gl/D6m6hHMnP1gjsKKV7"
        body=""
      />

      <CallToAction
        className={contactcss.sendbutton}
        href="https://gdsc.community.dev/accounts/login/?next=/the-university-of-sydney/"
      >
        Send
      </CallToAction>

      <div className={contactcss.whitebackground}>
        <div className={contactcss.socials}>
          <h1>Follow Our Socials</h1>
          <p className={contactcss.socialmedia}>
            Stay connected with GDSC USYD by following us on our social media
            channels:
          </p>
          <div>
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
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
