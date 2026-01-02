"use client";
import styles from "./Blog.module.css";
import Image from "next/image";

export default function Blog() {
  const articles = [
    {
      id: 1,
      image: "/assets/Group 26.png",
      date: "24 AUG. 2024",
      author: "Ann Miller",
      tags: ["AI Solutions", "AI Solutions"],
      title: " The Philosophy of Humanocentric AI™",
      description:
        "A foundational exploration of why AI must enhance—not diminish—the human experience.",
    },
    {
      id: 2,
      image: "/assets/Group 27.png",
      date: "24 AUG. 2024",
      author: "Ann Miller",
      tags: ["AI Solutions", "AI Solutions"],
      title: "The Prisma™ Framework: Behind the Method",
      description:
        "A deeper look at the Metaratus® approach to clarity, structure, and strategic insight",
    },
    {
      id: 3,
      image: "/assets/Group 27.png",
      date: "24 AUG. 2024",
      author: "Ann Miller",
      tags: ["AI Solutions", "AI Solutions"],
      title: "Knowledge for the Sake of Knowledge™",
      description:
        "The intellectual ethos that guides Metaratus® research and innovation.",
    },
  ];

  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        {/* Left Column - Background Image */}
        <div className={styles.leftColumn}>
          <Image
            src="/assets/Group 32.png"
            alt="Background Pattern"
            fill
            className={styles.backgroundImage}
            priority
          />
        </div>

        {/* Right Column - Content */}
        <div className={styles.rightColumn}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.tag}>[ blog ]</div>
              <h2 className={styles.title}>
                Knowledge for the Sake of Knowledge™
              </h2>
              <br />
              <h6 className={styles.subtitle}>
                Exploring the world of artificial intelligence through research,
                reflection, and the pursuit of pure understanding
              </h6>
            </div>
            <button className={styles.moreButton}>
              Metaratus® Knowledge Archive{" "}
              <span className={styles.arrow}>→</span>
            </button>
          </div>

          <div className={styles.articleList}>
            {articles.map((article) => (
              <div key={article.id} className={styles.articleCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={300}
                    height={200}
                    className={styles.articleImage}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.dateAuthor}>
                      {article.date} / {article.author}
                    </span>
                    <div className={styles.tags}>
                      {article.tags.map((tag, i) => (
                        <span key={i} className={styles.badge}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.description}>{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
