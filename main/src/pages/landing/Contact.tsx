import React from "react";
import contactcss from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <div>
      <div className={contactcss.background}>
        <div className={contactcss.contact}>Contact</div>
      </div>
    </div>
  );
};

export default Contact;
