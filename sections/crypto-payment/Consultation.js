import styles from "@/styles/crypto-payment/Consultation.module.css";
import sectionStyles from "@/styles/crypto-payment/CryptoPayment.module.css";

export function Consultation() {
    return (
        <div
            className={sectionStyles.sectionBlock}
            id={"get-in-touch"}
            style={{ paddingBottom: 0 }}
        >
            <div className={styles.sectionContent}>
                <div className={styles.textBlock}>
                    <p className={styles.titleText}>
                        Отримати безкоштовну консультацію
                    </p>
                    <p style={{ fontSize: 14 }}>
                        Lorem ipsum dolor sit amet consectetur. Neque felis nunc
                        condimentum egestas augue risus adipiscing amet vitae.
                        Faucibus amet tortor magna aliquet nibh. Vivamus
                        volutpat feugiat volutpat eget amet.
                    </p>
                </div>
                <div className={styles.contactsBlock}>
                    <div className={styles.contactBlock}>
                        <img src={"crypto-payment/team/illya.png"} />
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <p className={styles.name}>Ілля Овчаренко</p>
                            <p className={styles.role}>
                                Голова відділу Розвитку Бізнесу Brushfam
                            </p>
                            <button
                                type={"button"}
                                className={styles.consultButton}
                                onClick={() => {
                                    window.open(
                                        "https://t.me/zxc322",
                                        "_blank"
                                    );
                                }}
                            >
                                Безкоштовна консультація
                            </button>
                        </div>
                    </div>
                    <div className={styles.contactBlock}>
                        <img src={"crypto-payment/team/alina.png"} />
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <p className={styles.name}>Аліна Антропова</p>
                            <p className={styles.role}>
                                Менеджер з Розвитку Бізнесу Brushfam
                            </p>
                            <button
                                type={"button"}
                                className={styles.consultButton}
                                onClick={() => {
                                    window.open(
                                        "https://t.me/alantropova",
                                        "_blank"
                                    );
                                }}
                            >
                                Безкоштовна консультація
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
