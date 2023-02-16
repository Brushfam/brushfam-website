import styles from "@/styles/Contact.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const SubmitButton = () => {
    const handleSubmit = async (e) => {
      const form = document.getElementById("form");
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      e.preventDefault();
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

    // const SubmittedWrapper = (value) => {
    //   console.log("+")
    //   return value ? (
    //       <p className={styles.submittedText}>Submitted!</p>
    //   ) : (
    //       <p className={styles.submittedText}>Sending...</p>
    //   );
    // };

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
            <Link href={"https://twitter.com/Brushfam_io"}>
              <div className={styles.socialButton}>
                <img src={"/icons/twitter-social-icon.svg"}/>
                <p>Twitter</p>
              </div>
            </Link>
            <Link href={"https://medium.com/727-ventures"}>
              <div className={styles.socialButton}>
                <img src={"/icons/medium-social-icon.svg"}/>
                <p>Medium</p>
              </div>
            </Link>
          </div>
          <div className={styles.socialRow}>
            <Link href={"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"}>
              <div className={styles.socialButton}>
                <img src={"/icons/element-social-icon.svg"}/>
                <p>Element</p>
              </div>
            </Link>
            <Link href={"https://discord.gg/EARg6RCThP"}>
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
          <label htmlFor={"email"} className={styles.label}>
            Email
          </label>
          <input
              type={"email"}
              name={"email"}
              placeholder={"johnsmith@gmail.com"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={styles.input}
              required
          />
          <label htmlFor={"message"} className={styles.label}>
            Your Message
          </label>
          <input
              type={"text"}
              name={"message"}
              placeholder={"What do you wanna say to us"}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={styles.input}
              required
            />
            <SubmitButton></SubmitButton>
          </form>
        </div>
      <div className={styles.contactDivMobileWrapper}>
        <p className={styles.headerText}>Get in touch</p>
        <p className={styles.descriptionText}>
          Work with tech experts to win the battle
        </p>
        <div className={styles.contactDivMobile}>
          <form method="post" id={"mobileForm"} className={styles.formDiv}>
            <label htmlFor={"email"} className={styles.label}>
              Email
            </label>
            <input
                type={"email"}
                name={"email"}
                placeholder={"johnsmith@gmail.com"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={styles.input}
                required
            />
            <label htmlFor={"message"} className={styles.label}>
              Your Message
            </label>
            <input
                type={"text"}
                name={"message"}
                placeholder={"What do you wanna say to us"}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className={styles.input}
                required
            />
            {submitted ? (
                <p className={styles.submittedText}>Submitted!</p>
            ) : (
                <button
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e, "mobileForm");
                    }}
                    className={styles.button}
                >
                  Apply
                </button>
            )}
          </form>
        </div>
        <SocialButtons></SocialButtons>
      </div>
    </section>
  );
}
