import React, {
  useState,
  useEffect,
  useRef,
  FocusEvent,
  FormEvent,
} from "react";
import newslettercss from "./Newsletter.module.css";
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
  const agreeCheckboxRef = useRef<HTMLInputElement>(null); // Ref for the checkbox

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
      messageInputRef.current &&
      agreeCheckboxRef.current && // Ensure the checkbox is checked
      agreeCheckboxRef.current.checked
    ) {
      const nameInput = nameInputRef.current.value;
      const emailInput = emailInputRef.current.value;
      const messageInput = messageInputRef.current.value;

      const contactData = {
        name: nameInput,
        email: emailInput,
        message: messageInput,
      };

      if (
        nameInput.trim() === "" ||
        emailInput.trim() === "" ||
        messageInput.trim() === ""
      ) {
        return; // Exit submitHandler if any required field is empty
      }

      await sendData("contactForm", contactData, randomString(10));
      setMessageSent(true);
      setCardCollapsed(true); // Collapse the card on message sent
    }
  };

  return (
    <div
      className={`${newslettercss.cardcontainer} ${
        isCardCollapsed ? newslettercss.collapsed : ""
      }`}
    >
      <div className={newslettercss.imagecontainer}>
        <img src={props.imageUrl} alt="" />
      </div>

      <div className={newslettercss.cardbody}>
        <p>{props.body}</p>

        {isMessageSent ? (
          <div className={newslettercss.messageSentContainer}>
            <p className={newslettercss.messageSentText}>
              Your message has been sent, we'll be in touch soon!
            </p>

            <button className={newslettercss.homebutton} type="submit">
              Home
            </button>

            <button className={newslettercss.learnbutton} type="submit">
              Learn more
            </button>
          </div>
        ) : (
          <form onSubmit={submitHandler}>
            <div className={newslettercss.newscard}>
              <h1 className={newslettercss.getournews}>Get our newsletter!</h1>
              <p className={newslettercss.signup}>
                Sign up for our newsletter to stay up-to-date with GDSC. It's
                free!
              </p>
              <label className={newslettercss.namelabel} htmlFor="name">
                Email*
              </label>
              <input
                className={newslettercss.nameinput}
                type="text"
                id="name"
                name="name"
                ref={nameInputRef}
              />
              <p className={newslettercss.readandagreed}>
                I have read and agreed with GDSC USYD's{" "}
                <span className={newslettercss.blueText}>Terms of Service</span>{" "}
                and{" "}
                <span className={newslettercss.blueText}>Privacy Policy</span>{" "}
                <input
                  type="checkbox"
                  id="agreeCheckbox"
                  className={`${newslettercss.agreeCheckbox} custom-checkbox`}
                  ref={agreeCheckboxRef}
                />
              </p>
            </div>

            <div className={newslettercss.messagecontainer}>
              <button className={newslettercss.sendbutton} type="submit">
                Sign up
              </button>
            </div>

            <button className={newslettercss.sendbutton} type="submit">
              d Sign up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Card;
export {};
