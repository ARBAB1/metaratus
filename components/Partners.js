'use client'
import styles from './Partners.module.css'

export default function Partners() {
  const cards = [
    {
      title: 'AI Systems Architecture',
      description: 'We advise organizations on how to structure and prioritize their AI initiatives, then oversee implementation by coordinating all technical and operational resources required to ensure scalable, future-ready outcomes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'Machine Learning Strategy & Advisory',
      description: 'We help clients determine where machine learning will deliver the greatest strategic advantage and direct the execution process—managing all contributors involved under Metaratus® guidance to ensure alignment and successful adoption.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <circle cx="12" cy="12" r="10" />
          <path d="M16 12L12 8l-4 4M12 16V8" />
        </svg>
      )
    },
    {
      title: 'AI-Enhanced Workflow Consulting',
      description: 'We redesign organizational workflows to integrate AI seamlessly into daily operations and supervise the implementation process to ensure cross-team alignment, smooth rollout, and measurable efficiency improvements.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      title: 'Intelligent Automation Advisory',
      description: 'We identify automation opportunities, design intelligent automation strategies, and guide the deployment by coordinating all involved teams—reducing friction and elevating enterprise productivity through structured oversight.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    },
    {
      title: 'Prisma™ Strategic Framework',
      description: 'Metaratus® uses its proprietary Prisma™ methodology to diagnose post-COVID business challenges, develop AI-forward strategies, and direct the implementation journey by managing all participating stakeholders to ensure intelligent execution.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M12 2L2 22h20L12 2z" />
          <path d="M12 2v20" />
          <path d="M2 22l10-10 10 10" />
        </svg>
      )
    },
    {
      title: 'Humanocentric AI™ Training',
      description: 'We train teams to work effectively with AI by aligning human reasoning patterns with AI communication structures and support the integration of these practices across the organization through guided implementation oversight.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      title: 'Strategic AI Business Planning',
      description: 'We develop comprehensive AI-driven business plans and operational roadmaps, then lead the execution phase by supervising all involved contributors to ensure the strategy is carried out with precision and continuity.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'Innovatus™ AI Glasses',
      description: 'Metaratus® develops the Innovatus™ line of next-generation AI wearable devices and advises organizations on how to design custom AI-enabled glasses tailored to their internal workflows—overseeing implementation and managing all parties involved to ensure seamless adoption.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <path d="M22 17H2l2-2h16l2 2z" />
          <path d="M19 15V8a2 2 0 0 0-2-2h-2" />
          <path d="M5 15V8a2 2 0 0 1 2-2h2" />
          <path d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M18 12h-2a2 2 0 0 0-2 2v1" />
          <path d="M6 12h2a2 2 0 0 1 2 2v1" />
        </svg>
      )
    }
  ]

  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            The Metaratus® AI Ecosystem
          </h2>
        </div>

        <div className={styles.cardGrid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {card.icon}
              </div>
              <h4 className={styles.cardTitle}>
                {card.title}
              </h4>
              <p className={styles.cardDescription}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
