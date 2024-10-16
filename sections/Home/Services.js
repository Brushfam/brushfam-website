import styles from "@/styles/Home/Services.module.css";
import Link from "next/link";

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.mainDiv}>
        <p className={styles.textTitle}>Services & Solutions</p>
        <h1 className={styles.textHeader} style={{ marginBottom: 64 }}>
          Our expertise will empower your business
        </h1>

        <div className={styles.wrapper} style={{ marginBottom: 40 }}>
          <p className={styles.serviceTitle}>For businesses looking to grow with using web3:</p>
          <div className={styles.block1} id={"onboard-in-web3"}>
            <div className={styles.serviceHeader}>
              <img src={"icons/services/web3-onboard.svg"} />
              <p style={{ marginLeft: 4 }}>Web3 onboard</p>
            </div>
            <p className={styles.serviceText}>
              Looking for opportunities to grow your business? Web3 might be just the one you are
              looking for, either to expand to new market, increase revenue by creating a brand-new
              economy inside or just resolve the business problems that couldn’t be resolved before.
            </p>
            <p className={styles.serviceText} style={{ marginBottom: 24 }}>
              Brushfam is ready to identify your needs, brainstorm a solution, do R&D, create a
              roadmap and build the product. Gradually, we will teach your internal team and
              transform the process ownership to you. Or we can stay as your support hand on the
              advisory subscription.
            </p>
            <Link href={"/onboard-to-web3"} type="button" className={styles.button}>
              Read more
            </Link>
          </div>
        </div>

        <p className={styles.serviceTitle}>For Polkadot native companies:</p>
        <div className={styles.twoServices}>
          <div className={styles.wrapper} id={"ink-advisory"}>
            <div className={styles.block2}>
              <div className={styles.serviceHeader}>
                <img src={"icons/services/advisory-subscription.svg"} />
                <p>Advisory subscription</p>
              </div>
              <p className={styles.serviceText} style={{ marginBottom: 24 }}>
                Get access to the team that created OpenBrush, Sol2ink, Typechain and leads WASM
                ink! ecosystem. Move faster and with optimal expenses. With our top tech specialists
                providing constant mentorship, reviewing PRs, and helping hire new team members you
                will avoid architecture mistakes, time lost and sometimes fatal vulnerabilities.
              </p>
              <Link href={"/advisory-subscription"} type="button" className={styles.button}>
                Read more
              </Link>
            </div>
          </div>
          <div className={styles.wrapper} id={"security-audits"}>
            <div className={styles.block3}>
              <div className={styles.serviceHeader}>
                <img src={"icons/services/security-audits.svg"} />
                <p>Security audits</p>
              </div>
              <p className={styles.serviceText} style={{ marginBottom: 24 }}>
                An ink! smart contract audit performed by our specialists provides the independent
                estimation of the code generated to implement the smart contract’s terms.
              </p>
              <Link href={"/security-audits"} type="button" className={styles.button}>
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
