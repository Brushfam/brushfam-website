import PackagesDesktop from "@/sections/advisory-subscription/PackagesDesktop";
import PackagesMobile from "@/sections/advisory-subscription/PackagesMobile";
import styles from "@/styles/advisory-subscription/Packages.module.css";
import Link from "next/link";

export default function Packages() {
    const handleClick = () => {
        document.getElementById('get-in-touch').scrollIntoView()
    };

    return(
        <section className={styles.section}>
            <h1 className={styles.headerText}>
                Advisory packages
            </h1>
            <div className={styles.buttonWrapper}>
                <button type="button" onClick={handleClick} className={styles.firstButton}>
                    Get started
                </button>
                <Link href={"mailto:nameless.endless@727.ventures?subject=Advisory consultation"}>
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