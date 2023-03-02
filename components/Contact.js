import styles from "@/styles/Contact.module.css";
import { useState } from "react";
import Link from "next/link";

const isEmail = (email) =>
    /^[A-Z0-9.!#$%&'*+\-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z0-9]+$/i.test(email);

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [sent, setSent] = useState(false);

  const SubmitButton = ({formName}) => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      setClicked(true);

      if (!email || !message || !isEmail(email)) {
        document.getElementById(formName).scrollIntoView();
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

  const SocialButtons = () => {
    return(
        <div className={styles.socialWrapper}>
          <div className={styles.socialRow}>
            <Link href={"https://twitter.com/Brushfam_io"} target="_blank">
              <div className={styles.socialButton}>
                <img src={"/icons/twitter-social-icon.svg"}/>
                <p>Twitter</p>
              </div>
            </Link>
            <Link href={"https://medium.com/727-ventures"} target="_blank">
              <div className={styles.socialButton}>
                <img src={"/icons/medium-social-icon.svg"}/>
                <p>Medium</p>
              </div>
            </Link>
          </div>
          <div className={styles.socialRow}>
            <Link href={"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"} target="_blank">
              <div className={styles.socialButton}>
                <img src={"/icons/element-social-icon.svg"}/>
                <p>Element</p>
              </div>
            </Link>
            <Link href={"https://discord.gg/EARg6RCThP"} target="_blank">
              <div className={styles.socialButton}>
                <img src={"/icons/discord-social-icon.svg"}/>
                <p>Discord</p>
              </div>
            </Link>
          </div>
        </div>
    )
  }

  return (
    <section className={styles.section} id={"get-in-touch"}>
      <div className={styles.contactDiv}>
        <div className={styles.leftDiv}>
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
            <SubmitButton formName={"form"}></SubmitButton>
          </form>
        </div>
      <div className={styles.contactDivMobileWrapper}>
        <p className={styles.headerText}>Get in touch</p>
        <p className={styles.descriptionText}>
          Work with tech experts to win the battle
        </p>
        <div className={styles.contactDivMobile}>
          <form method="post" id={"mobileForm"} className={styles.formDiv}>
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
            <SubmitButton formName={"mobileForm"}></SubmitButton>
          </form>
        </div>
        <SocialButtons></SocialButtons>
      </div>
    </section>
  );
}
