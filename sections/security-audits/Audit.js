import styles from "@/styles/security-audits/Audit.module.css";

export default function Audit() {
  return (
    <section className={styles.section}>
      <p className={styles.titleText}>Why does your project need an audit?</p>
      <div className={styles.auditBlock}>
        <p>
          Because it’s an essential step for every product before launch to be
          sure the users, their data, and assets are fully protected.
        </p>
      </div>
    </section>
  );
}
