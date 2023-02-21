import styles from "@/styles/cto-hiring/JobDescription.module.css";

export default function JobDescription() {
    const WorkDescription = () => {
        return(
            <div className={styles.divWrapper}>
                <div className={styles.title}>
                    You will be working on:
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Creating the architecture and development of our Portfolio Companies
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Document and perform high-standard maintenance of new as well as existing technical solutions
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Manage tech team
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Development and support of Polkadot products
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Architecture and design of projects according to business needs
                    </p>
                </div>
                <div className={styles.pointDiv} style={{marginBottom: 0}}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Provide a vision of how a project should be developed from a technical side
                    </p>
                </div>
            </div>
        )
    }

    const Requirements = () => {
        return(
            <div className={styles.divWrapper}>
                <div className={styles.title}>
                    Required background & competencies:
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Deep technical knowledge of blockchain technology and Rust
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Proficiency with Rust, C++, Go, Javascript, Typescript
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Experience in smart contracts development
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        You are interested in Polkadot and other cross-chain ecosystems
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        You have working experience with data structures and algorithms
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Knowledge of English at the Intermediate level
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Fantastic problem-solving skills
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Be self-motivated and proactive
                    </p>
                </div>
                <div className={styles.pointDiv} style={{marginBottom: 0}}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Passion for innovation and brainstorming new solutions
                    </p>
                </div>
            </div>
        )
    }

    const Benefits = () => {
      return (
        <div className={styles.divWrapper}>
          <div className={styles.title}>Work conditions and benefits:</div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>
              Unlimited vacation. Our team members may take off as much time as
              they wish but only with your Lead approval
            </p>
          </div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>Modern working environment and international team</p>
          </div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>You can be part of special crypto projects</p>
          </div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>Competitive compensation package</p>
          </div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>Remote work and flexible working hours</p>
          </div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>You can gain portfolio companies’ tokens</p>
          </div>
          <div className={styles.pointDiv} style={{marginBottom: 0}}>
            <img src={"list-dot.svg"} />
            <p>
              You will be developing a brand-new product with a talented team
            </p>
          </div>
        </div>
      );
    }

    return(
        <section className={styles.section}>
            <WorkDescription></WorkDescription>
            <Requirements></Requirements>
            <Benefits></Benefits>
        </section>
    )
}