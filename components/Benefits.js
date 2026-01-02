"use client";
import styles from "./Benefits.module.css";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const benefits = [
  {
    id: 1,
    image: "/assets/service/1.png",
    title: "AI Platform",
    description: "All-in-one AI tools for text, image, code, workflows & more.",
  },
  {
    id: 2,
    image: "/assets/service/2.png",
    title: "Innovatus™ AI Glasses",
    description: "Hands-free multimodal intelligence with wearable AI tech.",
  },
  {
    id: 3,
    image: "/assets/service/3.png",
    title: "Prisma™ AI Framework",
    description:
      "Proprietary model for clarity, insight & strategic decisions.",
  },
  {
    id: 4,
    image: "/assets/service/4.png",
    title: "AI Consulting",
    description: "Bespoke AI solutions, advisory & implementation.",
  },
  {
    id: 5,
    image: "/assets/service/5.png", // Repeating for demo/scroll effect
    title: "Automation & Workflows",
    description: "AI-powered automations that increase productivity.",
  },
  {
    id: 6,
    image: "/assets/service/6.png", // Repeating for demo/scroll effect
    title: "Training & Upskilling",
    description: "AI training for teams & professionals.",
  },
  {
    id: 7,
    image: "/assets/service/7.png", // Repeating for demo/scroll effect
    title: "Business Strategy & Research",
    description: "Business plans, research & analysis powered by Prisma™ AI.",
  },
  {
    id: 8,
    image: "/assets/service/8.png", // Repeating for demo/scroll effect
    title: "Digital Services Suite",
    description: "SEO, social media, hosting & webmaster support.",
  },
];

// Create 3 sets for seamless looping: [Buffer Prev] [Original] [Buffer Next]
const extendedBenefits = [...benefits, ...benefits, ...benefits];

export default function Benefits() {
  const [currentIndex, setCurrentIndex] = useState(benefits.length); // Start at the first item of the middle set
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  const trackRef = useRef(null);
  const cardRef = useRef(null);

  // Measure card width + gap
  const updateMetrics = useCallback(() => {
    if (cardRef.current && trackRef.current) {
      const card = cardRef.current.offsetWidth;
      const gap =
        parseFloat(window.getComputedStyle(trackRef.current).gap) || 32; // fallback to 2rem/32px
      setCardWidth(card + gap);
    }
  }, []);

  useEffect(() => {
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, [updateMetrics]);

  // Initial alignment to middle set without transition
  useEffect(() => {
    // This ensures we start correctly positioned if metrics load later
    // In a real SSR app we might need more handling, but this is fine for client-side adjust
  }, [cardWidth]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // Check boundary for seamless loop
    const totalOriginal = benefits.length;

    // If we scrolled past the end of the middle set (into the third set)
    if (currentIndex >= 2 * totalOriginal) {
      // Jump back to the start of the middle set
      const offset = currentIndex - 2 * totalOriginal;
      setCurrentIndex(totalOriginal + offset);
    }
    // If we scrolled past the start of the middle set (into the first set)
    else if (currentIndex < totalOriginal) {
      // Jump forward to the end of the middle set
      const offset = totalOriginal - currentIndex;
      setCurrentIndex(2 * totalOriginal - offset);
    }
  };

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>[ service: ]</div>
          <h2 className={styles.title}>
            Key benefits and
            <br />
            competitive advantages of
            <br />
            our service
          </h2>
          <div className={styles.controls}>
            <button className={styles.controlButton} onClick={handlePrev}>
              ←
            </button>
            <button
              className={`${styles.controlButton} ${styles.active}`}
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </div>

        <div className={styles.scrollContainer}>
          <div
            className={styles.track}
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {extendedBenefits.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={styles.card}
                ref={index === 0 ? cardRef : null}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={500}
                    className={styles.image}
                  />
                  {/* <div className={styles.cardTitle}>{item.title}</div> */}
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
                {/* Cutout and Button */}
                <div className={styles.cutout}></div>
                <button className={styles.arrowButton}>↗</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
