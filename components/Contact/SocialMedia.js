import styles from "@/styles/Contact/SocialMedia.module.css";
import Link from "next/link";

export const SocialButtons = () => {
  return (
    <div className={styles.socialWrapper}>
      <Link href={"https://twitter.com/Brushfam_io"} className={styles.socialButton}>
          <img src={"/icons/contact-form/twitter-contact.svg"} />
          <p>Twitter</p>
      </Link>
        <Link href={"https://discord.gg/EARg6RCThP"} className={styles.socialButton}>
            <img src={"/icons/contact-form/discord-contact.svg"} />
            <p>Discord</p>
        </Link>
      <Link
        href={
          "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
        }
        className={styles.socialButton}
      >
          <img src={"/icons/contact-form/element-contact.svg"} />
          <p>Element</p>
      </Link>
        <Link href={"https://medium.com/brushfam"} className={styles.socialButton} style={{marginRight: 0}}>
            <img src={"/icons/contact-form/medium-contact.svg"} />
            <p>Medium</p>
        </Link>
    </div>
  );
};


export const SocialButtonsMobile = () => {
    return (
        <div className={styles.socialWrapperMobile}>
            <div className={styles.socialBlock} style={{border: "none", paddingTop: 0}}>
                <Link href={"https://twitter.com/Brushfam_io"} className={styles.socialButton}>
                    <img src={"/icons/contact-form/twitter-contact.svg"} style={{width: 20, height: 17, marginLeft: 10}}/>
                    <p>Twitter</p>
                </Link>
            </div>
            <div className={styles.socialBlock}>
                <Link href={"https://discord.gg/EARg6RCThP"} className={styles.socialButton}>
                    <img src={"/icons/contact-form/discord-contact.svg"} style={{width: 24, height: 17, marginLeft: 6}}/>
                    <p>Discord</p>
                </Link>
            </div>
            <div className={styles.socialBlock}>
                <Link href={"https://medium.com/727-ventures"} className={styles.socialButton}>
                    <img src={"/icons/contact-form/medium-contact.svg"} style={{width: 30, height: 17}}/>
                    <p>Medium</p>
                </Link>
            </div>
            <div className={styles.socialBlock} style={{paddingBottom: 0}}>
                <Link
                    href={
                        "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
                    }
                    className={styles.socialButton}
                >
                    <img src={"/icons/contact-form/element-contact.svg"} style={{width: 17, height: 17, marginLeft: 13}}/>
                    <p>Element</p>
                </Link>
            </div>
        </div>
    );
};
