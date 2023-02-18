import styles from "@/styles/MobileNavbar.module.css";
import Link from "next/link";
import { useState } from "react";

export const MobileNavbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened(!isOpened);

    const icon = document.getElementById("navbar-bottom");
    if (isOpened) {
      icon.style.visibility = "visible";
    } else {
      icon.style.visibility = "hidden";
    }
  }

  const [arrowOpen, setArrowOpen] = useState(false);
  const [prevArrowId, setPrevArrowId] = useState("");
  const [ProductsIsOpened, setProductsIsOpened] = useState(false);
  const [ServicesIsOpened, setServicesIsOpened] = useState(false);
  const [LearnIsOpened, setLearnIsOpened] = useState(false);
  const [CompanyIsOpened, setCompanyIsOpened] = useState(false);

  function rotateArrow(element) {
    const icon = document.getElementById(element);
    const prevIcon = document.getElementById(prevArrowId);

    if (prevArrowId === element) {
      if (arrowOpen) {
        icon.style.transform = "rotate(0deg)";
        icon.style.transition = "transform 0.2s linear";
        setArrowOpen(!arrowOpen);
      } else {
        icon.style.transform = "rotate(180deg)";
        icon.style.transition = "transform 0.2s linear";
        setArrowOpen(!arrowOpen);
      }
    } else if (arrowOpen) {
      prevIcon.style.transform = "rotate(0deg)";
      prevIcon.style.transition = "transform 0.2s linear";
      icon.style.transform = "rotate(180deg)";
      icon.style.transition = "transform 0.2s linear";
    } else {
      icon.style.transform = "rotate(180deg)";
      icon.style.transition = "transform 0.2s linear";
      setArrowOpen(!arrowOpen);
    }

    setPrevArrowId(element);
  }

  function setProducts() {
    setProductsIsOpened(!ProductsIsOpened);
    setServicesIsOpened(false);
    setLearnIsOpened(false);
    setCompanyIsOpened(false);
    rotateArrow("arrow1");
  }

  function setServices() {
    setProductsIsOpened(false);
    setServicesIsOpened(!ServicesIsOpened);
    setLearnIsOpened(false);
    setCompanyIsOpened(false);
    rotateArrow("arrow2");
  }

  function setLearn() {
    setProductsIsOpened(false);
    setServicesIsOpened(false);
    setLearnIsOpened(!LearnIsOpened);
    setCompanyIsOpened(false);
    rotateArrow("arrow3");
  }

  function setCompany() {
    setProductsIsOpened(false);
    setServicesIsOpened(false);
    setLearnIsOpened(false);
    setCompanyIsOpened(!CompanyIsOpened);
    rotateArrow("arrow4");
  }

  return (
    <div>
      <div className={styles.navbarMobile} id={"navbar-bottom"}>
        <img src={"/logos/brushfam-mini-logo.svg"} />
        <img
          src={"/navbar-button.svg"}
          className={styles.navbarMenuButton}
          onClick={toggle}
        />
      </div>

      {isOpened ? (
        <div className={styles.navbarContainer}>
          <img
            src={"/exit-button.svg"}
            className={styles.exitButton}
            onClick={toggle}
          />
          <Link href={"/"} style={{ marginLeft: 16, marginBottom: 43 }}>
            <img src={"/logos/brushfam-logo.svg"} style={{ maxWidth: 230 }} />
          </Link>
          <div className={styles.item}>
            <button
              id={"button1"}
              type="button"
              className={styles.button}
              onClick={setProducts}
            >
              Products
              <img id={"arrow1"} src={"/arrow.svg"} className={styles.arrow} />
            </button>
            {ProductsIsOpened ? (
              <ul>
                <li>
                  <Link href={"https://openbrush.io/"} className={styles.link}>
                    <img src="/nav-icons/nav-openbrush.svg" />
                    <p>OpenBrush</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://github.com/727-Ventures/sol2ink"}
                    className={styles.link}
                  >
                    <img src="/nav-icons/nav-sol2Ink.svg" />
                    <p>Sol2ink</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://github.com/727-Ventures/typechain-polkadot"}
                    className={styles.link}
                    style={{marginBottom: 0}}
                  >
                    <img src="/nav-icons/nav-typechain.svg" />
                    <p>Typechain</p>
                  </Link>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.item}>
            <button
              type="button"
              className={styles.button}
              onClick={setServices}
            >
              Services & Solutions
              <img id={"arrow2"} src={"/arrow.svg"} className={styles.arrow} />
            </button>
            {ServicesIsOpened ? (
              <ul>
                <li>
                  <Link href={"/onboard-to-web3"} className={styles.link}>
                    <img src="/nav-icons/nav-web3.svg" />
                    <p>Web3 onboard</p>
                  </Link>
                </li>
                <li>
                  <Link href={"/advisory-subscription"} className={styles.link}>
                    <img src="/nav-icons/nav-advisory.svg" />
                    <p>Advisory subscription</p>
                  </Link>
                </li>
                <li>
                  <Link href={"security-audits"} className={styles.link}>
                    <img src="/nav-icons/nav-audits.svg" />
                    <p>Security audits</p>
                  </Link>
                </li>
                <li>
                  <Link href={"/#onboard-in-polkadot"} className={styles.link}>
                    <img src="/nav-icons/nav-polkadot.svg" />
                    <p>Polkadot onboard</p>
                  </Link>
                </li>
                <li>
                  <Link href={"/investment-diligence"} className={styles.link} style={{marginBottom: 0}}>
                    <img src="/nav-icons/nav-investment.svg" />
                    <p>Investment Diligence</p>
                  </Link>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.item}>
            <button type="button" className={styles.button} onClick={setLearn}>
              Learn
              <img id={"arrow3"} src={"/arrow.svg"} className={styles.arrow} />
            </button>
            {LearnIsOpened ? (
              <ul>
                <li>
                  <Link
                    href={"https://discord.gg/EARg6RCThP"}
                    className={styles.link}
                  >
                    <img src="/nav-icons/nav-discord.svg" />
                    <p>Community Discord</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://docs.openbrush.io/"}
                    className={styles.link}
                    style={{marginBottom: 0}}
                  >
                    <img src="/nav-icons/nav-docs.svg" />
                    <p>Docs</p>
                  </Link>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.item}>
            <button
              type="button"
              className={styles.button}
              onClick={setCompany}
            >
              Company
              <img id={"arrow4"} src={"/arrow.svg"} className={styles.arrow} />
            </button>
            {CompanyIsOpened ? (
              <ul>
                <li>
                  <Link href={"/about-us"} className={styles.link} style={{marginBottom: 0}}>
                    <p>About us</p>
                  </Link>
                </li>
                {/*<li>*/}
                {/*  <Link href={"/hiring"} className={styles.link}>*/}
                {/*    <p>Hiring</p>*/}
                {/*  </Link>*/}
                {/*</li>*/}
              </ul>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.social}>
            <Link href={"https://t.me/openbrush"} style={{marginRight: 38}}>
              <img src={"/icons/telegram-mobile.svg"}/>
            </Link>
            <Link href={"https://instagram.com/727_ventures?igshid=ZmVmZTY5ZGE="} style={{marginRight: 38}}>
              <img src={"/icons/inst-mobile.svg"}/>
            </Link>
            <Link href={"https://twitter.com/Brushfam_io"} style={{marginRight: 38}}>
              <img src={"/icons/twitter-mobile.svg"}/>
            </Link>
            <Link href={"mailto:contact@727.ventures"} >
              <img src={"/icons/mail-mobile.svg"}/>
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
