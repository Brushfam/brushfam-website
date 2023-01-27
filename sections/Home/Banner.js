import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";

export default function Banner() {
    const handleClick = () => {
        // implementation details
    };

  return (
    <section className={styles.section}>
        <div className={styles.mainDiv}>
            <Navbar></Navbar>
            <div style={{ marginBottom: 24 }}>
                <h1 className={styles.mainText}>Move faster</h1>
                <h1 className={styles.mainText}>using blockchain.</h1>
                <h1 className={styles.mainText}>Brushfam is your gateway</h1>
            </div>
            <p>
                Brushfam onboards businesses into Polkadot by creating the necessary
                development infrastructure, auditing, and giving advisory to the
                development teams. With Openbrush, Sol2ink and our suite of web3
                products and services we make it easy to resolve real world problems
                using Polkadot tech.
            </p>
            <button type="button" onClick={handleClick} className={styles.button}>Explore our Products</button>
        </div>
    </section>
  );
}
