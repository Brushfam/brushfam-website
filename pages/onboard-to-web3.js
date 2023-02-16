import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/sections/onboard-to-web3/Services";
import TitleSection from "@/sections/onboard-to-web3/TitleSection";

export default function onboardToWeb3() {
    return(
        <div>
            <Navbar></Navbar>
            <TitleSection></TitleSection>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}