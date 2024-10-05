import TitleSection from "@/sections/advisory-subscription/TitleSection";
import Challenges from "@/sections/advisory-subscription/Challenges";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Packages from "@/sections/advisory-subscription/Packages";
import { MobileNavbar } from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css";
import Head from "next/head";
import { useEffect } from "react";
import ReactGA from "react-ga";

export default function AdvisorySubscription() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={styles.advisoryProperty}>
      <Head>
        <title>Advisory subscription</title>
      </Head>
      <Navbar />
      <MobileNavbar />
      <TitleSection />
      <Challenges />
      <Packages />
      <Footer />
    </div>
  );
}
