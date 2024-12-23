import Head from "next/head";
import Banner from "sections/Home/Banner";
import Web3Projects from "@/sections/Home/Web3Projects";
import Products from "@/sections/Home/Products";
import Services from "@/sections/Home/Services";
import LetsBuild from "@/sections/Home/LetsBuild";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MobileNavbar } from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css";
import ReactGA from "react-ga";
import { useEffect } from "react";

const TRACKING_ID = "UA-252828610-1";
ReactGA.initialize(TRACKING_ID);

export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <div className={styles.mainProperty}>
        <Head>
          <title>Brushfam</title>
        </Head>
        <Navbar />
        <MobileNavbar />
        <Banner />
        <Web3Projects />
        <Products />
        <Services />
        <LetsBuild />
        <Footer />
      </div>
    </>
  );
}
