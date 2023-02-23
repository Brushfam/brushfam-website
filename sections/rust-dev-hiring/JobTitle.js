import styles from "@/styles/rust-dev-hiring/JobTitle.module.css";

export default function JobTitle() {
  return (
    <section className={styles.section}>
      <div className={styles.divWrapper}>
        <div className={styles.titleTextDiv}>
          <p className={styles.titleText}>Vacancies</p>
          <p className={styles.headerText}>Rust Blockchain Developer</p>
        </div>
        <div className={styles.briefDiv}>
          <p className={styles.briefTitle}>Job brief:</p>
          <p className={styles.briefDescription}>
            We are seeking a blockchain developer who can work with <b>challenging and absorbing tasks</b>, quickly join the development
            process, look not only for working but for the <b>best solutions</b>
            , and create <b>breakthroughs</b> in the industry. We work very tight with
            Polkadot tech stack (Rust, Substrate, ink!) in the domain of WASM
            smart contracts.
          </p>
          <p className={styles.briefDescription}>
            Our developer’s work is very dynamic since we work with cutting-edge
            technologies. That’s why you will have a lot of opportunities such
            as creating some technology breakthroughs, lead the development of
            core infrastructure products in Polkadot ecosystem, bring your idea
            to evolve it into business and etc.
          </p>
          <p className={styles.briefDescription}>
            You will get a chance to be involved in all of our activities:
            building infrastructure open-source tools, advising other
            businesses, auditing and etc. Your daily tasks will depend on what
            project you’re currently working on. In spite, we will be expecting
            from you goal-and-problem-oriented involvement, meaning that you
            will have the access to our corporate strategy, so you can see your
            own path and the impact that you do on the company.
          </p>
        </div>
      </div>
    </section>
  );
}
