import styles from "@/styles/Home/Products.module.css";
import Link from "next/link";

export default function Products() {
    return(
        <section className={styles.section} id={"products"}>
            <div className={styles.centeredDiv}>
                <p className={styles.titleText}>Infrastructure</p>
            </div>
            <div className={styles.centeredDiv}>
                <h1 className={styles.productsTitle}>Products</h1>
            </div>
            <div className={styles.centeredDiv}>
                <p className={styles.productsTitleDescription}>
                    We are maintainers and experts in the most trusted and everyday-used by developers & businesses
                    open-sourced infrastructure products in the Polkadot ecosystem
                </p>
            </div>
            <div className={styles.centeredRowDiv}>
                <div className={styles.codeDiv}>
                    <img src={"bar.svg"}/>
                    <img src={"code1.svg"} className={styles.codeImg}/>
                    <img src={"code2.svg"} className={styles.codeImg}/>
                </div>
                <div className={styles.productsDiv}>
                    <div className={styles.product}>
                        <div className={styles.productLinkPart}>
                            <img src={"logos/openbrush-logo.svg"}/>
                            <div className={styles.productButtonPart}>
                                    <Link href={"https://openbrush.io/"} style={{marginRight: 12}}>
                                        <div className={styles.siteLink}>
                                            Site
                                        </div>
                                    </Link>
                                    <Link href={"https://docs.openbrush.io/"}>
                                        <div className={styles.docsLink}>
                                            Docs
                                        </div>
                                    </Link>
                            </div>
                        </div>
                        <p style={{marginTop: 16}}>
                            OpenBrush is a library for smart contract development on ink!.
                            It provides standard contracts (based on PSP), as well as useful contracts and macros
                            to help you build ink! smart contracts.
                        </p>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productLinkPart}>
                            <img src={"logos/sol2Ink-logo.svg"}/>
                            <div className={styles.productButtonPart}>
                                {/*<Link href={"https://github.com/727-Ventures/sol2ink"} style={{marginRight: 12}}>*/}
                                {/*    <div className={styles.siteLink}>*/}
                                {/*        Site*/}
                                {/*    </div>*/}
                                {/*</Link>*/}
                                <Link href={"https://github.com/727-Ventures/sol2ink"}>
                                    <div className={styles.docsLink}>
                                        Docs
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <p style={{marginTop: 16}}>
                            Is a tool for easy migration from Solidity to ink! and Rust, helps
                            projects and teams migrate their smart contracts from popular
                            Solidity to Polkadot`s ink!.
                        </p>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productLinkPart}>
                            <img src={"logos/typechain-logo.svg"}/>
                            <div className={styles.productButtonPart}>
                                {/*<Link href={"https://github.com/727-Ventures/typechain-polkadot"} style={{marginRight: 12}}>*/}
                                {/*    <div className={styles.siteLink}>*/}
                                {/*        Site*/}
                                {/*    </div>*/}
                                {/*</Link>*/}
                                <Link href={"https://github.com/727-Ventures/typechain-polkadot"}>
                                    <div className={styles.docsLink}>
                                        Docs
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <p style={{marginTop: 16}}>
                            Was created to improve developers’ experience with
                            deployment & integration testing of ink! smart contracts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}