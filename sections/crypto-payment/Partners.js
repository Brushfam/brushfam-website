import styles from "@/styles/crypto-payment/Partners.module.css"
import sectionStyles from '@/styles/crypto-payment/CryptoPayment.module.css'

export function Partners() {
    return (
        <div className={sectionStyles.sectionBlock}>
            <div className={styles.partnersBlock}>
                <p className={styles.partnersTitle}>Наші партнери</p>
                <div className={styles.partnersRow}>
                    <div className={styles.mobile}>
                        <div className={styles.partnersPart}>
                            <a href={"https://alephzero.org/"}>
                                <img src={"crypto-payment/logos/aleph-zero.svg"} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.partnersPart}>
                        <a href={"https://astar.network/"}>
                            <img src={"crypto-payment/logos/astar.svg"} />
                        </a>
                        <a href={"https://alephzero.org/"} className={styles.desktop}>
                            <img src={"crypto-payment/logos/aleph-zero.svg"} />
                        </a>
                        <a href={"https://phala.network/"}>
                            <img src={"crypto-payment/logos/phala-network.svg"} />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <p className={styles.partnersTitle}>Нам довіряють</p>
                <div className={styles.partnersRow}>
                    <div className={styles.partnersPart}>
                        <a href={"https://web3.foundation/"}>
                            <img src={"crypto-payment/logos/w3f.svg"} />
                        </a>
                        <a href={"https://artzero.io/"}>
                            <img src={"crypto-payment/logos/artzero.svg"} />
                        </a>
                    </div>
                    <div className={styles.partnersPart}>
                        <a href={"https://polkadot.network/"}>
                            <img src={"crypto-payment/logos/polkadot.svg"} />
                        </a>
                        <a href={"https://panoramaswap.com/"}>
                            <img src={"crypto-payment/logos/panorama.svg"} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
