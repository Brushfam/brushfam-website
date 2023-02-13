import styles from "@/styles/Contact.module.css";
import { useState } from "react";
import { render } from "react-dom";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    const form = document.getElementById("form");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    e.preventDefault();
    console.log("Sending");
    let data = {
      email,
      message,
    };

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
  };

  return (
    <section className={styles.section} id={"get-in-touch"}>
      <p className={styles.titleText}>Get in touch</p>
      <div className={styles.contactDiv}>
        <div className={styles.leftDiv}>
          <p className={styles.titleTextMobile}>Get in touch</p>
          <h1 className={styles.headerText}>
            Work with tech experts to win the battle
          </h1>
          <p className={styles.contactDescription}>
            Contact us to get ink! smart contracts audit, advisory, or in case
            of onboarding your business to Polkadot(web3).
          </p>
          <p className={styles.socialTitle}>Also you can contact us via:</p>
          <div className={styles.contactSocialDiv}>
            <div className={styles.socialNetwork}>
              <a href={"https://twitter.com/Brushfam_io"}>
                <img src={"icons/twitter-blue.svg"} />
                <p className={styles.socialNetworkTitle}>Twitter</p>
              </a>
            </div>
            <div className={styles.socialNetwork}>
              <a href={"https://medium.com/727-ventures"}>
                <img src={"icons/medium-blue.svg"} />
                <p className={styles.socialNetworkTitle}>Medium</p>
              </a>
            </div>
            <div className={styles.socialNetwork}>
              <a
                href={
                  "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
                }
              >
                <img src={"icons/element-blue.svg"} />
                <p className={styles.socialNetworkTitle}>Element</p>
              </a>
            </div>
            <div className={styles.lastSocialNetwork}>
              <a href={"https://discord.gg/EARg6RCThP"}>
                <img src={"icons/discord-blue.svg"} />
                <p className={styles.socialNetworkTitle}>Discord</p>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.formDiv}>
          <form method="post" id={"form"} >
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
                  handleSubmit(e);
                }}
                className={styles.button}
              >
                Apply
              </button>
            )}
          </form>
        </div>

        <div className={styles.socialMobile}>
          <p className={styles.socialTitleMobile}>
            Also you can contact us via:
          </p>
          <div className={styles.contactSocialDivMobile}>
            <div className={styles.socialNetwork}>
              <a href={"https://twitter.com/Brushfam_io"}>
                <img src={"icons/twitter-blue.svg"} />
                <p className={styles.socialNetworkTitle}>Twitter</p>
              </a>
            </div>
            <div className={styles.socialNetwork}>
              <a href={"https://medium.com/727-ventures"}>
                <img src={"icons/medium-blue.svg"} />
                <p className={styles.socialNetworkTitle}>Medium</p>
              </a>
            </div>
            <div className={styles.socialNetwork}>
              <a
                href={
                  "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
                }
              >
                <img src={"icons/element-blue.svg"} />
                <p className={styles.socialNetworkTitle}>Element</p>
              </a>
            </div>
            <div className={styles.lastSocialNetwork}>
              <a href={"https://discord.gg/EARg6RCThP"}>
                <img src={"icons/discord-blue.svg"} />
                <p className={styles.socialNetworkTitle}>Discord</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
