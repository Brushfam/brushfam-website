import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Presentation from "@/sections/about-us/Presentation";
import Team from "@/sections/about-us/Team";
import { MobileNavbar } from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css";
import Head from "next/head";
import { useEffect } from "react";
import ReactGA from "react-ga";

export default function AboutUs() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={styles.aboutUsProperty}>
      <Head>
        <title>About us</title>
      </Head>
      <Navbar />
      <MobileNavbar />
      <Presentation />
      <Team />
      <Footer />
    </div>
  );
}
