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
      // Remove the attempts to set selection range for a hidden input field
      // messageInputRef.current.setSelectionRange(0, 0);
      // setTimeout(() => {
      //   messageInputRef.current?.setSelectionRange(0, 0);
      // }, 0);
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
          <form
            action="https://api.web3forms.com/submit"
            onSubmit={submitHandler} //if doesn't work replace with {submitHandler}
            method="POST"
          >
            <div>
              <label className={cardcss.namelabel} htmlFor="name">
                Name*
              </label>
              <input
                className={cardcss.nameinput}
                type="text"
                id="name"
                name="61068c42-210a-4ec2-be62-61086d21f66e"
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
                name="61068c42-210a-4ec2-be62-61086d21f66e"
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
                type="hidden"
                id="message"
                name="access_key"
                value="61068c42-210a-4ec2-be62-61086d21f66e"
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
        <script
          src="https://web3forms.com/client/script.js"
          async
          defer
        ></script>
      </div>
    </div>
  );
}

export default Card;

// import React, {
//   useState,
//   useEffect,
//   useRef,
//   FocusEvent,
//   FormEvent,
// } from "react";
// import newslettercss from "./Newsletter.module.css";
// import { randomString } from "../../App";
// import { sendData } from "../../firebase/config";

// interface CardProps {
//   imageUrl: string;
//   title: string;
//   body: string;
// }

// function Card(props: CardProps) {
//   const [isCardCollapsed, setCardCollapsed] = useState(false); // State for card collapse
//   const emailInputRef = useRef<HTMLInputElement>(null);
//   const agreeCheckboxRef = useRef<HTMLInputElement>(null); // Ref for the checkbox

//   const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
//     event.target.setSelectionRange(0, 0);
//   };

//   const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (
//       emailInputRef.current &&
//       agreeCheckboxRef.current && // Ensure the checkbox is checked
//       agreeCheckboxRef.current.checked
//     ) {
//       const emailInput = emailInputRef.current.value;

//       const contactData = {
//         email: emailInput,
//       };

//       if (emailInput.trim() === "") {
//         return; // Exit submitHandler if any required field is empty
//       }

//       await sendData("contactForm", contactData, randomString(10));
//       setCardCollapsed(true); // Collapse the card on message sent
//     }
//   };

//   return (
//     <div
//       className={`${newslettercss.cardcontainer} ${
//         isCardCollapsed ? newslettercss.collapsed : ""
//       }`}
//     >
//       <div className={newslettercss.imagecontainer}>
//         <img src={props.imageUrl} alt="" />
//       </div>

//       <div className={newslettercss.cardbody}>
//         <p>{props.body}</p>

//         {isCardCollapsed ? (
//           <div className={newslettercss.messageSentContainer}>
//             <p className={newslettercss.messageSentText}>
//               Thank you for subscribing to the GDSC newsletter!
//             </p>

//             <button className={newslettercss.homebutton} type="submit">
//               Home
//             </button>

//             <button className={newslettercss.learnbutton} type="submit">
//               Learn more
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={submitHandler}>
//             <div className={newslettercss.newscard}>
//               <h1 className={newslettercss.getournews}>Get our newsletter!</h1>
//               <p className={newslettercss.signup}>
//                 Sign up for our newsletter to stay up-to-date with GDSC. It's
//                 free!
//               </p>
//               <label className={newslettercss.emaillabel} htmlFor="name">
//                 Email*
//               </label>
//               <input
//                 className={newslettercss.emailinput}
//                 type="text"
//                 id="name"
//                 name="name"
//                 ref={emailInputRef}
//               />
//               <p className={newslettercss.readandagreed}>
//                 I have read and agreed with GDSC USYD's{" "}
//                 <span className={newslettercss.blueText}>Terms of Service</span>{" "}
//                 and{" "}
//                 <span className={newslettercss.blueText}>Privacy Policy</span>{" "}
//                 <input
//                   type="checkbox"
//                   id="agreeCheckbox"
//                   className={`${newslettercss.agreeCheckbox} custom-checkbox`}
//                   ref={agreeCheckboxRef}
//                 />
//               </p>
//             </div>

//             <button
//               className={newslettercss.newslettersendbutton}
//               type="submit"
//             >
//               Send
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Card;
// export {};
