import { navbarData } from "@/data/navbarData";
import navStyles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const handleClick = () => {
    document.getElementById('get-in-touch').scrollIntoView()
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
    </div>
  );
};

export default Navbar;
