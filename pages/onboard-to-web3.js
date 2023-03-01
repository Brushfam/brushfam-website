import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import Services from "@/sections/onboard-to-web3/Services";
import TitleSection from "@/sections/onboard-to-web3/TitleSection";
import {MobileNavbar} from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css"
import Head from "next/head";

export default function onboardToWeb3() {
    return(
        <div className={styles.onboardProperty}>
            <Head>
                <title>Onboard your business to web3</title>
            </Head>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <TitleSection></TitleSection>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}