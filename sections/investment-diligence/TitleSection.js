import styles from "@/styles/investment-diligence/TitleSection.module.css";

export default function TitleSection() {
  const handleClick = () => {
    document.getElementById("get-in-touch").scrollIntoView();
  };

  return (
    <section className={styles.section}>
      <p className={styles.titleText}>Services & Solutions</p>
      <h1 className={styles.headerText}>Investment Diligence</h1>
      <p className={styles.descriptionText}>
        In case VC/angel decides to move on with the investment the document
        generated can be later on used by the startup team as a guideline for
        improvement.
      </p>
      <button type="button" className={styles.button} onClick={handleClick}>
        Connect with our experts
      </button>
    </section>
  );
}
