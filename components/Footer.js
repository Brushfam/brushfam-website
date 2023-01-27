import styles from "@/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerDiv}>
        <div className={styles.footerSocial}>
          <img className={styles.brushfamLogo} src={"logos/brushfam-logo.svg"} />
          <div className={styles.socialDiv}>
            <a href={"https://www.linkedin.com/company/727-ventures-vs/"}>
              <img src={"icons/in.svg"} />
            </a>
            <a href={"https://instagram.com/727_ventures?igshid=ZmVmZTY5ZGE="}>
              <img src={"icons/inst.svg"} />
            </a>
            <a href={"https://twitter.com/Brushfam_io"}>
              <img src={"icons/twitter.svg"} />
            </a>
            <a href={"https://t.me/openbrush"}>
              <img src={"icons/telegram.svg"} />
            </a>
            <a href={"https://discord.gg/EARg6RCThP"}>
              <img src={"icons/discord.svg"} />
            </a>
            <a href={"https://medium.com/727-ventures"}>
              <img src={"icons/medium.svg"} />
            </a>
              <a href={"mailto:contact@727.ventures"}>
                  <img src={"icons/mail.svg"} />
              </a>
          </div>
        </div>
        <div className={styles.footerNavigation}>
          <div>
            <p>Products</p>
          </div>
          <div>
            <p>Services & Solutions</p>
          </div>
          <div>
            <p>Learn</p>
          </div>
          <div>
            <p>Blog</p>
          </div>
          <div>
            <p>Company</p>
          </div>
          <div>
            <p>Contact us</p>
            {/*<p>contact@727.ventures</p>*/}
          </div>
        </div>
      </div>
        <div className={styles.footerTextDiv}>
            <p className={styles.footerText}>Brushfam ©2022. All rights reserved.</p>
        </div>
    </section>
  );
};

export default Footer;
