import styles from "@/styles/bg-styles/bg.module.css"
import Head from "next/head";
import Navbar from "@/components/Navbar";
import {MobileNavbar} from "@/components/MobileNavbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import TitleSection from "@/sections/polkadot-onboard/TitleSection";
import PolkadotAdvantages from "@/sections/polkadot-onboard/PolkadotAdvantages";
import OurTeam from "@/sections/polkadot-onboard/OurTeam";
import OurGoal from "@/sections/polkadot-onboard/OurGoal";
import {useEffect} from "react";
import ReactGA from "react-ga";

export default function PolkadotOnboard() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return(
        <div className={styles.polkadotOnboardProperty}>
            <Head>
                <title>Polkadot Onboard</title>
            </Head>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <TitleSection></TitleSection>
            <PolkadotAdvantages></PolkadotAdvantages>
            <OurTeam></OurTeam>
            <OurGoal></OurGoal>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}