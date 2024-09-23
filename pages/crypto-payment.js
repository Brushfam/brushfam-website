import styles from "@/styles/bg-styles/bg.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { MobileNavbar } from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import { Banner } from "@/sections/crypto-payment/Banner";
import { Clients } from "@/sections/crypto-payment/Clients";
import { Advantages } from "@/sections/crypto-payment/Advantages";
import { AboutUs } from "@/sections/crypto-payment/AboutUs";
import { Partners } from "@/sections/crypto-payment/Partners";
import { Consultation } from "@/sections/crypto-payment/Consultation";

export default function CryptoPayment() {
  return (
    <div className={styles.onboardProperty}>
      <Head>
        <title>Crypto Payment</title>
      </Head>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <Banner />
      <Clients />
      <Advantages />
      <AboutUs />
      <Partners />
      <Consultation />
      <Footer></Footer>
    </div>
  );
}
