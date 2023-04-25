import React from "react";
import contactcss from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  return (
    <div>
      <div>
        <div className={contactcss.background}>
          <div className={contactcss.contact}>Contact</div>
        </div>
      </div>

      <div>
        <h1>Follow our Socials</h1>
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
          <a href="https://www.linkedin.com/company/gdsc-usyd/">
            <FontAwesomeIcon
              className={contactcss.linkedin}
              icon={faLinkedin}
            />
          </a>
          <a href="https://discord.com/channels/872033047652990986/872033047652990989">
            <FontAwesomeIcon className={contactcss.discord} icon={faDiscord} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
