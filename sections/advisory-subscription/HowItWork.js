import styles from "@/styles/advisory-subscription/HowItWork.module.css";

export default function HowItWork() {
  return (
    <section className={styles.section}>
      <h1 className={styles.headerText}>How does it work?</h1>
      <div className={styles.descriptionDiv1}>
        <div className={styles.descriptionBlock}>
<p className={styles.descriptionBlockTitle}>Architecture decisions</p>
        </div>
        <div className={styles.descriptionBlock}>
            <p className={styles.descriptionBlockTitle}>Mentorship</p>
            <p style={{color: "#9097AA", marginTop: 8}}>(tech coach sessions)</p>
        </div>
        <div className={styles.descriptionBlock}>
            <p className={styles.descriptionBlockTitle}>
                Daily Tech guidance
            </p>
        </div>
      </div>
      <div className={styles.descriptionDiv2}>
        <div className={styles.descriptionBlock}>
            <p className={styles.descriptionBlockTitle}>
                Pull Requests code review
            </p>
        </div>
        <div className={styles.descriptionBlock} style={{flexDirection: "row"}}>
            <p className={styles.descriptionBlockTitle} style={{fontSize: 20, marginRight: 20}}>
                Operational involvement per request
            </p>
            <p>
                It’s the place where you application gets build. Proper review of PRs help to avoid
                sometimes fatal vulnerabilities and build proper architecture from the group up.
            </p>
        </div>
      </div>
    </section>
  );
}
