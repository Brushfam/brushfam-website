import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HiringSection from "@/sections/hiring/HiringSection";
import {MobileNavbar} from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css"

export default function Hiring() {
    return (
        <div className={styles.aboutUsProperty}>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <HiringSection></HiringSection>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}