import styles from "@/styles/Hiring.module.css";

export default function HiringSection() {
  return (
    <section className={styles.section}>
      <p className={styles.titleText}>Vacancies</p>
      <p className={styles.headerText}>We’re hiring</p>
      <div className={styles.hiringBlock}>
        <p className={styles.noVacanciesTitle}>Currently, No Open Vacancies</p>
        <p>
          We appreciate your interest in joining our team. At this time, we do not have any open
          vacancies. Please check back later for future opportunities. Thank you for considering us
          as your potential employer.
        </p>
      </div>
    </section>
  );
}
