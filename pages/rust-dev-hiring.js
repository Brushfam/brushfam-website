import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JobTitle from "@/sections/rust-dev-hiring/JobTitle";
import JobDescription from "@/sections/rust-dev-hiring/JobDescription";
import HiringForm from "@/sections/rust-dev-hiring/HiringForm";
import {MobileNavbar} from "@/components/MobileNavbar";
import styles from "@/styles/bg-styles/bg.module.css"
import Head from "next/head";

export default function RustDevHiring() {
    return(
        <div className={styles.aboutUsProperty}>
            <Head>
                <title>Rust Blockchain Developer</title>
            </Head>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <JobTitle></JobTitle>
            <JobDescription></JobDescription>
            <HiringForm></HiringForm>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}