import styles from "@/styles/security-audits/OurReports.module.css";
import { reportsData } from "@/data/reportsData";
import Link from "next/link";

export default function OurReports() {
    return (
        <div className={styles.section}>
            <p className={styles.titleText}>Audit reports</p>
            <p className={styles.descriptionText}>
                Reports are published by the customers approval
            </p>
            <div className={styles.reportBlock}>
                {reportsData &&
                    reportsData.map((item, i) => {
                        return (
                            <div key={i.toString()} className={styles.report}>
                                <div className={styles.reportTop}>
                                    <Link href={item.link}>
                                        <img
                                            src={item.logo}
                                            alt={item.header}
                                        />
                                    </Link>
                                </div>
                                <div className={styles.reportBottom}>
                                    <p
                                        style={{
                                            fontWeight: 600,
                                            fontSize: 20,
                                            marginBottom: 8,
                                        }}
                                    >
                                        {item.header}
                                    </p>
                                    <p
                                        style={{
                                            fontWeight: 400,
                                            fontSize: 12,
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                    {item.file ? (
                                        <a
                                            href={item.file}
                                            download
                                            className={styles.reportButton}
                                        >
                                            Get report
                                        </a>
                                    ) : (
                                        <div className={styles.disabledReportButton}>
                                            In progress
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
