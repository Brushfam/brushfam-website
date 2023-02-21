import styles from "@/styles/security-audits/TitleSection.module.css"

export default function TitleSection() {
    const handleClick = () => {
        document.getElementById('get-in-touch').scrollIntoView()
    };

    return(
        <section className={styles.section}>
            <p className={styles.titleText}>Services & Solutions</p>
            <h1 className={styles.headerText}>Security audits</h1>
            <p className={styles.descriptionText}>
                An ink! smart contract audit performed by our specialists provides the
                independent estimation of the code generated to implement the smart contract’s terms. </p>
            <button type="button" className={styles.button} onClick={handleClick}>Connect with our experts</button>
        </section>
    )
}