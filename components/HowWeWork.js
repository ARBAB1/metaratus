"use client";
import { useState } from "react";
import styles from "./HowWeWork.module.css";
import Image from "next/image";

export default function HowWeWork() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Strategic AI Blueprinting",
      content:
        "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions.",
    },
    {
      title: "Industry-Aligned Execution Roadmaps",
      content:
        "We tailor our AI solutions to meet the unique challenges and opportunities of your specific industry, ensuring maximum impact and ROI for your business operations.",
    },
    {
      title: "High-Touch Consulting & Implementation Teams",
      content:
        "Seamlessly integrate AI capabilities into your existing infrastructure with our robust deployment strategies, minimizing disruption while maximizing performance.",
    },
  ];

  return (
    <section className={styles.main} id="how-we-work">
      <div className={styles.section}>
        <div className={styles.container}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div className={styles.tag}>[ how we work ]</div>
            <h2 className={styles.title}>
              The Post-COVID, Strategic AI™
              <br />
              Business Plan™
            </h2>

            <div className={styles.accordion}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.item} ${
                    openIndex === index ? styles.active : ""
                  }`}
                  onClick={() => setOpenIndex(index)}
                >
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <div className={styles.arrow}></div>
                  </div>
                  <div className={styles.itemContent}>
                    <div className={styles.contentInner}>{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className={styles.exploreButton}>
              Explore More <span className={styles.buttonArrow}>↗</span>
            </button>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/Group 22.png"
                alt="IT Business Development"
                width={600}
                height={700}
                className={styles.image}
              />
              <div className={styles.imageOverlay}>
                <h3 className={styles.overlayTitle}>
                  Strategic AI
                  <br />
                  Business Planning
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
