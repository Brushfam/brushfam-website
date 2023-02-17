import TitleSection from "sections/advisory-subscription/TitleSection"
import Challenges from "sections/advisory-subscription/Challenges"
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Packages from "@/sections/advisory-subscription/Packages";
import {MobileNavbar} from "@/components/MobileNavbar";

export default function advisorySubscription() {
    return(
        <div style={{backgroundImage: 'url("/advisory-subscription-bg.jpg")'}}>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <TitleSection></TitleSection>
            <Challenges></Challenges>
            <Packages></Packages>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}
