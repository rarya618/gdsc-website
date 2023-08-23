import React, {
  useState,
  useEffect,
  useRef,
  FocusEvent,
  FormEvent,
} from "react";
import cardcss from "./Card.module.css";
import { randomString } from "../../App";
import { sendData } from "../../firebase/config";

interface CardProps {
  imageUrl: string;
  title: string;
  body: string;
}

function Card(props: CardProps) {
  const [message, setMessage] = useState("");
  const [isMessageSent, setMessageSent] = useState(false);
  const [isCardCollapsed, setCardCollapsed] = useState(false); // State for card collapse
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
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

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    event.target.setSelectionRange(0, 0);
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      nameInputRef.current &&
      emailInputRef.current &&
      messageInputRef.current
    ) {
      const nameInput = nameInputRef.current.value;
      const emailInput = emailInputRef.current.value;
      const messageInput = messageInputRef.current.value;

      const contactData = {
        name: nameInput,
        email: emailInput,
        message: messageInput,
      };

      await sendData("contactForm", contactData, randomString(10));
      setMessageSent(true);
      setCardCollapsed(true); // Collapse the card on message sent
    }
  };

  return (
    <div
      className={`${cardcss.cardcontainer} ${
        isCardCollapsed ? cardcss.collapsed : ""
      }`}
    >
      <div className={cardcss.imagecontainer}>
        <img src={props.imageUrl} alt="" />
      </div>

      <div className={cardcss.cardbody}>
        <p>{props.body}</p>

        {isMessageSent ? (
          <div className={cardcss.messageSentContainer}>
            <p className={cardcss.messageSentText}>
              Your message has been sent, we'll be in touch soon!
            </p>

            <button className={cardcss.homebutton} type="submit">
              Home
            </button>

            <button className={cardcss.learnbutton} type="submit">
              Learn more
            </button>
          </div>
        ) : (
          <form onSubmit={submitHandler}>
            <div>
              <label className={cardcss.namelabel} htmlFor="name">
                Name*
              </label>
              <input
                className={cardcss.nameinput}
                type="text"
                id="name"
                name="name"
                ref={nameInputRef}
              />
            </div>

            <div className={cardcss.emailcontainer}>
              <label className={cardcss.emaillabel} htmlFor="email">
                Email*
              </label>
              <input
                className={cardcss.emailinput}
                type="text"
                id="email"
                name="email"
                ref={emailInputRef}
              />
            </div>

            <div className={cardcss.messagecontainer}>
              <label className={cardcss.messagelabel} htmlFor="message">
                Message*
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

              <button className={cardcss.sendbutton} type="submit">
                Send
              </button>
            </div>

            <button className={cardcss.sendbutton} type="submit">
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Card;
