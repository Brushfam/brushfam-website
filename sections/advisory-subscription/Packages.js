import PackagesDesktop from "@/sections/advisory-subscription/PackagesDesktop";
import PackagesMobile from "@/sections/advisory-subscription/PackagesMobile";
import styles from "@/styles/advisory-subscription/Packages.module.css";
import Link from "next/link";

export default function Packages() {
    return(
        <section className={styles.section}>
            <h1 className={styles.headerText}>
                Advisory packages
            </h1>
            <div className={styles.buttonWrapper}>
                <Link className={styles.firstButton} href={"mailto:info@brushfam.io?subject=Advisory consultation"}>
                    Get started
                </Link>
                <Link href={"mailto:info@brushfam.io?subject=Advisory consultation"}>
                    <div className={styles.secondButton}>
                        Consultation
                    </div>
                </Link>
            </div>
            <PackagesDesktop></PackagesDesktop>
            <PackagesMobile></PackagesMobile>
        </section>
    )
}