import styles from "@/styles/onboard-to-web3/TitleSection.module.css";

export default function TitleSection() {
  const handleClick = () => {
    document.getElementById("get-in-touch").scrollIntoView();
  };

  return (
    <section className={styles.section}>
      <p className={styles.titleText}>Services & Solutions</p>
      <h1 className={styles.headerText}>Onboard your business to web3</h1>
      <p className={styles.descriptionText}>
        Looking for opportunities to grow your business? Web3 might be just the
        one you are looking for, either to expand to the new market, increase
        revenue by creating a brand-new economy inside or just resolve the
        business problems that couldn’t be resolved before.
      </p>
      <button type="button" className={styles.button} onClick={handleClick}>
        Connect with our experts
      </button>
    </section>
  );
}
