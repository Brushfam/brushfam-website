import styles from "@/styles/crypto-payment/AboutUs.module.css";
import sectionStyles from "@/styles/crypto-payment/CryptoPayment.module.css";

export function AboutUs() {
  return (
    <section className={sectionStyles.sectionBlock}>
      <div className={styles.sectionContent}>
        <div className={styles.textBlock}>
          <h3 className={styles.titleText}>Чому ми?</h3>
          <p style={{ marginBottom: 8 }}>
            <span style={{ color: "white" }}>Brushfam — команда технічних експертів</span>, які
            створюють інфраструктурні продукти для покращення блокчейн технологій, а також рішення
            для усунення проблем та оптимізації процесів бізнесу за допомогою блокчейн технологій
          </p>
          <p>
            Наша команда <span style={{ color: "white" }}>відома в світі</span> своїми реалізованими
            проєктами, технологічними проривами, підтвердженими партнерствами та просвітницькою
            діяльністю в галузі web3 технологій для бізнесу
          </p>
        </div>
        <div className={styles.achievementColumn}>
          <div className={styles.twoAchievements}>
            <div className={styles.a0Block}>
              <div className={styles.iconBorder}>
                <img src={"crypto-payment/about-us/aleph-zero.svg"} />
              </div>
              <p>
                Є технічними адвайзерами <span style={{ color: "white" }}>Aleph Zero</span>,
                публічного блокчейну.
              </p>
            </div>
            <div className={styles.obBlock}>
              <div className={styles.iconBorder}>
                <img src={"crypto-payment/about-us/openbrush.svg"} />
              </div>
              <p>
                Створили OpenBrush, бібліотеку смарт контрактів
                <span style={{ color: "white" }}> №1 у Polkadot</span>.
              </p>
            </div>
          </div>
          <div className={styles.twoAchievements}>
            <div className={styles.webSummitBlock}>
              <div className={styles.iconBorder}>
                <img src={"crypto-payment/about-us/web-summit.svg"} />
              </div>
              <p>
                Наша команда офіційно представляла Polkadot на
                <span style={{ color: "white" }}> Web Summit 2022</span>, де ми були найкраще
                представленим блокчейном.
              </p>
            </div>
            <div className={styles.integrationBlock}>
              <div className={styles.iconBorder}>
                <img src={"crypto-payment/about-us/integration.svg"} />
              </div>
              <p>
                Експерти з <span style={{ color: "white" }}>інтеграції блокчейн технологій</span> у
                бізнес процеси компаній з реального сектору економіки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
