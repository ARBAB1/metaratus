'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Reviews.module.css'

export default function Reviews() {
  const insights = [
    {
      title: 'Humanocentric AI™: The Next Evolution of Work',
      description: 'Why the future of AI is collaborative, not competitive—where humans and AI think together to amplify intelligence and performance.',
      image: '/assets/testimonial/1.png',
      link: '/insights/humanocentric-ai'
    },
    {
      title: 'Prisma™: A New Framework for Strategic Clarity',
      description: 'How the Prisma™ Framework refracts complex business challenges into structured, actionable strategic pathways.',
      image: '/assets/testimonial/2.png',
      link: '/insights/prisma-framework'
    },
    {
      title: 'The Post-COVID AI Economy',
      description: 'How shifting market dynamics and digital acceleration require organizations to adopt AI fluency to stay competitive.',
      image: '/assets/testimonial/3.png',
      link: '/insights/post-covid-ai-economy'
    },
    {
      title: 'The AI-Driven Business Plan',
      description: 'Why traditional business plans are becoming obsolete—and how Strategic AI™ redefines planning and forecasting.',
      image: '/assets/testimonial/4.png',
      link: '/insights/ai-driven-business-plan'
    },
    {
      title: 'The Hidden Cost of AI Adoption: Human Enablement',
      description: 'Most AI initiatives fail due to human readiness gaps—this insight explores structured Humanocentric AI™ training.',
      image: '/assets/testimonial/5.png',
      link: '/insights/human-enablement'
    },
    {
      title: 'Hybrid Intelligence: AI + Human Decision-Making',
      description: 'How combining human judgment with machine intelligence leads to superior strategic outcomes.',
      image: '/assets/testimonial/6.png',
      link: '/insights/hybrid-intelligence'
    }
  ]

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Insights from the Post-COVID AI Era™
          </h2>
          <h3 className={styles.subheading}>
            Strategic perspectives, frameworks, and forward-looking intelligence from the forefront of Humanocentric AI™
          </h3>
        </div>
        
        <div className={styles.insightsGrid}>
          {insights.map((insight, index) => (
            <Link href={insight.link} key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={insight.image} 
                  alt={insight.title}
                  width={400}
                  height={250}
                  className={insight.imageClass || styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{insight.title}</h4>
                <p className={styles.text}>{insight.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
