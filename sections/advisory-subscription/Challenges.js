import styles from "@/styles/advisory-subscription/Challenges.module.css";

export default function Challenges() {
  return (
    <section className={styles.section}>
      <h1 className={styles.headerText}>
        The challenges web3 teams are facing
      </h1>
      <div className={styles.challengesContainer}>
        <div className={styles.challengesDiv1}>
          <div className={styles.titleDiv}>
            <img src={"1.svg"}/>
            <p className={styles.titleText1}>Architecture choice</p>
          </div>
          <p style={{width: 277}}>Coming soon</p>
        </div>
        <div className={styles.challengesDiv2}>
          <div className={styles.titleDiv}>
            <img src={"2.svg"}/>
            <p className={styles.titleText2}>Team performance / Delivery</p>
          </div>
          <p>Coming soon</p>
        </div>
      </div>
    </section>
  );
}
