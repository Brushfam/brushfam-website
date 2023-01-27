import styles from "@/styles/LetsBuild.module.css";

export default function LetsBuild() {
    return(
        <div className={styles.letsBuildDiv}>
            <p className={styles.letsBuildText}>Let’s build a</p>
            <p className={styles.letsBuildText}>better version of</p>
            <p className={styles.letsBuildText}>the world together</p>
        </div>
    )
}