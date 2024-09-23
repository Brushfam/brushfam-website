import styles from "@/styles/polkadot-onboard/PolkadotAdvantages.module.css";

export default function PolkadotAdvantages() {
  return (
    <section className={styles.section}>
      <p className={styles.headerText} style={{ marginBottom: 64 }}>
        If you are a business looking for
      </p>
      <div className={styles.BlockRow}>
        <div className={styles.block1}>
          <p className={styles.commonText}>Interoperability</p>
        </div>
        <div className={styles.block2}>
          <p className={styles.commonText}>Superior scalability</p>
        </div>
      </div>
      <div className={styles.BlockRow}>
        <div className={styles.block3}>
          <p className={styles.commonText}>Best security</p>
        </div>
        <div className={styles.block4}>
          <p className={styles.commonText}>Cost-effective solutions for your transactions</p>
        </div>
      </div>
      <p className={styles.polkadotText}>Then Polkadot might just be the perfect choice for you</p>
    </section>
  );
}
