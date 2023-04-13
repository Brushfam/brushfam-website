import styles from "@/styles/Home/Products.module.css";
import Link from "next/link";
import {useEffect} from "react";

export default function Products() {
  // let count = 1;
  //
  // useEffect(() => {
  //   const toolVideo = document.getElementById("tool-video")
  //   toolVideo.addEventListener("ended", switchToolVideo, false)
  // })
  //
  //   function switchToolVideo(event) {
  //     const toolVideo = document.getElementById("tool-video")
  //     if (count %2 === 0) {
  //       toolVideo.setAttribute('src', 'video/openbrush.mp4')
  //       count = 1
  //     } else {
  //       toolVideo.setAttribute('src', 'video/sol2ink.mp4')
  //       count++;
  //     }
  //
  //     toolVideo.load()
  //   }


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
        <video
            id="tool-video"
          width="900"
          autoPlay
          loop
          muted
          className={styles.videoContainer}
        >
          <source src="video/tools.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.productsDiv}>
          <div className={styles.product}>
            <div className={styles.productLinkPart}>
              <img src={"logos/openbrush-logo.svg"} />
              <div className={styles.productButtonPart}>
                <Link
                  href={"https://openbrush.io/"}
                  style={{ marginRight: 12 }}
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
            <p style={{ marginTop: 16 }}>
              OpenBrush is a library for smart contract development on ink!. It
              provides standard contracts (based on PSP), as well as useful
              contracts and macros to help you build ink! smart contracts.
            </p>
          </div>
          <div className={styles.product}>
            <div className={styles.productLinkPart}>
              <img src={"logos/sol2Ink-logo.svg"} />
              <div className={styles.productButtonPart}>
                <Link
                  href={"https://github.com/Brushfam/sol2ink"}
                  target="_blank"
                >
                  <div className={styles.docsLink}>Docs</div>
                </Link>
              </div>
            </div>
            <p style={{ marginTop: 16 }}>
              Is a tool for easy migration from Solidity to ink! and Rust, helps
              projects and teams migrate their smart contracts from popular
              Solidity to Polkadot`s ink!.
            </p>
          </div>
          <div className={styles.product}>
            <div className={styles.productLinkPart}>
              <img src={"logos/typechain-logo.svg"} />
              <div className={styles.productButtonPart}>
                <Link
                  href={"https://github.com/Brushfam/typechain-polkadot"}
                  target="_blank"
                >
                  <div className={styles.docsLink}>Docs</div>
                </Link>
              </div>
            </div>
            <p style={{ marginTop: 16 }}>
              Was created to improve developers’ experience with deployment &
              integration testing of ink! smart contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
