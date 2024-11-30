import styles from "@/styles/MobileNavbar.module.css";
import Link from "next/link";
import { useState } from "react";

const ProductsList = () => {
  return (
    <ul>
      <li>
        <Link href={"https://openbrush.brushfam.io/"} className={styles.link}>
          <img src="nav-icons/nav-openbrush.svg" alt={"openbrush"} />
          <p>OpenBrush</p>
        </Link>
      </li>
      <li>
        <Link href={"https://github.com/727-Ventures/sol2ink"} className={styles.link}>
          <img src="nav-icons/nav-sol2Ink.svg" alt={"sol2Ink"} />
          <p>Sol2ink</p>
        </Link>
      </li>
      <li>
        <Link
          href={"https://github.com/727-Ventures/typechain-polkadot"}
          className={styles.link}
          style={{ marginBottom: 0 }}
        >
          <img src="nav-icons/nav-typechain.svg" alt={"typechain"} />
          <p>Typechain</p>
        </Link>
      </li>
    </ul>
  );
};

const ServicesList = () => {
  return (
    <ul>
      <li>
        <Link href={"/advisory-subscription"} className={styles.link}>
          <img src="nav-icons/nav-advisory.svg" alt={"advisory"} style={{ width: 15 }} />
          <p>Advisory subscription</p>
        </Link>
      </li>
      <li>
        <Link href={"security-audits"} className={styles.link}>
          <img src="nav-icons/nav-audit.svg" alt={"audit"} style={{ width: 15 }} />
          <p>Security audits</p>
        </Link>
      </li>
      <li>
        <Link href={"/onboard-to-web3"} className={styles.link}>
          <img src="nav-icons/nav-web3.svg" alt={"web3"} style={{ width: 18, marginRight: 7 }} />
          <p>Web3 onboard</p>
        </Link>
      </li>
      <li>
        <Link href={"/crypto-payment"} className={styles.link} style={{ marginBottom: 0 }}>
          <img src="nav-icons/nav-payment.svg" alt={"payment"} style={{ width: 14 }} />
          <p>Crypto payment</p>
        </Link>
      </li>
    </ul>
  );
};

const LearnList = () => {
  return (
    <ul>
      <li>
        <Link href={"https://discord.gg/xkg8YQhSF6"} className={styles.link}>
          <img src="nav-icons/nav-discord.svg" alt={"discord"} />
          <p>Community Discord</p>
        </Link>
      </li>
      <li>
        <Link
          href={"https://learn.brushfam.io/"}
          target="_blank"
          className={styles.link}
          style={{ marginBottom: 0 }}
        >
          <img
            src="nav-icons/nav-docs.svg"
            alt={"docs"}
            style={{ paddingLeft: 5, paddingRight: 4 }}
          />
          <p>Docs</p>
        </Link>
      </li>
    </ul>
  );
};

const CompanyList = () => {
  return (
    <ul>
      <li>
        <Link href={"/about-us"} className={styles.link}>
          <p>About us</p>
        </Link>
      </li>
      <li>
        <Link href={"/hiring"} className={styles.link} style={{ marginBottom: 0 }}>
          <p>Hiring</p>
        </Link>
      </li>
    </ul>
  );
};

const SocialBlock = () => {
  return (
    <div className={styles.social}>
      <Link href={"https://t.me/openbrush"} style={{ marginRight: 38 }}>
        <img src={"icons/socials/telegram.svg"} alt={"telegram"} style={{ width: 22 }} />
      </Link>
      <Link
        href={"https://instagram.com/727_ventures?igshid=ZmVmZTY5ZGE="}
        style={{ marginRight: 38 }}
      >
        <img src={"icons/socials/inst-mobile.svg"} alt={"instagram"} />
      </Link>
      <Link href={"https://twitter.com/Brushfam_io"} style={{ marginRight: 38 }}>
        <img src={"icons/socials/twitter.svg"} alt={"twitter"} style={{ width: 21 }} />
      </Link>
      <Link href={"mailto:info@brushfam.io"}>
        <img src={"icons/socials/mail.svg"} alt={"mail"} style={{ width: 24 }} />
      </Link>
    </div>
  );
};

