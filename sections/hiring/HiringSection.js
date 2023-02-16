import styles from "@/styles/Hiring.module.css";
import Link from "next/link";

export default function HiringSection() {
  return (
    <section className={styles.section}>
      <p className={styles.titleText}>Vacancies</p>
      <p className={styles.headerText}>We’re hiring</p>
      <div className={styles.hiringBlock}>
        <div className={styles.positionTitle}>Chief Technical Officer</div>
        <div className={styles.positionDescription}>
          We’re looking for a Blockchain Developer interested in Rust and CTO
          ambitions. If you are good at blockchain development, join the team of
          visionaries, game-changers, and masterminds! 727.ventures is a venture
          studio that creates, builds, and supports Web3 companies. We are
          looking for a talented&skilled&problem-solving person to be part of
          our team!
        </div>
        <Link href={"/cto-hiring"}>
          <div className={styles.learnMore}>Learn more</div>
        </Link>
      </div>
        <div className={styles.hiringBlockMobile}>
            <div className={styles.positionTitle}>Chief Technical Officer</div>
            <div className={styles.positionDescription}>
                We’re looking for a Blockchain Developer interested in Rust and CTO
                ambitions. If you are good at blockchain development, join the team of
                visionaries, game-changers, and masterminds! 727.ventures is a venture
                studio that creates, builds, and supports Web3 companies. We are
                looking for a talented&skilled&problem-solving person to be part of
                our team!
            </div>
            <Link href={"/cto-hiring"}>
                <div className={styles.learnMore}>Learn more</div>
            </Link>
        </div>
    </section>
  );
}
