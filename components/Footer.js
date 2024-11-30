import styles from "@/styles/components/Footer.module.css";
import Link from "next/link";
import { learnData, productsData, servicesData } from "@/data/footerData";

const SocialDivLink = ({ link, name, width }) => {
  return (
    <a href={link}>
      <img src={"icons/socials/" + name + ".svg"} alt={name} style={{ width: width }} />
    </a>
  );
};

const SocialDiv = () => {
  return (
    <div className={styles.socialDiv}>
      <SocialDivLink
        link={
          "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
        }
        name={"element"}
        width={16}
      />
      <SocialDivLink link={"https://twitter.com/Brushfam_io"} name={"twitter"} width={16} />
      <SocialDivLink link={"https://t.me/openbrush"} name={"telegram"} width={17} />
      <SocialDivLink link={"https://discord.gg/xkg8YQhSF6"} name={"discord"} width={16} />
      <SocialDivLink link={"https://medium.com/brushfam"} name={"medium"} width={17} />
      <SocialDivLink link={"mailto:info@brushfam.io"} name={"mail"} width={18} />
      <SocialDivLink link={"https://www.youtube.com/@brushfam_io"} name={"youtube"} width={18} />
    </div>
  );
};

const FooterSocial = () => {
  return (
    <div className={styles.footerSocial}>
      <img className={styles.brushfamLogo} src={"logos/brushfam-logo.svg"} alt={"brushfam logo"} />
      <SocialDiv />
      <div className={styles.socialDivMobile} style={{ marginBottom: 37, columnGap: 40 }}>
        <a href={"https://discord.gg/xkg8YQhSF6"}>
          <img src={"icons/socials/discord.svg"} alt={"discord"} />
        </a>
        <a href={"https://twitter.com/Brushfam_io"}>
          <img src={"icons/socials/twitter.svg"} alt={"twitter"} />
        </a>
        <a href={"mailto:info@brushfam.io"}>
          <img src={"icons/socials/mail.svg"} alt={"mail"} />
        </a>
      </div>
      <div className={styles.socialDivMobile} style={{ marginBottom: 37, columnGap: 50 }}>
        <a href={"https://medium.com/727-ventures"}>
          <img src={"icons/socials/medium.svg"} alt={"medium"} />
        </a>
        <a href={"https://t.me/openbrush"}>
          <img src={"icons/socials/telegram.svg"} alt={"telegram"} />
        </a>
      </div>
      <div className={styles.socialDivMobile} style={{ columnGap: 50 }}>
        <a
          href={
            "https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"
          }
        >
          <img src={"icons/socials/element.svg"} alt={"element"} />
        </a>
        <a href={"https://www.youtube.com/@brushfam_io"}>
          <img src={"icons/socials/youtube.svg"} alt={"youtube"} style={{ width: 48 }} />
        </a>
      </div>
    </div>
  );
};

const ItemsColumn = ({ name, items }) => {
  return (
    <div className={styles.itemsColumn}>
      <p className={styles.itemsTitle}>{name}</p>
      {items.map((item, i) => {
        return (
          <p key={i.toString()} className={styles.item}>
            <Link href={item.link}>{item.label}</Link>
          </p>
        );
      })}
    </div>
  );
};

const FooterNavigation = () => {
  return (
    <div className={styles.footerNavigation}>
      <ItemsColumn name={"Products"} items={productsData} />
      <ItemsColumn name={"Services & Solutions"} items={servicesData} />
      <ItemsColumn name={"Learn"} items={learnData} />
      <div className={styles.itemsColumnLast}>
        <p className={styles.itemsTitle}>Contact us</p>
        <a
          className={styles.item}
          style={{ textDecoration: "underline" }}
          href={"mailto:info@brushfam.io"}
        >
          info@brushfam.io
        </a>
      </div>
    </div>
  );
};

const BottomText = () => {
  return (
    <div className={styles.footerBottomText}>
      <Link href={"/privacy-policy"}>
        <p>Privacy Policy</p>
      </Link>
      <p>Brushfam ©2022. All rights reserved.</p>
    </div>
  );
};

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerDiv}>
        <FooterSocial />
        <FooterNavigation />
      </div>
      <BottomText />
    </section>
  );
};

export default Footer;
