import styles from "@/styles/onboard-to-web3/Services.module.css";

export default function Services() {
    return(
        <section className={styles.section}>
            <p className={styles.headerText}>Brushfam is ready to:</p>
            <img src={"/web3-onboard-process.svg"} className={styles.onboardProcessImg} />
            <img src={"/web3-onboard-process-mobile.svg"} className={styles.onboardProcessMobileImg} />
        </section>
    )
}