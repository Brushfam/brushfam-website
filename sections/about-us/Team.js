import styles from "@/styles/about-us/Team.module.css";
import {teamData} from "@/data/teamData";
import Link from "next/link";

export default function Team() {
  return (
    <section className={styles.section}>
      <p className={styles.titleText}>About us</p>
      <p className={styles.headerText}>Team members of Brushfam</p>
      <p className={styles.descriptionText}>
        Our team is known for its contribution to the Polkadot ecosystem. Our
        visionary attitude helps us think boldly and embrace technological
        challenges.
      </p>
        <div>
            <ul className={styles.teamList}>
                {teamData &&
                    teamData.map((teamItem, i) => {
                        return <li key={i.toString()} className={styles.teamItem}>
                            <Link href={teamItem.social}>
                                <img src={teamItem.src}/>
                            </Link>
                            <p className={styles.memberName}>{teamItem.name}</p>
                            <p className={styles.memberRole}>{teamItem.role}</p>
                        </li>;
                    })}
            </ul>
        </div>
    </section>
  );
}
