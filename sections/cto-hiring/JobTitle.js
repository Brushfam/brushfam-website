import styles from "@/styles/cto-hiring/JobTitle.module.css";

export default function JobTitle() {
  return (
    <section className={styles.section}>
      <div className={styles.divWrapper}>
        <div className={styles.titleTextDiv}>
          <p className={styles.titleText}>Vacancies</p>
          <p className={styles.headerText}>Chief Technical Officer</p>
        </div>
        <div className={styles.briefDiv}>
          <p className={styles.briefTitle}>Job brief:</p>
          <p className={styles.briefDescription}>
            We are seeking a blockchain developer who can work with challenging
            and absorbing tasks, quickly join the development process, and work
            closely with the team. We work very tight with Polkadot tech stack
            (Rust, Substrate, ink!) in the domain of WASM smart contracts.
          </p>
          <p className={styles.briefDescription}>
            Your zones of responsibility will depend on what needs to be done to
            complete the project successfully. We make products, and we expect
            you to join us as one of the blockchain engineers who can identify
            the problem, think about it, and solve it. We are one of the
            fast-growing companies so the desired candidate should be
            comfortable working in a fast-paced environment.
          </p>
        </div>
      </div>
    </section>
  );
}
