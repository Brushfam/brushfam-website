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
                <div className={navStyles.navTitle}>
                  <p className={navStyles.navTitleText}>Products</p>
                  <div className={navStyles.dropdownContentHeader}>
                    <div
                      className={navStyles.borderBlock3}
                      style={{ height: 404 }}
                    ></div>
                    <div className={navStyles.borderBlock1}></div>
                  </div>
                  <div
                    className={navStyles.dropdownContent}
                    style={{ width: 400 }}
                  >
                    <Link href={"https://openbrush.io/"}>
                      <div className={navStyles.dropDownItem}>
                        <div className={navStyles.borderBlock2}></div>

                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-openbrush.svg"/>
                          <p className={navStyles.dropdownTitle}>OpenBrush</p>
                        </div>
                        <p className={navStyles.description}>
                          OpenBrush is a library for smart contract development
                          on ink! It provides standard contracts (based on PSP),
                          as well as useful contracts and macros to help you
                          build ink! smart contracts.
                        </p>
                      </div>
                    </Link>
                    <Link href={"https://github.com/727-Ventures/sol2ink"}>
                      <div className={navStyles.dropDownItem}>
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-sol2Ink.svg" />
                          <p className={navStyles.dropdownTitle}>Sol2ink</p>
                        </div>
                        <p className={navStyles.description}>
                          Is a tool for easy migration from Solidity to Ink! and
                          Rust helps projects and teams migrate their smart
                          contracts from popular Solidity to Polkadot&#39;s
                          ink!.
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={
                        "https://github.com/727-Ventures/typechain-polkadot"
                      }
                    >
                      <div className={navStyles.dropDownLastItem}>
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-typechain.svg" />
                          <p className={navStyles.dropdownTitle}>Typechain</p>
                        </div>
                        <p className={navStyles.description}>
                          Was created to improve developers’ experience with
                          deployment & integration testing of ink! smart
                          contracts.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div
                    className={navStyles.helperBlock}
                    style={{ width: 292 }}
                  ></div>
                </div>
              </div>

              <div className={navStyles.dropdown}>
                <div className={navStyles.navTitle}>
                  <p className={navStyles.navTitleText}>Services & Solutions</p>
                  <div className={navStyles.dropdownContentHeader}>
                    <div
                      className={navStyles.borderBlock3}
                      style={{ height: 384 }}
                    ></div>
                    <div className={navStyles.borderBlock1}></div>
                  </div>
                  <div
                    className={navStyles.dropdownContent}
                    style={{ width: 262 }}
                  >

                    <Link href={"/advisory-subscription"}>
                      <div
                          className={navStyles.dropDownItem}
                      >
                        <div className={navStyles.borderBlock2}></div>
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-advisory.svg" style={{width: 15}}/>
                          <p className={navStyles.dropdownTitle}>
                            Advisory subscription
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/security-audits"}>
                      <div
                          className={navStyles.dropDownItem}
                      >
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-audit.svg" style={{width: 15}}/>
                          <p className={navStyles.dropdownTitle}>
                            Security audits
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/onboard-to-web3"}>
                      <div
                        className={navStyles.dropDownItem}
                      >
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-web3.svg" style={{width: 18, marginRight: 7}}/>
                          <p className={navStyles.dropdownTitle}>
                            Web3 onboard
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/polkadot-onboard"}>
                      <div
                        className={navStyles.dropDownItem}
                      >
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-polkadot.svg" style={{width: 15}}/>
                          <p className={navStyles.dropdownTitle}>
                            Polkadot onboard
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href={"/investment-diligence"}>
                      <div
                        className={navStyles.dropDownLastItem}
                      >
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-investment.svg" style={{width: 15}}/>
                          <p className={navStyles.dropdownTitle}>
                            Investment Diligence
                          </p>
                        </div>
                      </div>
                    </Link>

                  </div>
                  <div
                    className={navStyles.helperBlock}
                    style={{ width: 74 }}
                  ></div>
                </div>
              </div>

              <div className={navStyles.dropdown}>
                <div className={navStyles.navTitle}>
                  <p className={navStyles.navTitleText}>Learn</p>
                  <div className={navStyles.dropdownContentHeader}>
                    <div
                      className={navStyles.borderBlock3}
                      style={{ height: 196 }}
                    ></div>
                    <div className={navStyles.borderBlock1}></div>
                  </div>
                  <div
                    className={navStyles.dropdownContent}
                    style={{ width: 253 }}
                  >
                    <Link href={"https://discord.gg/EARg6RCThP"}>
                      <div className={navStyles.dropDownItem}>
                        <div className={navStyles.borderBlock2}></div>
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-discord.svg" />
                          <p className={navStyles.dropdownTitle}>
                            Community Discord
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link href={"https://docs.openbrush.io/"}>
                      <div className={navStyles.dropDownLastItem}>
                        <div className={navStyles.dropDownItemHeader}>
                          <img src="/nav-icons/nav-docs.svg" style={{paddingLeft: 4, paddingRight: 4}}/>
                          <p className={navStyles.dropdownTitle}>Docs</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className={navStyles.helperBlock}
                    style={{ width: 169 }}
                  ></div>
                </div>
              </div>

              <div className={navStyles.dropdown}>
                <div className={navStyles.navTitle}>
                  <p className={navStyles.navTitleText}>Company</p>
                  <div className={navStyles.dropdownContentHeader}>
                    <div
                      className={navStyles.borderBlock3}
                      style={{ height: 288 }}
                    ></div>
                    <div className={navStyles.borderBlock1}></div>
                  </div>
                  <div
                    className={navStyles.dropdownContent}
                    style={{ width: 367 }}
                  >
                    <Link href={"/about-us"}>
                      <div className={navStyles.dropDownItem}>
                        <div className={navStyles.borderBlock2}></div>
                        <div className={navStyles.dropDownItemHeader}>
                          <p className={navStyles.dropdownTitle}>About us</p>
                        </div>
                        <p className={navStyles.description}>
                          Brushfam is an ink! smart contracts expert and
                          provides audits, tech advisory, and onboards
                          businesses to Polkadot
                        </p>
                      </div>
                    </Link>
                    <Link href={"/hiring"}>
                    <div className={navStyles.dropDownLastItem}>
                        <div className={navStyles.dropDownItemHeader}>
                          <p className={navStyles.dropdownTitle}>Hiring</p>
                        </div>
                        <p className={navStyles.description}>
                          Our team is known for its contribution to the Polkadot ecosystem. Our visionary attitude helps us think boldly and embrace technological challenges.
                        </p>
                    </div>
                    </Link>
                  </div>
                  <div
                    className={navStyles.helperBlock}
                    style={{ width: 250 }}
                  ></div>
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
  );
};

export default Navbar;
