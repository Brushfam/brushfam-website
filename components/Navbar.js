import navStyles from "@/styles/components/Navbar.module.css";
import Link from "next/link";

const Products = () => {
  return (
    <div className={navStyles.dropdown}>
      <div className={navStyles.navTitle}>
        <p className={navStyles.navTitleText} style={{ width: "100%", height: "100%" }}>
          Products
        </p>
        <div className={navStyles.dropdownContent} style={{ width: 400 }}>
          <Link href={"https://openbrush.brushfam.io/"}>
            <div className={navStyles.dropDownItem}>
              <div className={navStyles.dropDownItemHeader}>
                <img src="nav-icons/nav-openbrush.svg" alt={"openbrush"} />
                <p className={navStyles.dropdownTitle}>OpenBrush</p>
              </div>
              <p className={navStyles.description}>
                OpenBrush is a library for smart contract development on ink! It provides standard
                contracts (based on PSP), as well as useful contracts and macros to help you build
                ink! smart contracts.
              </p>
            </div>
          </Link>
          <Link href={"https://github.com/Brushfam/sol2ink"}>
            <div className={navStyles.dropDownItem}>
              <div className={navStyles.dropDownItemHeader}>
                <img src="nav-icons/nav-sol2Ink.svg" alt={"sol2Ink"} />
                <p className={navStyles.dropdownTitle}>Sol2ink</p>
              </div>
              <p className={navStyles.description}>
                Is a tool for easy migration from Solidity to Ink! and Rust helps projects and teams
                migrate their smart contracts from popular Solidity to Polkadot&#39;s ink!.
              </p>
            </div>
          </Link>
          <Link href={"https://github.com/Brushfam/typechain-polkadot"}>
            <div className={navStyles.dropDownLastItem}>
              <div className={navStyles.dropDownItemHeader}>
                <img src="nav-icons/nav-typechain.svg" alt={"typechain"} />
                <p className={navStyles.dropdownTitle}>Typechain</p>
              </div>
              <p className={navStyles.description}>
                Was created to improve developers’ experience with deployment & integration testing
                of ink! smart contracts.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className={navStyles.dropdown}>
      <div className={navStyles.navTitle}>
        <p className={navStyles.navTitleText}>Services & Solutions</p>
        <div className={navStyles.dropdownContent} style={{ width: 262 }}>
          <Link href={"/advisory-subscription"}>
            <div className={navStyles.dropDownItem}>
              <div className={navStyles.dropDownItemHeader}>
                <img src="nav-icons/nav-advisory.svg" alt={"advisory"} style={{ width: 15 }} />
                <p className={navStyles.dropdownTitle}>Advisory subscription</p>
              </div>
            </div>
          </Link>

          <Link href={"/security-audits"}>
            <div className={navStyles.dropDownItem}>
              <div className={navStyles.dropDownItemHeader}>
                <img src="nav-icons/nav-audit.svg" alt={"audit"} style={{ width: 15 }} />
                <p className={navStyles.dropdownTitle}>Security audits</p>
              </div>
            </div>
          </Link>

          <Link href={"/onboard-to-web3"}>
            <div className={navStyles.dropDownItem}>
              <div className={navStyles.dropDownItemHeader}>
                <img
                  src="nav-icons/nav-web3.svg"
                  alt={"web3"}
                  style={{ width: 18, marginRight: 7 }}
                />
                <p className={navStyles.dropdownTitle}>Web3 onboard</p>
              </div>
            </div>
          </Link>

          <Link href={"/crypto-payment"}>
            <div className={navStyles.dropDownLastItem}>
              <div className={navStyles.dropDownItemHeader}>
                <img src="nav-icons/nav-payment.svg" alt={"payment"} style={{ width: 14 }} />
                <p className={navStyles.dropdownTitle}>Crypto payment</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Learn = () => {
  return (
    <div className={navStyles.dropdown}>
      <div className={navStyles.navTitle}>
        <p className={navStyles.navTitleText}>Learn</p>
        <div className={navStyles.dropdownContent} style={{ width: 253 }}>
          <Link href={"https://discord.gg/xkg8YQhSF6"}>
            <div className={navStyles.dropDownItem}>
              <div className={navStyles.dropDownItemHeader}>
                <img src="nav-icons/nav-discord.svg" alt={"discord"} />
                <p className={navStyles.dropdownTitle}>Community Discord</p>
              </div>
            </div>
          </Link>
          <Link href={"https://learn.brushfam.io/"} target="_blank">
            <div className={navStyles.dropDownLastItem}>
              <div className={navStyles.dropDownItemHeader}>
                <img
                  src="nav-icons/nav-docs.svg"
                  alt={"docs"}
                  style={{ paddingLeft: 4, paddingRight: 4 }}
                />
                <p className={navStyles.dropdownTitle}>Docs</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Company = () => {
  return (
    <div className={navStyles.dropdown}>
      <div className={navStyles.navTitle}>
        <p className={navStyles.navTitleText}>Company</p>
        <div className={navStyles.dropdownContent} style={{ width: 367 }}>
          <Link href={"/about-us"}>
            <div className={navStyles.dropDownItem}>
              <div className={navStyles.dropDownItemHeader}>
                <p className={navStyles.dropdownTitle}>About us</p>
              </div>
              <p className={navStyles.description}>
                Brushfam is an ink! smart contracts expert and provides audits, tech advisory, and
                onboards businesses to Polkadot
              </p>
            </div>
          </Link>
          <Link href={"/hiring"}>
            <div className={navStyles.dropDownLastItem}>
              <div className={navStyles.dropDownItemHeader}>
                <p className={navStyles.dropdownTitle}>Hiring</p>
              </div>
              <p className={navStyles.description}>
                Our team is known for its contribution to the Polkadot ecosystem. Our visionary
                attitude helps us think boldly and embrace technological challenges.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const NavbarLogo = () => {
  return (
    <div className={navStyles.logoDiv}>
      <Link href="/">
        <div>
          <img src="logos/navbar-logo.svg" alt="brushfam logo" />
        </div>
      </Link>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className={navStyles.navbarContainer} id={"navbar"}>
      <div className={navStyles.navbarDiv}>
        <NavbarLogo />
        <div className={navStyles.navbarNavigation}>
          <div className={navStyles.menu}>
            <Products />
            <Services />
            <Learn />
            <Company />
          </div>
          <a href={"mailto:info@brushfam.io"} className={navStyles.getInTouchButton}>
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
