import styles from "@/styles/onboard-to-web3/Services.module.css";

export default function Services() {
    return(
        <section className={styles.section}>
            <p className={styles.headerText}>Brushfam is ready to:</p>
            <img src={"/onboard-process.svg"} className={styles.onboardProcessImg} />
            <p  className={styles.onboardProcessText}>Or we can stay as your support hand on the advisory subscription.</p>
            <img src={"/onboard-process-mobile.svg"} className={styles.onboardProcessMobileImg} />
        </section>
    )
}