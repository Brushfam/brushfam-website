import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JobTitle from "@/sections/cto-hiring/JobTitle";
import JobDescription from "@/sections/cto-hiring/JobDescription";
import HiringForm from "@/sections/cto-hiring/HiringForm";
import {MobileNavbar} from "@/components/MobileNavbar";

export default function CtoHiring() {
    return(
        <div style={{backgroundImage: 'url("/chief-technical-officer-bg.jpg")'}}>
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