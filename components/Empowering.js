"use client";
import styles from "./Empowering.module.css";
import Image from "next/image";

export default function Empowering() {
  return (
    <section className={styles.empowering} id="empowering">
      <div className={styles.empoweringWrapper}>
        <div className={styles.orbit} /> {/* Gradient Orbit */}
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              [ Empowering businesses{" "}
              <span className={styles.highlight}>through</span>
              <br />
              <span className={styles.gradient}>AI technology.</span> ]
            </h2>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/Group 17.png"
              alt="Empowering Business"
              width={1920}
              height={800}
              className={styles.image}
              priority
            />
            <div className={styles.logoContainer}>
              <Image
                src="/assets/brandLogo.png"
                alt="Metaratus Logo"
                width={150}
                height={100}
                // className={styles.logoImage}
              />
            </div>
            <div className={styles.cutout}></div>
            <button className={styles.videoButton}>
              <span className={styles.playIcon}>▶</span> Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
