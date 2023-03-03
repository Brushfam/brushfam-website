import styles from "@/styles/polkadot-onboard/TitleSection.module.css";

export default function TitleSection() {
    const handleClick = () => {
        document.getElementById("get-in-touch").scrollIntoView();
    };

  return (
    <section className={styles.section}>
      <p className={styles.titleText}>Services & Solutions</p>
      <p className={styles.headerText} style={{marginBottom: 24}}>Polkadot Onboard</p>
      <p className={styles.descriptionText}>
        Looking to grow your total addressable market or upgrade your tech? With
        Sol2ink, being the automatic transpiler tool, the process of code
        transforming from solidity to ink! is just one click away.
      </p>
        <button type="button" className={styles.button} onClick={handleClick}>
            Connect with our experts
        </button>
    </section>
  );
}
