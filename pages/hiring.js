import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HiringSection from "@/sections/hiring/HiringSection";
import {MobileNavbar} from "@/components/MobileNavbar";

export default function Hiring() {
    return (
        <div style={{backgroundImage: 'url("/chief-technical-officer-bg.jpg")'}}>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <HiringSection></HiringSection>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}