import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TitleSection from "@/sections/security-audits/TitleSection";
import Audit from "@/sections/security-audits/Audit";
import Services from "@/sections/security-audits/Services";
import Process from "@/sections/security-audits/Process";
import { MobileNavbar } from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css";
import Head from "next/head";
import { useEffect } from "react";
import ReactGA from "react-ga";
import OurReports from "@/sections/security-audits/OurReports";

export default function SecurityAudits() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
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
      <OurReports></OurReports>
      <Footer></Footer>
    </div>
  );
}
