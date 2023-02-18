import styles from "@/styles/about-us/Presentation.module.css";

export default function Presentation() {
  const DesktopGallery = () => {
    return <div className={styles.galleryBlock}>
      <div className={styles.galleryRow}>
          <img src={"/team-gallery/img1.png"} style={{ marginRight: 8 }}/>
          <img src={"/team-gallery/img2.png"} />
      </div>
      <div className={styles.galleryRow}>
        <img src={"/team-gallery/img3.png"} style={{ marginRight: 8 }} />
        <img src={"/team-gallery/img4.png"} />
      </div>
      <div className={styles.galleryRow}>
        <img src={"/team-gallery/img5.png"} style={{ marginRight: 8 }} />
        <img src={"/team-gallery/img6.png"} style={{ marginRight: 8 }} />
        <img src={"/team-gallery/img7.png"} />
      </div>
    </div>
  }

  const MobileGallery = () => {
    return <div className={styles.galleryBlockMobile}>
        <img src={"/team-gallery/img1-mobile.png"} style={{ marginBottom: 8 }}/>
        <img src={"/team-gallery/img2-mobile.png"} />
        <div className={styles.galleryRow}>
          <img src={"/team-gallery/img4-mobile.png"} style={{ marginRight: 8 }}/>
          <img src={"/team-gallery/img5-mobile.png"} />
        </div>
      <img src={"/team-gallery/img3-mobile.png"} style={{ marginBottom: 8 }}/>
        <div className={styles.galleryRow}>
          <img src={"/team-gallery/img6-mobile.png"} style={{ marginRight: 8 }}/>
          <img src={"/team-gallery/img7-mobile.png"} />
        </div>
    </div>
  }

  return (
    <section className={styles.section}>
      <p className={styles.headerText}>About us</p>
      <div className={styles.presentationBlock}>
        <DesktopGallery></DesktopGallery>
        <MobileGallery></MobileGallery>
        <div className={styles.commentBlock}>
          <ul>
            <li>
              <img src={"list-dot.svg"} />
              <p>
                Brushfam is an ink! smart contracts expert and provides audits,
                tech advisory, and onboards businesses to Polkadot
              </p>
            </li>
            <li>
              <img src={"list-dot.svg"}/>
              <p>
                We are a proactive team of visionaries, web3 builders, and
                Polkadot ecosystem leaders
              </p>
            </li>
            <li>
              <img src={"list-dot.svg"}/>
              <p>
                We constantly work on ecosystem development by creating
                open-source infrastructure products and organizing events to
                extend ink! market
              </p>
            </li>
            <li>
              <img src={"list-dot.svg"}/>
              <p>
                We accept and achieve the most complicated challenges and goals
              </p>
            </li>
            <li>
              <img src={"list-dot.svg"}/>
             <p>
               Every team member is an expert in web3, ink! smart contracts and
               in own zone of responsibility at the same time: tech development,
               marketing, PR, business development, product development, finance,
               tokenomics, recruitment, etc.
             </p>
            </li>
            <li>
              <img src={"list-dot.svg"}/>
              <p>
                We have an internal culture of constant growth through inner
                trainings and coaching
              </p>
            </li>
            <li>
              <img src={"list-dot.svg"}/>
              <p>
                We are participants and speakers at various web and blockchain
                conferences
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
