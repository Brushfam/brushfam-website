import styles from "@/styles/Home/LetsBuild.module.css";

export default function LetsBuild() {
    return(
        <div className={styles.letsBuildDiv}>
            <p className={styles.letsBuildText}>Let’s build a</p>
            <p className={styles.letsBuildText}>better version of</p>
            <p className={styles.letsBuildText}>the world together</p>
            <p className={styles.mobileText}>
                Let’s build a
            </p>
            <p className={styles.mobileText}>
                better version
            </p>
            <p className={styles.mobileText}>
                of the world
            </p>
            <p className={styles.mobileText}>
                together
            </p>
        </div>
    )
}