const NavbarItem = ({ name, arrow, toggleSection, children }) => {
  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          toggleSection(name, arrow);
        }}
      >
        {name}
        <img id={arrow} src={"icons/arrow.svg"} alt={"arrow"} className={styles.arrow} />
      </button>
      {children}
    </div>
  );
};

export const MobileNavbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened(!isOpened);
    const icon = document.getElementById("navbar-bottom");
    isOpened ? (icon.style.visibility = "visible") : (icon.style.visibility = "hidden");
  }

  const [arrowOpen, setArrowOpen] = useState(false);
  const [prevArrowId, setPrevArrowId] = useState("");
  const [isOpen, setIsOpen] = useState({
    Products: false,
    Services: false,
    Learn: false,
    Company: false,
  });

  function toggleSection(section, arrowId) {
    setIsOpen((prevState) => ({
      Products: section === "Products" ? !prevState.Products : false,
      Services: section === "Services" ? !prevState.Services : false,
      Learn: section === "Learn" ? !prevState.Learn : false,
      Company: section === "Company" ? !prevState.Company : false,
    }));
    rotateArrow(arrowId);
  }

  function rotateArrow(element) {
    const icon = document.getElementById(element);
    console.log(icon);
    const prevIcon = document.getElementById(prevArrowId);
    const rotate0 = "rotate(0deg)";
    const rotate180 = "rotate(180deg)";
    const transformLinear = "transform 0.2s linear";

    if (prevArrowId === element) {
      if (arrowOpen) {
        icon.style.transform = rotate0;
        icon.style.transition = transformLinear;
        setArrowOpen(!arrowOpen);
      } else {
        icon.style.transform = rotate180;
        icon.style.transition = transformLinear;
        setArrowOpen(!arrowOpen);
      }
    } else if (arrowOpen) {
      prevIcon.style.transform = rotate0;
      prevIcon.style.transition = transformLinear;
      icon.style.transform = rotate180;
      icon.style.transition = transformLinear;
    } else {
      icon.style.transform = rotate180;
      icon.style.transition = transformLinear;
      setArrowOpen(!arrowOpen);
    }

    setPrevArrowId(element);
  }

  return (
    <div>
      <div className={styles.navbarMobile} id={"navbar-bottom"}>
        <Link href={"/"}>
          <img src={"logos/brushfam-mobile-logo.svg"} alt={"brushfam mobile logo"} />
        </Link>
        <img
          src={"nav-icons/mobile-navbar-button.svg"}
          alt={"mobile navbar button"}
          className={styles.navbarMenuButton}
          onClick={toggle}
        />
      </div>

      {isOpened ? (
        <div className={styles.navbarContainer}>
          <img
            src={"icons/exit-button.svg"}
            alt={"exit button"}
            className={styles.exitButton}
            onClick={toggle}
          />
          <Link href={"/"} style={{ marginLeft: 16, marginBottom: 43 }}>
            <img src={"logos/brushfam-logo.svg"} alt={"brushfam logo"} style={{ maxWidth: 230 }} />
          </Link>

          <NavbarItem name={"Products"} arrow={"arrow1"} toggleSection={toggleSection}>
            {isOpen.Products ? <ProductsList /> : null}
          </NavbarItem>
          <NavbarItem name={"Services"} arrow={"arrow2"} toggleSection={toggleSection}>
            {isOpen.Services ? <ServicesList /> : null}
          </NavbarItem>
          <NavbarItem name={"Learn"} arrow={"arrow3"} toggleSection={toggleSection}>
            {isOpen.Learn ? <LearnList /> : null}
          </NavbarItem>
          <NavbarItem name={"Company"} arrow={"arrow4"} toggleSection={toggleSection}>
            {isOpen.Company ? <CompanyList /> : null}
          </NavbarItem>

          <SocialBlock />
        </div>
      ) : null}
    </div>
  );
};
