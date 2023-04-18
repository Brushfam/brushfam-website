import styles from "@/styles/Home/Products.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import $ from "jquery";

export default function Products() {
  // let count = 1;
  //
  // const switchToolVideo = () => {
  //   console.log("+")
  //
  //   if (typeof document !== 'undefined') {
  //       const toolVideo = document.getElementById("tool-video")
  //       const toolVideo2 = document.getElementById("tool-video2")
  //
  //       if (count %2 === 0) {
  //         toolVideo2.currentTime = 0
  //         toolVideo.style.zIndex = "1"
  //         toolVideo2.style.zIndex = "0"
  //         toolVideo.play()
  //       }  else {
  //         toolVideo.currentTime = 0
  //         toolVideo2.style.zIndex = "1"
  //         toolVideo.style.zIndex = "0"
  //         toolVideo2.play()
  //       }
  //
  //       count++
  //   }
  // }

  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState({
      width: undefined
    });

    useEffect(() => {
      function handleResize() {
        setWindowWidth({ width: window.innerWidth });
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
  }

  const VideoWindow = () => {
    useEffect(() => {
      $('tool-video').each(function(){
        if ($(this).is(":in-viewport")) {
          $(this)[0].play();
        } else {
          $(this)[0].pause();
        }
      })
    })

      return(
          useWindowWidth() < 1300 ? {} : <div className={styles.videoWrapper}>
            <video
                id="tool-video"
                width="900"
                autoPlay
                muted
                loop
                className={styles.videoContainer}
            >
              <source src="video/tools.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
      )

  }

  return (
    <section className={styles.section} id={"products"}>
      <div className={styles.centeredDiv}>
        <p className={styles.titleText}>Infrastructure</p>
      </div>
      <div className={styles.centeredDiv}>
        <h1 className={styles.productsTitle}>Products</h1>
      </div>
      <div className={styles.centeredDiv}>
        <p className={styles.productsTitleDescription}>
          We are maintainers and experts in the most trusted and everyday-used
          by developers & businesses open-sourced infrastructure products in the
          Polkadot ecosystem
        </p>
      </div>
      <div className={styles.centeredRowDiv}>
        <VideoWindow/>
        <div className={styles.productsDiv}>
          <div className={styles.product}>
            <div className={styles.productLinkPart}>
              <img src={"logos/openbrush-logo.svg"} style={{width: 150}}/>
              <div className={styles.productButtonPart}>
                <Link
                  href={"https://openbrush.io/"}
                  style={{ marginRight: 10 }}
                  target="_blank"
                >
                  <div className={styles.siteLink}>Site</div>
                </Link>
                <Link
                  href={"https://brushfam.github.io/openbrush-contracts/"}
                  target="_blank"
                >
                  <div className={styles.docsLink}>Docs</div>
                </Link>
              </div>
            </div>
            <p>
              OpenBrush is a library for smart contract development on ink!. It
              provides standard contracts (based on PSP), as well as useful
              contracts and macros to help you build ink! smart contracts.
            </p>
          </div>
          <div className={styles.product}>
            <div className={styles.productLinkPart}>
              <img src={"logos/sol2Ink-logo.svg"} style={{width: 148}}/>
              <div className={styles.productButtonPart}>
                <Link
                  href={"https://github.com/Brushfam/sol2ink"}
                  target="_blank"
                >
                  <div className={styles.docsLink}>Docs</div>
                </Link>
              </div>
            </div>
            <p>
              Is a tool for easy migration from Solidity to ink! and Rust, helps
              projects and teams migrate their smart contracts from popular
              Solidity to Polkadot`s ink!.
            </p>
          </div>
          <div className={styles.product} style={{marginBottom: 0}}>
            <div className={styles.productLinkPart}>
              <img src={"logos/typechain-logo.svg"} style={{width: 182}}/>
              <div className={styles.productButtonPart}>
                <Link
                  href={"https://github.com/Brushfam/typechain-polkadot"}
                  target="_blank"
                >
                  <div className={styles.docsLink}>Docs</div>
                </Link>
              </div>
            </div>
            <p>
              Was created to improve developers’ experience with deployment &
              integration testing of ink! smart contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
