import styles from "@/styles/security-audits/Process.module.css";

export default function Process() {
  return (
    <section className={styles.section}>
      <p className={styles.headerText}>The process of ink! smart contracts audits</p>
      <img src={"audit-process.svg"} className={styles.auditProcessImg} />
      <img src={"audit-process-mobile.svg"} className={styles.auditProcessMobileImg} />
    </section>
  );
}
