import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HiringSection from "@/sections/hiring/HiringSection";

export default function Hiring() {
    return (
        <div style={{backgroundImage: 'url("/chief-technical-officer-bg.jpg")'}}>
            <Navbar></Navbar>
            <HiringSection></HiringSection>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}