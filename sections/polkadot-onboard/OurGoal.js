import styles from "@/styles/polkadot-onboard/OurGoal.module.css";

export default function OurGoal() {
  return (
    <section className={styles.section}>
      <div className={styles.ourGoalBlock}>
        <p className={styles.headerText} style={{ marginBottom: 10 }}>
          Our goal
        </p>
        <p className={styles.ourGoalText}>
          is to make the onboarding process as smooth and hassle-free as possible, so you can focus
          on growing your business and taking advantage of the benefits of the Polkadot ecosystem.
        </p>
      </div>
    </section>
  );
}
