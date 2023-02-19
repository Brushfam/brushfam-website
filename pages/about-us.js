import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Presentation from "@/sections/about-us/Presentation";
import Team from "@/sections/about-us/Team";
import {MobileNavbar} from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css"

export default function AboutUs() {
    return(
        <div className={styles.aboutUsProperty}>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <Presentation></Presentation>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}