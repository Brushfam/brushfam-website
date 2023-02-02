import Head from "next/head";
import Banner from "sections/Home/Banner";
import Web3Projects from "@/sections/Home/Web3Projects";
import Products from "@/sections/Home/Products";
import Services from "@/sections/Home/Services";
import LetsBuild from "@/sections/Home/LetsBuild";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Blog from "@/sections/Home/Blog";

export default function Home() {
  return (
    <>
        <div style={{backgroundImage: 'url("/main-page-bg.jpg")'}}>
            <Head>
                <title>Brushfam</title>
            </Head>
            <Banner></Banner>
            <Web3Projects></Web3Projects>
            <Products></Products>
            <Services></Services>
            <LetsBuild></LetsBuild>
            {/*<Contact></Contact>*/}
            {/*<Blog></Blog>*/}
            <Footer></Footer>
        </div>
    </>
  );
}
