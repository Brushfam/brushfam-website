import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import TitleSection from "@/sections/investment-diligence/TitleSection";
import Process from "@/sections/investment-diligence/Process";
import {MobileNavbar} from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css"
import Head from "next/head";
import {useEffect} from "react";
import ReactGA from "react-ga";

export default function InvestmentDiligence() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return(
        <div className={styles.investmentProperty}>
            <Head>
                <title>Investment Diligence</title>
            </Head>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <TitleSection></TitleSection>
            <Process></Process>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}