import styles from "@/styles/investment-diligence/Process.module.css";

export default function Process() {
    return(
        <section className={styles.section}>
            <div className={styles.investment}>
                <p className={styles.titleText}>
                    Services & Solutions
                </p>
                <p className={styles.headerText}>
                    The process:
                </p>
                <p className={styles.descriptionText} style={{marginBottom: 8}}>
                    Not every business idea results in successful company. With Brushfam we want to make sure the ideas you are investing your money in, are possible to be implemented and the startup’s team knows how to do it.
                </p>
                <p className={styles.descriptionText}>

                    We will analyze startup’s documents, code, talk to engineers responsible gathering all needed information. All of this combined with the wide-range experience our team has, will give us enough data to come up with a conclusion on the technical possibility of the idea and our impression of the team’s ability to have it implemented.
                </p>
            </div>
            <img src={"/investment-process.svg"} className={styles.auditProcessImg}/>
            <img src={"/investment-process-mobile.svg"} className={styles.auditProcessMobileImg}/>
        </section>
    )
}