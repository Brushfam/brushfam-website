import styles from "@/styles/investment-diligence/Services.module.css";

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.servicesWrapper}>
        <p className={styles.headerText}>We review, you benefit</p>
        <div className={styles.row}>
          <div className={styles.block1}>
            <p className={styles.blockTitle}>Get a review from the experts</p>
            <p>
              Experienced team who participated in ink! development and created
              breakthrough infrastructure products will scrupulously review your
              code and find all the possible problems.
            </p>
          </div>
          <div className={styles.block2}>
            <p className={styles.blockTitle}>Gain extra trust</p>
            <p>
              Audited projects are more trusted by users, investors, and
              potential partners.
            </p>
          </div>
          <div className={styles.block3}>
            <p className={styles.blockTitle}>Implementation support</p>
            <p>
              Our team will accompany you during the implementation of all
              recommendations, so you will have strong support after the audit
              process.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.block4}>
            <p className={styles.blockTitle}>Avoid unexpected costs</p>
            <p>
              Smart contract audit during the development phase will protect you
              from huge money and reputation losses after the launch. Solving
              code problems in the early stage is cheaper and faster than after
              the launch. A flawless reputation is vital.
            </p>
          </div>
          <div className={styles.block5}>
            <p className={styles.blockTitle}>Detailed report</p>
            <p>
              After the audit process, you will receive a detailed report
              covering all the issues, a detailed summary, solving and
              implementing guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
