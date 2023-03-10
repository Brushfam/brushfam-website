import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import {learnData, productsData, servicesData} from "@/data/footerData";

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerDiv}>
        <div className={styles.footerSocial}>
          <img
            className={styles.brushfamLogo}
            src={"logos/brushfam-logo.svg"}
          />
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
          <div className={styles.socialDivMobile} style={{marginBottom: 37}}>
            <a href={"https://discord.gg/EARg6RCThP"}>
              <img src={"icons/discord-mobile.svg"} />
            </a>
            <a href={"https://twitter.com/Brushfam_io"}>
              <img src={"icons/twitter-mobile.svg"} />
            </a>
            <a href={"mailto:contact@727.ventures"}>
              <img src={"icons/mail-mobile.svg"} />
            </a>
          </div>
          <div className={styles.socialDivMobile}>
            <a href={"https://medium.com/727-ventures"}>
              <img src={"icons/medium-mobile.svg"} />
            </a>
            <a href={"https://t.me/openbrush"}>
              <img src={"icons/telegram-mobile.svg"} />
            </a>
            <a
                href={
                  "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
                }
            >
              <img src={"icons/element-mobile.svg"} />
            </a>
          </div>
        </div>
        <div className={styles.footerNavigation}>
          <div className={styles.itemsColumn}>
            <p className={styles.itemsTitle}>Products</p>
            {productsData &&
                productsData.map((item, i) => {
                  return <p key={i.toString()} className={styles.item}>
                    <Link href={item.link}>
                      {item.label}
                    </Link>
                  </p>;
                })}
          </div>
          <div className={styles.itemsColumn}>
            <p className={styles.itemsTitle}>Services & Solutions</p>
            {servicesData &&
                servicesData.map((item, i) => {
                  return <p key={i.toString()} className={styles.item}>
                    <Link href={item.link}>
                      {item.label}
                    </Link>
                  </p>;
                })}
          </div>
          <div className={styles.itemsColumn}>
            <p className={styles.itemsTitle}>Learn</p>
            {learnData &&
                learnData.map((item, i) => {
                  return <p key={i.toString()} className={styles.item}>
                    <Link href={item.link}>
                      {item.label}
                    </Link>
                  </p>;
                })}
          </div>
          {/*<div className={styles.itemsColumn}>*/}
          {/*  <p className={styles.itemsTitle}>Company</p>*/}
          {/*  <p className={styles.item}>About us</p>*/}
          {/*  <p className={styles.item}>Hiring</p>*/}
          {/*</div>*/}
          <div className={styles.itemsColumnLast}>
            <p className={styles.itemsTitle}>Contact us</p>
            <p className={styles.item}>contact@727.ventures</p>
          </div>
        </div>
      </div>
      <div className={styles.footerLastText}>
        <Link href={"/privacy-policy"}>
          <p>Privacy Policy</p>
        </Link>
        <p>Brushfam ©2022. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
