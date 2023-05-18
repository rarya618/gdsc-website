import React, { useState, useEffect, useRef } from "react";
import cardcss from "./Card.module.css";

interface CardProps {
  imageUrl: string;
  title: string;
  body: string;
}

function Card(props: CardProps) {
  const [message, setMessage] = useState("");
  const messageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messageInputRef.current) {
      messageInputRef.current.focus();
      messageInputRef.current.setSelectionRange(0, 0);

      // Delay setting the cursor position
      setTimeout(() => {
        messageInputRef.current?.setSelectionRange(0, 0);
      }, 0);
    }
  }, []);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.setSelectionRange(0, 0);
  };

  return (
    <div className={cardcss.cardcontainer}>
      <div className={cardcss.imagecontainer}>
        <img src={props.imageUrl} alt="" />
      </div>

      <div className={cardcss.cardtitle}>
        <h3>{props.title}</h3>
      </div>

      <div className={cardcss.cardbody}>
        <p>{props.body}</p>

        <form>
          <div>
            <label className={cardcss.namelabel} htmlFor="name">
              Name:
            </label>
            <input
              className={cardcss.nameinput}
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className={cardcss.emailcontainer}>
            <label className={cardcss.emaillabel} htmlFor="email">
              Email:
            </label>
            <input
              className={cardcss.emailinput}
              type="text"
              id="email"
              name="email"
            />
          </div>

          <div className={cardcss.messagecontainer}>
            <label className={cardcss.messagelabel} htmlFor="message">
              Message:
            </label>
            <input
              ref={messageInputRef}
              className={cardcss.messageinput}
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={handleFocus}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Card;
