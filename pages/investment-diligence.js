import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import TitleSection from "@/sections/investment-diligence/TitleSection";
import Audit from "@/sections/investment-diligence/Audit";
import Services from "@/sections/investment-diligence/Services";
import Process from "@/sections/investment-diligence/Process";
import {MobileNavbar} from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css"
import Head from "next/head";

export default function investmentDiligence() {
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