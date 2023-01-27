import { navbarData } from "@/data/navbarData";
import navStyles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const handleClick = () => {
    //
  };

  return (
    <div className={navStyles.navbarContainer}>
      <div className={navStyles.navbarDiv}>
        <div style={{ marginTop: 4, marginRight: 180 }}>
          <Link href="/">
            <div>
              <img src="/public/logos/navbar-logo.svg" alt="brushfam logo" />
            </div>
          </Link>
        </div>
        <div className={navStyles.navbarNavigation}>
          <ul className={navStyles.ul}>
            {navbarData &&
              navbarData.map((navData, i) => {
                return <li key={i.toString()}>
                  <Link href="/">
                    {navData.label}
                  </Link>
                </li>;
              })}
          </ul>
          <button type="button" onClick={handleClick} className={navStyles.button}>
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
