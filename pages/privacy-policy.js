import styles from "@/styles/bg-styles/bg.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import {MobileNavbar} from "@/components/MobileNavbar";
import TitleSection from "@/sections/privacy-policy/TitleSection";
import Navigation from "@/sections/privacy-policy/Navigation";
import Content from "@/sections/privacy-policy/Content";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return(
        <div className={styles.polkadotOnboardProperty}>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <TitleSection></TitleSection>
            <Navigation></Navigation>
            <Content></Content>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}