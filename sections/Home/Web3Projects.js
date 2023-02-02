import styles from "@/styles/Home/Web3Projects.module.css";
import { web3ProjectsData } from "@/data/web3ProjectsData";
import Link from "next/link";

export default function Web3Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.centeredDiv}>
        <p className={styles.titleText}>Top web3 projects trust Brushfam</p>
      </div>
      <div className={styles.centeredDiv}>
        <ul className={styles.ul}>
          {web3ProjectsData &&
            web3ProjectsData.map((data, i) => {
              return (
                <li key={i.toString()}>
                  <Link href={data.link}>
                    <img alt={data.alt} src={data.src} />
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
        <div className={styles.centeredDiv}>
            <div className={styles.portfolio}>
                <img alt={"brushfam mini logo"} src={"logos/brushfam-mini-logo.svg"} className={styles.brushfamMiniLogo}/>
                <p style={{color: "#FFFFFF"}}>is a portfolio company of</p>
                <Link href="https://727.ventures/">
                    {/*<p style={{color: "white", fontSize: 14, fontWeight: 600}}>727 Ventures</p>*/}
                    <img src={"logos/727-logo.svg"} alt={"727 logo"} style={{width: 113}} className={styles.venturesMiniLogo}/>
                </Link>
            </div>
        </div>
    </section>
  );
}
