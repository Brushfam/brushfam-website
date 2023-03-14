import styles from "@/styles/privacy-policy/Navigation.module.css";
import { privacyPolicyNavigation } from "@/data/PrivacyPolicy/privacyPolicyNavigation";
import Link from "next/link";

export default function Navigation() {
  return (
    <section className={styles.section}>
      <div className={styles.NavigationWrapper}>
        <p className={styles.navigationTitle}>CONTENT</p>
        <p className={styles.navigationText} style={{ cursor: "auto" }}>
          BRUSHFAM PRIVACY POLICY
        </p>
        {privacyPolicyNavigation &&
          privacyPolicyNavigation.map((item, i) => {
            return (
              <Link
                key={i.toString()}
                href={"#point" + (i + 1).toString()}
                className={styles.navigationText}
              >
                <div>
                  {i + 1}. {item.point}
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
}
