import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JobTitle from "@/sections/rust-dev-hiring/JobTitle";
import JobDescription from "@/sections/rust-dev-hiring/JobDescription";
import HiringForm from "@/sections/rust-dev-hiring/HiringForm";
import {MobileNavbar} from "@/components/MobileNavbar";

export default function RustDevHiring() {
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