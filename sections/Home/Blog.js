import styles from "@/styles/Home/Blog.module.css";

export default function Blog() {
  return (
    <section className={styles.section}>
      <p className={styles.titleText}>Blog</p>
      <h1 className={styles.headerText}>Last articles</h1>
      <div className={styles.articlesDiv}>
        <div className={styles.article}>
          <div className={styles.articleTitleBlock}>
            <h2 className={styles.articleTitleText}>First Article</h2>
          </div>
          <p>Coming soon!</p>
          <button type="button" className={styles.button}>
            Read more
          </button>
        </div>
        <div className={styles.article}>
          <div className={styles.articleTitleBlock}>
            <h2 className={styles.articleTitleText}>Second Article</h2>
          </div>
          <p>Coming soon!</p>
          <button type="button" className={styles.button}>
            Read more
          </button>
        </div>
        <div className={styles.article}>
          <div className={styles.articleTitleBlock}>
            <h2 className={styles.articleTitleText}>Third Article</h2>
          </div>
          <p>Coming soon!</p>
          <button type="button" className={styles.button}>
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
