import styles from "@/styles/rust-dev-hiring/JobDescription.module.css";

export default function JobDescription() {
    const WorkDescription = () => {
        return(
            <div className={styles.divWrapper}>
                <div className={styles.title}>
                    What you will be working on:
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Develop and maintain our ink! smart contracts infrastructure products widely used by ink! smart contract developers
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Perform security audits of ink! smart contract applications
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Provide advisory to other ink! developers and projects
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Brainstorming and implementing the best solutions for clients’ cases
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Provide a vision of how project should be developed from a technical side
                    </p>
                </div>
                <div className={styles.pointDiv} style={{marginBottom: 0}}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Building the substrate smart contract ecosystem
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
                        3+ years of development experience
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        1+ years of blockchain development experience
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Expert-level experience in Rust or C++
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        High interest in blockchain and web3 technologies
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Proficiency in algorithms and data structures
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Problem-solving skills
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Knowledge of English at the <b>Intermediate</b> level and higher
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Passion for innovation and brainstorming new solutions
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Experience with security assessments and commercial audits is a big plus
                    </p>
                </div>
                <div className={styles.pointDiv}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Experience in smart contracts development is a plus
                    </p>
                </div>
                <div className={styles.pointDiv} style={{marginBottom: 0}}>
                    <img src={"list-dot.svg"} />
                    <p>
                        Knowledge of Typescript is a plus
                    </p>
                </div>
            </div>
        )
    }

    const Benefits = () => {
      return (
        <div className={styles.divWrapper} style={{marginBottom: 0}}>
          <div className={styles.title}>What we offer:</div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>
              Unlimited vacation. Our team members may take off as much time as
              they wish but only with your Lead approval
            </p>
          </div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>Competitive compensation package</p>
          </div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>Modern working environment</p>
          </div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>Zero bureaucracy and micromanagement</p>
          </div>
          <div className={styles.pointDiv}>
            <img src={"list-dot.svg"} />
            <p>You can be part of special web3 projects</p>
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
            <Requirements></Requirements>
            <WorkDescription></WorkDescription>
            <Benefits></Benefits>
        </section>
    )
}