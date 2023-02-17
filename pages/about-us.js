import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Presentation from "@/sections/about-us/Presentation";
import Team from "@/sections/about-us/Team";
import {MobileNavbar} from "@/components/MobileNavbar";

export default function AboutUs() {
    return(
        <div style={{backgroundImage: 'url("/about-us-bg.jpg")'}}>
            <Navbar></Navbar>
            <MobileNavbar></MobileNavbar>
            <Presentation></Presentation>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}