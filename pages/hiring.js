import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import HiringSection from "@/sections/hiring/HiringSection";
import {MobileNavbar} from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css"
import Head from "next/head";

export default function Hiring() {
    return (
        <div className={styles.aboutUsProperty}>
            <Head>
                <title>Hiring</title>
            </Head>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <HiringSection></HiringSection>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}