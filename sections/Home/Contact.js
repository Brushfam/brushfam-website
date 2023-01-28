import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section}>
      <p className={styles.titleText}>Get in touch</p>
      <div className={styles.contactDiv}>
        <div className={styles.leftDiv}>
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
          <form method="post">
            <label htmlFor={"email"} className={styles.label}>
              Email
            </label>
            <input
              type={"email"}
              name={"email"}
              placeholder={"johnsmith@gmail.com"}
              className={styles.input}
            />
            <label htmlFor={"message"} className={styles.label}>
              Your Message
            </label>
            <input
              type={"text"}
              name={"message"}
              placeholder={"What do you wanna say for us"}
              className={styles.input}
            />
            <button type="button" className={styles.button}>
              Apply
            </button>
          </form>
        </div>

        <div className={styles.socialMobile}>
          <p className={styles.socialTitleMobile}>Also you can contact us via:</p>
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
