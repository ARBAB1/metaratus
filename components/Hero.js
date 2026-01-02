"use client";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} style={{ fontFamily: "Sora" }}>
            AI Software. AI Hardware. AI Strategy. One Integrated Ecosystem.
            {/* <br />
            innovative <span className={styles.highlight}>opportunities</span> at the
            <br />
            Metaratus IT dervices */}
          </h1>

          <p className={styles.subtitle}>
            Metaratus® unifies intelligent tools, strategic consulting,
            automation workflows, and next-generation wearable AI technology to
            empower businesses in the Post-COVID, AI Era™.
          </p>

          <button className={styles.discoverButton}>
            Discover
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>

        <div className={styles.heroImages}>
          <div className={styles.imageGrid}>
            {/* Column 1 - Achievements Card */}
            <div className={`${styles.card} ${styles.achievementsCard}`}>
              <Image
                src="/assets/hero/heroImage1.png"
                alt="Achievements"
                width={365}
                height={570}
                className={styles.image}
              />
              {/* <div className={styles.textOverlay}>
                <h3>Achievements</h3>
                <p>of our startup</p>
              </div> */}
            </div>

            {/* Column 2 - Robot Image */}
            <div className={`${styles.card} ${styles.robotCard}`}>
              <Image
                src="/assets/hero/heroImage2.png"
                alt="Robot Technology"
                width={365}
                height={275}
                className={styles.image}
              />
            </div>

            {/* Column 2 - Stats Card */}
            <div className={`${styles.card} ${styles.statsCard}`}>
              <Image
                src="/assets/hero/Paragraph+Background.png"
                alt="Statistics"
                width={365}
                height={275}
                className={styles.image}
              />
            </div>

            {/* Column 3 - Crystal Ball Image */}
            <div className={`${styles.card} ${styles.crystalCard}`}>
              <Image
                src="/assets/hero/Group 21.png"
                alt="Crystal Ball"
                width={365}
                height={275}
                className={styles.image}
              />
            </div>

            {/* Column 3 - Professional Team Card */}
            <div className={`${styles.card} ${styles.professionalCard}`}>
              <Image
                src="/assets/hero/Group 18.png"
                alt="Professional Team"
                width={365}
                height={275}
                className={styles.image}
              />
              {/* <div className={styles.textOverlay}>
                <p>Professional</p>
                <p>team & tech</p>
              </div> */}
            </div>

            {/* Column 4 - Blue Shapes Image */}
            <div
              className={`${styles.card} ${styles.blueShapesCard}`}
              style={{ position: "relative", top: "4.5rem" }}
            >
              <Image
                src="/assets/hero/heroImage6.png"
                alt="Blue Geometric Shapes"
                width={365}
                height={275}
                className={styles.image}
              />
            </div>

            {/* Column 4 - Digital Head Image */}
            <div className={`${styles.card} ${styles.digitalHeadCard}`}>
              <Image
                src="/assets/hero/Group 23.png"
                alt="Digital Head"
                width={365}
                height={275}
                className={styles.image}
              />
            </div>

            {/* Column 5 - Programming Card */}
            <div className={`${styles.card} ${styles.programmingCard}`}>
              {/* <div className={styles.textOverlayTop}>
                <h3>Programming &</h3>
                <p>development</p>
              </div> */}
              <Image
                src="/assets/hero/Group 24.png"
                alt="Programming Pattern"
                width={365}
                height={285}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
