"use client";
import styles from "./Features.module.css";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      icon: "/assets/icon1.png",
      title: "Integrated AI Ecosystem",
      description:
        "Metaratus® unifies software, hardware, consulting, automation, and training into one cohesive AI platform—eliminating fragmentation and accelerating organizational efficiency.",
    },
    {
      icon: "/assets/icon2.png",
      title: "Prisma™ AI Analytical Framework",
      description:
        "Our proprietary framework brings clarity to complex business challenges through structured analysis, pattern recognition, and AI-driven strategic insight.",
    },
    {
      icon: "/assets/icon3.png",
      title: "Custom AI Solutions",
      description:
        "We design bespoke AI tools, automations, and strategic models tailored to the specific workflows, goals, and operational realities of each client.",
    },
    {
      icon: "/assets/icon4.png",
      title: "Expert Training & Support",
      description:
        "We empower teams to master AI through guided upskilling, prompt-engineering methods, and ongoing support that maximizes long-term productivity and adoption.",
    },
  ];

  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <div className={styles.tag}>[ feature: ]</div>
            The unique selling
            <br />
            points & advantages
            <br />
            of our service
          </h2>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.iconWrapper}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.itemTitle}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
