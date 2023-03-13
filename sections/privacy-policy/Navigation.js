import styles from "@/styles/privacy-policy/Navigation.module.css"
import {privacyPolicyNavigation} from "@/data/PrivacyPolicy/privacyPolicyNavigation";
import Link from "next/link";

export default function Navigation() {
    const handleClick = (elementId) => {
        document.getElementById(elementId).scrollIntoView();
    };

    return(
        <section className={styles.section}>
            <div className={styles.NavigationWrapper}>
                <p className={styles.navigationTitle}>CONTENT</p>
                <p className={styles.navigationText}>BRUSHFAM PRIVACY POLICY</p>
                {privacyPolicyNavigation &&
                    privacyPolicyNavigation.map((item, i) => {
                        return <Link key={i.toString()} href={"#point" + (i+1).toString()}>
                            <div className={styles.navigationText}>
                                {i+1}. {item.point}
                            </div>
                        </Link>
                    })
                }
            </div>
        </section>
    )
}