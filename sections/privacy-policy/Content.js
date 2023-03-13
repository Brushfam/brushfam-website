import styles from "@/styles/privacy-policy/Content.module.css";
import { points, point0 } from "@/data/PrivacyPolicy/PrivacyPolicyContent";

export default function Content() {
  return (
    <section className={styles.section}>
      <div className={styles.point}>
        {point0 &&
          point0.map((item, i) => {
            return (
              <div key={i.toString()} className={styles.pointText}>
                {item.text}
              </div>
            );
          })}
      </div>
        {
            points &&
            points.map((item, itemNumber) => {
                return(
                    <div key={itemNumber.toString()} className={styles.point} id={"point" + (itemNumber+1).toString()}>
                        <div className={styles.pointTitle}>{item.title}</div>
                        {
                            item.point &&
                            item.point.map((paragraph, textNumber) => {
                                return(
                                    <div key={textNumber.toString()} className={styles.pointText}>
                                        {paragraph.text}
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }
    </section>
  );
}
