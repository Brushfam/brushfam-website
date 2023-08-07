import styles from "@/styles/crypto-payment/Clients.module.css";
import sectionStyles from "@/styles/crypto-payment/CryptoPayment.module.css";

export function Clients() {
    return (
        <div className={sectionStyles.sectionBlock}>
            <p className={styles.titleText}>Для кого?</p>
            <p className={styles.descriptionText}>
                Для всіх бізнесів, які бажають розширити можливості своїх
                інтернет-продажів, забезпечити зручний спосіб оплати для своїх
                клієнтів, а також розширити ринки та залучити додаткові
                інвестиції
            </p>

            <div className={styles.firstClients}>
                <div className={styles.twoClients}>
                    <div className={styles.clientsBlock}>
                        <img src={"crypto-payment/clients/internet-shop.svg"} />
                        Інтернет-магазини
                    </div>
                    <div className={styles.clientsBlockMarket}>
                        <img src={"crypto-payment/clients/marketplace.svg"} />
                        Маркетплейси
                    </div>
                </div>
                <div className={styles.twoClients}>
                    <div className={styles.clientsBlock}>
                        <img
                            src={"crypto-payment/clients/service-company.svg"}
                        />
                        Сервісні компанії
                    </div>
                    <div className={styles.clientsBlock}>
                        <img src={"crypto-payment/clients/investment.svg"} />
                        Інвестиційні фонди
                    </div>
                </div>
            </div>
            <div className={styles.lastClients}>
                <div className={styles.clientsBlock}>
                    <img src={"crypto-payment/clients/courses.svg"} />
                    Онлайн-курси та навчальні платформи
                </div>
                <div className={styles.clientsBlock}>
                    <img src={"crypto-payment/clients/consultation.svg"} />
                    Фінансові та консультативні послуги
                </div>
                <div className={styles.clientsBlock}>
                    <img src={"crypto-payment/clients/realty.svg"} />
                    Продаж нерухомості
                </div>
            </div>
        </div>
    );
}
