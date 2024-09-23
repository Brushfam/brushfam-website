import styles from "@/styles/privacy-policy/TitleSection.module.css";

export default function TitleSection() {
  return (
    <section className={styles.section}>
      <p className={styles.headerText}>Brushfam Privacy Policy</p>
      <p className={styles.lastUpdatedText}>Last updated March 13, 2023</p>
    </section>
  );
}
