import styles from "@/styles/crypto-payment/Banner.module.css";

export function Banner() {
  return (
    <section className={styles.sectionBlock}>
      <div className={styles.TextBlock}>
        <p className={styles.titleText}>Дозволь клієнтам платити криптою</p>
        <p className={styles.descriptionText}>
          Запусти сервіс прийому платежів за товари та послуги на своєму сайті
        </p>
        <button
          type={"button"}
          onClick={() => {
            window.open("https://t.me/zxc322", "_blank");
          }}
        >
          Замовити безкоштовну консультацію
        </button>
      </div>
      <img src={"crypto-payment/iphone.png"} className={styles.bannerImage} alt={"banner image"} />
    </section>
  );
}
