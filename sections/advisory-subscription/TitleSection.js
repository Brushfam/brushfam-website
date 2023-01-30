import styles from "@/styles/advisory-subscription/TitleSection.module.css";

export default function TitleSection() {
    return(
        <section className={styles.section}>
            <p className={styles.titleText}>Services</p>
            <h1 className={styles.headerText}>Advisory subscription</h1>
            <p className={styles.descriptionText}>
                Service for teams developing on ink! looking to function on their maximum performance level.
                Brushfam allows you to move faster(by making right technical decisions), cut down expenses(by)
                and optimize your tech team performance(by growing engineer). By providing daily mentorship,
                doing code-review we help you avoid fatal mistakes and grow the team’s performance.
                Receive guidance from the team that leads the ink! WASM ecosystem. </p>
            <button type="button" className={styles.button}>Connect with our experts</button>
        </section>
    )
}