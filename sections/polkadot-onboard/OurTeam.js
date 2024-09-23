import styles from "@/styles/polkadot-onboard/OurTeam.module.css";

export default function OurTeam() {
  return (
    <section className={styles.section}>
      <p className={styles.headerText}>Our team of experts will:</p>
      <div className={styles.ourTeamWrapper}>
        <div className={styles.ourTeamPoint}>
          <img src={"list-dot.svg"} />
          <p className={styles.ourTeamText}>
            Assess your business and choose the best parachain for your project, ensuring that your
            business gets the most out of the Polkadot ecosystem
          </p>
        </div>
        <div className={styles.ourTeamPoint}>
          <img src={"list-dot.svg"} />
          <p className={styles.ourTeamText}>
            Guide you through every step of the process, from the initial assessment to the actual
            transfer of your business to Polkadot.
          </p>
        </div>
      </div>
    </section>
  );
}
