import styles from "@/styles/Home/Services.module.css";

export default function Services() {
  const handleClick = () => {
    // implementation details
  };

  return (
    <section className={styles.section}>
      <div className={styles.mainDiv}>
        <p className={styles.textTitle}>Services & Solutions</p>
        {/*<h1 className={styles.textHeader}>Our expertise will</h1>*/}
        <h1 className={styles.textHeader} style={{ marginBottom: 64 }}>
          Our expertise will empower your business
        </h1>

        <div className={styles.wrapper} style={{ marginBottom: 40 }}>
          <p className={styles.serviceTitle}>
            For businesses looking to grow using web3:
          </p>
          <div className={styles.block1}>
            <div className={styles.serviceHeader}>
              <img src={"icons/search-icon.svg"} />
              <p>Onboard in web3</p>
            </div>
            <p className={styles.serviceText}>
              Looking for opportunities to grow your business? Web3 might be
              just the one you are looking for, either to expand to new market,
              increase revenue by creating a brand-new economy inside or just
              resolve the business problems that couldn’t be resolved before.
            </p>
            <p className={styles.serviceText} style={{ marginBottom: 24 }}>
              Brushfam is ready to identify your needs, brainstorm a solution,
              do R&D, create a roadmap and build the product. Gradually, we will
              teach your internal team and transform the process ownership to
              you. Or we can stay as your support hand on the advisory
              subscription.
            </p>
            <button
              type="button"
              onClick={handleClick}
              className={styles.button}
            >
              Read more
            </button>
          </div>
        </div>

        <p className={styles.serviceTitle}>For Polkadot native companies:</p>
        <div className={styles.twoServices}>
          <div className={styles.wrapper}>
            <div className={styles.block2}>
              <div className={styles.serviceHeader}>
                <img src={"icons/search-icon.svg"} />
                <p>Security Audits</p>
              </div>
              <p className={styles.serviceText} style={{ marginBottom: 24 }}>
                An ink! smart contract audit performed by our specialists
                provides the independent estimation of the code generated to
                implement the smart contract’s terms.
              </p>
              <button
                type="button"
                onClick={handleClick}
                className={styles.button}
              >
                Read more
              </button>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.block3}>
              <div className={styles.serviceHeader}>
                <img src={"icons/comment-icon.svg"} />
                <p>Ink! Advisory subscription</p>
              </div>
              <p className={styles.serviceText} style={{ marginBottom: 24 }}>
                Get access to the team that created OpenBrush, Sol2ink,
                TypeChain and leads WASM ink! ecosystem. Move faster and with
                optimal expenses. With our top tech specialists providing
                constant mentorship, reviewing PRs, and helping hire new team
                members you will avoid architecture mistakes, time lost and
                sometimes fatal vulnerabilities.
              </p>
              <button
                type="button"
                onClick={handleClick}
                className={styles.button}
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className={styles.twoServices}>
          <div className={styles.wrapper} style={{ marginBottom: 40 }}>
            <p className={styles.serviceTitle4}>For VC/angel investors:</p>
            <div className={styles.block4}>
              <div className={styles.serviceHeader}>
                <img src={"icons/comment-icon.svg"} />
                <p>Investment tech diligence</p>
              </div>
              <p className={styles.serviceText} style={{ marginBottom: 24 }}>
                Not every great idea will be converted into a working company.
                With Brushfam we want to make sure the ideas you are investing
                your money in, are possible to be implemented and the startup’s
                team knows how to do it. We will be analyze startup’s documents,
                code, talk to engineers responsible gathering all needed
                information. All of this combined with the wide-range experience
                our team has will give us enough data to come up with a
                conclusion on the technical plausibility of the idea and our
                impression of the team’s ability to have it implemented.
              </p>
              <button
                type="button"
                onClick={handleClick}
                className={styles.button}
              >
                Read more
              </button>
            </div>
          </div>
          <div className={styles.wrapper}>
            <p className={styles.serviceTitle5}>
              For those onboarding from Ethereum:
            </p>
            <div className={styles.block5}>
              <div className={styles.serviceHeader}>
                <img src={"icons/comment-icon.svg"} />
                <p>Onboard in Polkadot</p>
              </div>
              <p className={styles.serviceText} style={{ marginBottom: 24 }}>
                Looking to grow your total addressable market or upgrade your
                tech? With Sol2ink, being the automatic transpiler tool, the
                process of code transforming from solidity to ink! is just one
                click away.
              </p>
              <button
                type="button"
                onClick={handleClick}
                className={styles.button}
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
