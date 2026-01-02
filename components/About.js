import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Stats Labels */}
          <div className={styles.leftColumn}>
            <div className={styles.statLabel}>Research per year</div>
            <div className={styles.statLabel}>The quality of results</div>
          </div>

          {/* Right Column - Main Content */}
          <div className={styles.rightColumn}>
            <h2 className={styles.title}>
              <div className={styles.tag}>[ about us ]</div>A Complete AI
              Transformation Ecosystem{" "}
            </h2>

            <div className={styles.description}>
              <p>
                Metaratus® integrates software, hardware, strategic analysis, AI
                consulting, automation engineering, workforce training, and
                research-based insights into a unified AI ecosystem built for
                SMBs and middle-market enterprises.
              </p>
            </div>

            <button className={styles.button}>
              Explore the Ecosystem <span className={styles.arrow}>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
