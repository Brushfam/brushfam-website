import { navbarData } from "@/data/navbarData";
import navStyles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const handleClick = () => {
    document.getElementById("get-in-touch").scrollIntoView();
  };

  // if (typeof window !== 'undefined') {
  //   let prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //     const currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("navbar").style.top = "0";
  //     } else {
  //       document.getElementById("navbar").style.top = "-80px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  // }

  return (
    <div className={navStyles.navbarContainer} id={"navbar"}>
      <div className={navStyles.mainDiv}>
        <div className={navStyles.navbarDiv}>
          <div className={navStyles.logoDiv}>
            <Link href="/">
              <div>
                <img src="logos/navbar-logo.svg" alt="brushfam logo" />
              </div>
            </Link>
          </div>
          <div className={navStyles.navbarNavigation}>
            <div className={navStyles.menu}>

              <div className={navStyles.dropdown}>
                <p className={navStyles.navTitle}>Products</p>
                <div
                  className={navStyles.dropdownContentHeader}
                  style={{ width: 104 }}
                >
                  <div className={navStyles.borderBlock1}></div>
                </div>
                <div className={navStyles.testBlock} style={{width: 293, marginLeft: "30.5%"}}></div>
                <div className={navStyles.dropdownContent} style={{width: 400}}>
                  <div className={navStyles.dropDownItem}>
                    <div className={navStyles.borderBlock2}></div>
                    <Link href={"https://openbrush.io/"}>
                      <div className={navStyles.dropDownItemHeader}>
                        <img src="/nav-icons/nav-openbrush.svg" />
                        <p className={navStyles.dropdownTitle}>OpenBrush</p>
                      </div>
                      <p className={navStyles.description}>
                        OpenBrush is a library for smart contract development on
                        ink! It provides standard contracts (based on PSP), as
                        well as useful contracts and macros to help you build ink!
                        smart contracts.
                      </p>
                    </Link>
                  </div>
                  <div className={navStyles.dropDownItem}>
                    <Link href={"https://github.com/727-Ventures/sol2ink"}>
                      <div className={navStyles.dropDownItemHeader}>
                        <img src="/nav-icons/nav-sol2Ink.svg" />
                        <p className={navStyles.dropdownTitle}>Sol2ink</p>
                      </div>
                      <p className={navStyles.description}>
                        Is a tool for easy migration from Solidity to Ink! and
                        Rust helps projects and teams migrate their smart
                        contracts from popular Solidity to Polkadot&#39;s ink!.
                      </p>
                    </Link>
                  </div>
                  <div className={navStyles.dropDownLastItem}>
                    <Link href={"https://github.com/727-Ventures/typechain-polkadot"}>
                      <div className={navStyles.dropDownItemHeader}>
                        <img src="/nav-icons/nav-typechain.svg" />
                        <p className={navStyles.dropdownTitle}>Typechain</p>
                      </div>
                      <p className={navStyles.description}>
                        Was created to improve developers’ experience with
                        deployment & integration testing of ink! smart contracts.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={navStyles.dropdown}>
                <p className={navStyles.navTitle}>Services & Solutions</p>
                <div className={navStyles.testBlock} style={{width: 77, marginLeft: "12%"}}></div>
                <div
                    className={navStyles.dropdownContentHeader}
                    style={{ width: 182 }}
                >
                  <div className={navStyles.borderBlock1}></div>
                </div>
                <div className={navStyles.dropdownContent} style={{width: 262}}>
                  <div className={navStyles.dropDownItem} style={{padding: "20px 0"}}>
                    <div className={navStyles.borderBlock2}></div>

                      <Link href={"/onboard-to-web3"}>
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-web3.svg" />
                        <p className={navStyles.dropdownTitle}>Web3 onboard</p>
                        </div>
                      </Link>
                  </div>
                  <div className={navStyles.dropDownItem}  style={{padding: "20px 0"}}>

                      <Link href={"/advisory-subscription"}>
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-advisory.svg" />
                        <p className={navStyles.dropdownTitle}>Advisory subscription</p>
                        </div>
                      </Link>
                  </div>
                  <div className={navStyles.dropDownItem}  style={{padding: "20px 0"}}>

                      <Link href={"security-audits"}>
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-audits.svg" />
                        <p className={navStyles.dropdownTitle}>Security audits</p>
                        </div>
                      </Link>
                  </div>
                  <div className={navStyles.dropDownItem}  style={{padding: "20px 0"}}>

                      <Link href={"/#onboard-in-polkadot"}>
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-polkadot.svg" />
                        <p className={navStyles.dropdownTitle}>Polkadot onboard</p>
                        </div>
                      </Link>
                  </div>
                  <div className={navStyles.dropDownLastItem}  style={{padding: "20px 0"}}>
                      <Link href={"/investment-diligence"}>
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-investment.svg" />
                        <p className={navStyles.dropdownTitle}>Investment Diligence</p>
                        </div>
                      </Link>
                  </div>
                </div>
              </div>

              <div className={navStyles.dropdown}>
                <p className={navStyles.navTitle}>Learn</p>
                <div className={navStyles.testBlock} style={{width: 170, marginLeft: "48%"}}></div>
                <div
                    className={navStyles.dropdownContentHeader}
                    style={{ width: 80 }}
                >
                  <div className={navStyles.borderBlock1}></div>
                </div>
                <div className={navStyles.dropdownContent} style={{width: 253}}>
                  <div className={navStyles.dropDownItem}>
                    <Link href={"https://discord.gg/EARg6RCThP"}>
                    <div className={navStyles.dropDownItemHeader}>
                      <img src="/nav-icons/nav-discord.svg" />
                        <p className={navStyles.dropdownTitle}>Community Discord</p>
                    </div>
                    </Link>
                  </div>
                  <div className={navStyles.dropDownLastItem}>
                    <Link href={"https://docs.openbrush.io/"}>
                    <div className={navStyles.dropDownItemHeader}>
                      <img src="/nav-icons/nav-docs.svg" />
                        <p className={navStyles.dropdownTitle}>Docs</p>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/*<div className={navStyles.dropdown}>*/}
              {/*  <p className={navStyles.navTitle} style={{zIndex: 3}}>Blog</p>*/}
              {/*  <div*/}
              {/*      className={navStyles.blog}*/}
              {/*  ></div>*/}
              {/*</div>*/}

              <div className={navStyles.dropdown}>
                <p className={navStyles.navTitle}>Company</p>
                <div className={navStyles.testBlock} style={{width: 250, marginLeft: "26.5%"}}></div>
                <div
                    className={navStyles.dropdownContentHeader}
                    style={{ width: 111 }}
                >
                  <div className={navStyles.borderBlock1}></div>
                </div>
                <div className={navStyles.dropdownContent} style={{width: 367}}>
                  <div className={navStyles.dropDownLastItem}>
                    <Link href={"/about-us"}>
                      <div className={navStyles.dropDownItemHeader}>
                        <p className={navStyles.dropdownTitle}>About us</p>
                      </div>
                      <p className={navStyles.description}>
                        Brushfam is an ink! smart contracts expert and provides audits, tech advisory, and onboards businesses to Polkadot
                      </p>
                    </Link>
                  </div>
                  {/*<div className={navStyles.dropDownLastItem}>*/}
                  {/*  <Link href={"/hiring"}>*/}
                  {/*    <div className={navStyles.dropDownItemHeader}>*/}
                  {/*      <p className={navStyles.dropdownTitle}>Hiring</p>*/}
                  {/*    </div>*/}
                  {/*    <p className={navStyles.description}>*/}
                  {/*      Our team is known for its contribution to the Polkadot ecosystem. Our visionary attitude helps us think boldly and embrace technological challenges.*/}
                  {/*    </p>*/}
                  {/*  </Link>*/}
                  {/*</div>*/}
                </div>
              </div>

            </div>
            <button
              type="button"
              onClick={handleClick}
              className={navStyles.button}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
