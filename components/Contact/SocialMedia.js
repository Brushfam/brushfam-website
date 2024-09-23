import styles from "@/styles/Contact/SocialMedia.module.css";
import Link from "next/link";

export const SocialButtons = () => {
  return (
    <div className={styles.socialWrapper}>
      <Link href={"https://twitter.com/Brushfam_io"} className={styles.socialButton}>
        <img src={"icons/contact-form/twitter-contact.svg"} alt={"twitter contact"} />
        <p>Twitter</p>
      </Link>
      <Link href={"https://discord.gg/xkg8YQhSF6"} className={styles.socialButton}>
        <img src={"icons/contact-form/discord-contact.svg"} alt={"discord contact"} />
        <p>Discord</p>
      </Link>
      <Link
        href={
          "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
        }
        className={styles.socialButton}
      >
        <img src={"icons/contact-form/element-contact.svg"} alt={"element contact"} />
        <p>Element</p>
      </Link>
      <Link
        href={"https://medium.com/brushfam"}
        className={styles.socialButton}
        style={{ marginRight: 0 }}
      >
        <img src={"icons/contact-form/medium-contact.svg"} alt={"medium contact"} />
        <p>Medium</p>
      </Link>
    </div>
  );
};

export const SocialButtonsMobile = () => {
  return (
    <div className={styles.socialWrapperMobile}>
      <div className={styles.socialBlock} style={{ border: "none", paddingTop: 0 }}>
        <Link href={"https://twitter.com/Brushfam_io"} className={styles.socialButton}>
          <img
            src={"icons/contact-form/twitter-contact.svg"}
            alt={"twitter contact"}
            style={{ width: 20, height: 17, marginLeft: 10 }}
          />
          <p>Twitter</p>
        </Link>
      </div>
      <div className={styles.socialBlock}>
        <Link href={"https://discord.gg/xkg8YQhSF6"} className={styles.socialButton}>
          <img
            src={"icons/contact-form/discord-contact.svg"}
            alt={"discord contact"}
            style={{ width: 24, height: 17, marginLeft: 6 }}
          />
          <p>Discord</p>
        </Link>
      </div>
      <div className={styles.socialBlock}>
        <Link href={"https://medium.com/727-ventures"} className={styles.socialButton}>
          <img
            src={"icons/contact-form/medium-contact.svg"}
            alt={"medium contact"}
            style={{ width: 30, height: 17 }}
          />
          <p>Medium</p>
        </Link>
      </div>
      <div className={styles.socialBlock} style={{ paddingBottom: 0 }}>
        <Link
          href={
            "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
          }
          className={styles.socialButton}
        >
          <img
            src={"icons/contact-form/element-contact.svg"}
            alt={"element contact"}
            style={{ width: 17, height: 17, marginLeft: 13 }}
          />
          <p>Element</p>
        </Link>
      </div>
    </div>
  );
};
