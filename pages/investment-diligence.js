import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TitleSection from "@/sections/investment-diligence/TitleSection";
import Audit from "@/sections/investment-diligence/Audit";
import Services from "@/sections/investment-diligence/Services";
import Process from "@/sections/investment-diligence/Process";
import {MobileNavbar} from "@/components/MobileNavbar";

export default function investmentDiligence() {
    return(
        <div style={{backgroundImage: 'url("/advisory-subscription-bg.jpg")'}}>
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