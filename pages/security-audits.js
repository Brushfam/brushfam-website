import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TitleSection from "@/sections/security-audits/TitleSection"
import Audit from "@/sections/security-audits/Audit"
import Services from "@/sections/security-audits/Services"
import Process from "@/sections/security-audits/Process";
import {MobileNavbar} from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css"
import Head from "next/head";

export default function securityAudits() {
    return(
        <div className={styles.securityProperty}>
            <Head>
                <title>Security audits</title>
            </Head>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <TitleSection></TitleSection>
            <Audit></Audit>
            <Services></Services>
            <Process></Process>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}