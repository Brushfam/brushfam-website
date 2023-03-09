import styles from "@/styles/onboard-to-web3/Web3.module.css";

export default function Web3() {
  return (
    <section className={styles.section}>
      <p className={styles.headerText}>Here are some ways Web3 can help:</p>
      <div className={styles.web3Wrapper}>
        <div className={styles.web3Blocks}>
          <div className={styles.block1}>
            <p className={styles.blockTitleText}>1. New Market Expansion</p>
            <p className={styles.blockDescriptionText}>
              Web3 can help you expand into new markets by creating
              decentralized platforms that connect users with each other without
              relying on intermediaries. This can open up new markets for your
              products or services.
            </p>
          </div>
          <div className={styles.block2}>
            <p className={styles.blockTitleText}>
              2. Brand-New Economy Creation
            </p>
            <p className={styles.blockDescriptionText}>
              Web3 can create new economies that work on decentralized networks,
              powered by cryptocurrency. You can create your own tokens and use
              them to incentivize users to participate in your platform,
              creating new revenue streams and increasing customer loyalty.
            </p>
          </div>
          <div className={styles.block3}>
            <p className={styles.blockTitleText}>3. Enhanced Security</p>
            <p className={styles.blockDescriptionText}>
              Web3 technology can help improve security by providing
              decentralized solutions that are less susceptible to hacks and
              other security breaches.
            </p>
          </div>
        </div>
        <div className={styles.web3Blocks}>
          <div className={styles.block4}>
            <p className={styles.blockTitleText}>4. Improved Transparency</p>
            <p className={styles.blockDescriptionText}>
              Web3 technology can increase transparency in business operations
              by providing a secure and tamper-proof record of transactions.
              This can help build trust with customers, suppliers, and other
              stakeholders.
            </p>
          </div>
          <div className={styles.block5}>
            <p className={styles.blockTitleText}>
              5. Resolving Business Problems
            </p>
            <p className={styles.blockDescriptionText}>
              Web3 technology can be used to solve business problems that have
              been difficult to solve with traditional solutions. For example,
              Web3 technology can help with supply chain management, fraud
              prevention, and secure data storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
