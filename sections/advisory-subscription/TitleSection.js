import styles from "@/styles/advisory-subscription/TitleSection.module.css";
import Link from "next/link";

export default function TitleSection() {
  return (
    <section className={styles.section}>
      <p className={styles.titleText}>Services & Solutions</p>
      <h1 className={styles.headerText}>Advisory subscription</h1>
      <p className={styles.descriptionText}>
        Get access to the team that created OpenBrush, Sol2ink, Typechain and leads WASM ink!
        ecosystem. Move faster and with optimal expenses. With our top tech specialists providing
        constant mentorship, reviewing PRs, and helping hire new team members you will avoid
        architecture mistakes, time lost and sometimes fatal vulnerabilities.{" "}
      </p>
      <Link
        className={styles.button}
        href={"mailto:info@brushfam.io?subject=Advisory consultation"}
      >
        Connect with our experts
      </Link>
    </section>
  );
}
