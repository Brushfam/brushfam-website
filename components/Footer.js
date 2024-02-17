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
            <a
                href={
                  "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
                }
            >
              <img src={"icons/element.svg"} style={{width: 16}}/>
            </a>
            <a href={"https://twitter.com/Brushfam_io"}>
              <img src={"icons/twitter.svg"} style={{width: 16}}/>
            </a>
            <a href={"https://t.me/openbrush"}>
              <img src={"icons/telegram.svg"} style={{width: 17}}/>
            </a>
            <a href={"https://discord.gg/xkg8YQhSF6"}>
              <img src={"icons/discord.svg"} style={{width: 16}}/>
            </a>
            <a href={"https://medium.com/brushfam"}>
              <img src={"icons/medium.svg"} style={{width: 17}}/>
            </a>
            <a href={"mailto:info@brushfam.io"}>
              <img src={"icons/mail.svg"} style={{width: 18}}/>
            </a>
            <a href={"https://www.youtube.com/@brushfam_io"}>
              <img src={"icons/youtube.svg"} style={{width: 18}}/>
            </a>
          </div>
          <div className={styles.socialDivMobile} style={{marginBottom: 37, columnGap: 40}}>
            <a href={"https://discord.gg/xkg8YQhSF6"}>
              <img src={"icons/discord.svg"} />
            </a>
            <a href={"https://twitter.com/Brushfam_io"}>
              <img src={"icons/twitter.svg"} />
            </a>
            <a href={"mailto:info@brushfam.io"}>
              <img src={"icons/mail.svg"} />
            </a>
          </div>
          <div className={styles.socialDivMobile} style={{marginBottom: 37, columnGap: 50}}>
            <a href={"https://medium.com/727-ventures"}>
              <img src={"icons/medium.svg"} />
            </a>
            <a href={"https://t.me/openbrush"}>
              <img src={"icons/telegram.svg"} />
            </a>
          </div>
          <div className={styles.socialDivMobile} style={{columnGap: 50}}>
            <a
                href={
                  "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
                }
            >
              <img src={"icons/element.svg"} />
            </a>
            <a href={"https://www.youtube.com/@brushfam_io"}>
              <img src={"icons/youtube.svg"} style={{width: 48}}/>
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
          <div className={styles.itemsColumnLast}>
            <p className={styles.itemsTitle}>Contact us</p>
            <p className={styles.item}>info@brushfam.io</p>
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
