import styles from "@/styles/crypto-payment/Advantages.module.css"
import sectionStyles from '@/styles/crypto-payment/CryptoPayment.module.css'

export function Advantages() {
    return (
        <div className={sectionStyles.sectionBlock}>
            <p className={styles.titleText}>Переваги</p>
            <div className={styles.advantagesRow}>
                <div className={styles.twoBlocks}>
                    <div className={styles.advantagesBlock}>
                        <div className={styles.advantagesBlockTitle}>
                            <p className={styles.advantagesBlockNumber}>1</p>
                            <p className={styles.advantagesBlockTitleText}>
                                Широкий вибір криптовалют:
                            </p>
                        </div>
                        <p className={styles.advantagesBlockDescription}>
                            Підтримка всесвітньо відомих криптовалют, включаючи
                            USDT, BTC, ETH, DOT та інші, що дозволяє вашим клієнтам
                            обирати найзручніший метод оплати.
                        </p>
                    </div>
                    <div className={styles.advantagesBlock}>
                        <div className={styles.advantagesBlockTitle}>
                            <p className={styles.advantagesBlockNumber}>2</p>
                            <p className={styles.advantagesBlockTitleText}>
                                Безпека та захист:
                            </p>
                        </div>
                        <p className={styles.advantagesBlockDescription}>
                            Наша система забезпечує безпечне зберігання
                            криптовалютних гаманців та шифрування всіх транзакцій,
                            гарантуючи захист від шахрайства та зловживання.
                        </p>
                    </div>
                </div>
                <div className={styles.twoBlocks}>
                    <div className={styles.advantagesBlock}>
                        <div className={styles.advantagesBlockTitle}>
                            <p className={styles.advantagesBlockNumber}>3</p>
                            <p className={styles.advantagesBlockTitleText}>
                                Миттєва конвертація:
                            </p>
                        </div>
                        <p className={styles.advantagesBlockDescription}>
                            Автоматична конвертація криптовалюти в фіатні гроші за
                            поточним курсом забезпечує вам негайний доступ до
                            отримання коштів.
                        </p>
                    </div>
                    <div className={styles.advantagesBlock} style={{border: 0}}>
                        <div className={styles.advantagesBlockTitle}>
                            <p className={styles.advantagesBlockNumber}>4</p>
                            <p className={styles.advantagesBlockTitleTextLong}>
                                Правова та податкова прозорість:
                            </p>
                        </div>
                        <p className={styles.advantagesBlockDescription}>
                            Наше рішення дозволяє отримувати платежі за товари та
                            послуги, які не протирічять чинному законодавству
                        </p>
                    </div>
                </div>
            </div>
            <button type={"button"} onClick={() => {window.open('https://t.me/zxc322', '_blank')}}>Порадитися з експертом про переваги</button>
        </div>
    )
}
