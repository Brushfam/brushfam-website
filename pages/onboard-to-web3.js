import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TitleSection from "@/sections/onboard-to-web3/TitleSection";
import { MobileNavbar } from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css";
import Head from "next/head";
import Web3 from "@/sections/onboard-to-web3/Web3";
import { useEffect } from "react";
import ReactGA from "react-ga";

export default function OnboardToWeb3() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className={styles.onboardProperty}>
      <Head>
        <title>Onboard your business to web3</title>
      </Head>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <TitleSection></TitleSection>
      <Web3></Web3>
      <Footer></Footer>
    </div>
  );
}
