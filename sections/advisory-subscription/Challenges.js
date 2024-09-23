import styles from "@/styles/advisory-subscription/Challenges.module.css";

export default function Challenges() {
  return (
    <section className={styles.section}>
      <h1 className={styles.headerText}>The challenges web3 teams are facing</h1>
      <div className={styles.challengesContainer}>
        <div className={styles.challengesDiv1}>
          <div className={styles.titleDiv}>
            <img src={"1.svg"} className={styles.numberOne} />
            <h2 className={styles.titleText1}>Architecture choice</h2>
          </div>
          <p>
            Our team will review the idea of the project and will help with making the best
            architecture choice for your project.
          </p>
        </div>
        <div className={styles.challengesDiv1}>
          <div className={styles.titleDiv}>
            <img src={"2.svg"} />
            <h2 className={styles.titleText2}>Team performance / Delivery</h2>
          </div>
          <p>
            Brushfam will optimize the tech performance of your team by growing your engineers&#39;
            expertise, tech vision, and ability to deliver.
          </p>
        </div>
        <div className={styles.challengesDiv2}>
          <div className={styles.titleDiv}>
            <img src={"3.svg"} />
            <h2 className={styles.titleText3} style={{ maxWidth: 120 }}>
              Code security
            </h2>
          </div>
          <p>
            A proper review of PRs from our experienced team members will help to avoid fatal
            vulnerabilities and will give confidence in code security to business owners and users.
          </p>
        </div>
      </div>
    </section>
  );
}
