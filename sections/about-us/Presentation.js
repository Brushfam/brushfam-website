import { presentationData } from "@/data/presentationData";
import styles from "@/styles/about-us/Presentation.module.css";

export default function Presentation() {
  const DesktopGallery = () => {
    return (
      <div className={styles.galleryBlock}>
        <div className={styles.galleryRow}>
          <img src={"team-gallery/img1.png"} style={{ marginRight: 8 }} />
          <img src={"team-gallery/img2.png"} />
        </div>
        <div className={styles.galleryRow}>
          <img src={"team-gallery/img3.png"} style={{ marginRight: 8 }} />
          <img src={"team-gallery/img4.png"} />
        </div>
        <div className={styles.galleryRow}>
          <img src={"team-gallery/img5.png"} style={{ marginRight: 8 }} />
          <img src={"team-gallery/img6.png"} style={{ marginRight: 8 }} />
          <img src={"team-gallery/img7.png"} />
        </div>
      </div>
    );
  };

  const MobileGallery = () => {
    return (
      <div className={styles.galleryBlockMobile}>
        <img
          src={"team-gallery/img1-mobile.png"}
          style={{ marginBottom: 8, height: 215, width: 380 }}
        />
        <img
          src={"team-gallery/img2-mobile.png"}
          style={{ marginBottom: 8, height: 169, width: 380 }}
        />
        <div className={styles.galleryRow}>
          <img
            src={"team-gallery/img3-mobile.png"}
            style={{ marginRight: 8, height: 219, width: 160 }}
          />
          <img src={"team-gallery/img4-mobile.png"} style={{ height: 219, width: 212 }} />
        </div>
        <img
          src={"team-gallery/img5-mobile.png"}
          style={{ marginBottom: 8, height: 222, width: 380 }}
        />
        <div className={styles.galleryRow}>
          <img
            src={"team-gallery/img6-mobile.png"}
            style={{ marginRight: 8, height: 157, width: 182 }}
          />
          <img src={"team-gallery/img7-mobile.png"} style={{ height: 157, width: 190 }} />
        </div>
      </div>
    );
  };

  return (
    <section className={styles.section}>
      <p className={styles.headerText}>About us</p>
      <div className={styles.presentationBlock}>
        <DesktopGallery></DesktopGallery>
        <MobileGallery></MobileGallery>
        <div className={styles.commentBlock}>
          <ul>
            {presentationData.map((text, i) => {
              return (
                <li key={i.toString()}>
                  <img src={"icons/list-dot.svg"} />
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
