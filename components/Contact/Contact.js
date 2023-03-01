import styles from "@/styles/Contact/Contact.module.css";
import { useState } from "react";
import {SocialButtons, SocialButtonsMobile} from "@/components/Contact/SocialMedia";

const isEmail = (email) =>
    /^[A-Z0-9.!#$%&'*+\-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z0-9]+$/i.test(email);

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [sent, setSent] = useState(false);

  const SubmitButton = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      setClicked(true);

      if (!email || !message || !isEmail(email)) {
        document.getElementById("get-in-touch").scrollIntoView();
        return;
      }

      setSent(true);
      console.log("Sending");
      let data = {
        email,
        message,
      };
      await sendContactForm(data);
    };

    const sendContactForm = async (data) => {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setEmail("");
          setMessage("");
        }
      });
    }

    const DefaultSubmitButton = () => {
      return (
          <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className={styles.button}
          >
            Apply
          </button>
      );
    };

    // TODO: refactoring
    return sent ? (submitted ? (
        <p className={styles.submittedText}>Submitted!</p>
    ) : (
          <p className={styles.submittedText}>Submitting...</p>
    )) :
        (
            <DefaultSubmitButton />
        )
  }

  return (
    <section className={styles.section} id={"get-in-touch"}>
      <div className={styles.contactDiv}>
        <div className={styles.topDiv}>
          <p className={styles.headerText}>Get in touch</p>
          <p className={styles.descriptionText}>
            Work with tech experts to win the battle
          </p>
          <SocialButtons></SocialButtons>
        </div>
        <form method="post" id={"form"} className={styles.formDiv}>
          <label htmlFor={"email"} className={styles.label} style={clicked && !submitted && !(email && isEmail(email)) ? { color: "#CD0C0C" } : {}}>
            Email
          </label>
          <input
              type={"email"}
              name={"email"}
              placeholder={"johnsmith@gmail.com"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="off"
              autoCorrect={"off"}
              spellCheck={"false"}
              className={
                clicked && !submitted && !email && !isEmail(email)
                    ? styles.inputError
                    : styles.input
              }
          />
          <label htmlFor={"message"} className={styles.label} style={clicked && !submitted && !message ? { color: "#CD0C0C" } : {}}>
            Your Message
          </label>
          <input
              type={"text"}
              name={"message"}
              placeholder={"What do you wanna say to us"}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              autoComplete="off"
              autoCorrect={"off"}
              spellCheck={"false"}
              className={
                clicked && !submitted && !message
                    ? styles.inputError
                    : styles.input
              }
            />
          <div className={styles.buttonWrapper}>
            <SubmitButton></SubmitButton>
          </div>
          </form>
        <SocialButtonsMobile></SocialButtonsMobile>
        </div>
    </section>
  );
}
