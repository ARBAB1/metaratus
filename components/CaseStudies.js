'use client'
import styles from './CaseStudies.module.css'
import Image from 'next/image'

export default function CaseStudies() {
  const projects = [
    {
      image: '/assets/Group 6.png',
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Built a scalable e-commerce platform with AI-powered recommendations'
    },
    {
      image: '/assets/Group 7.png',
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure and intuitive mobile banking solution for modern users'
    },
    {
      image: '/assets/Group 8.png',
      title: 'Cloud Migration',
      category: 'Cloud Services',
      description: 'Seamless migration to cloud infrastructure with zero downtime'
    },
    {
      image: '/assets/Group 9.png',
      title: 'AI Analytics Dashboard',
      category: 'Data Analytics',
      description: 'Real-time analytics dashboard powered by machine learning'
    },
  ]

  return (
    <section className={styles.caseStudies} id="portfolio">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our <span className={styles.gradient}>Success Stories</span></h2>
          <p className={styles.subtitle}>
            Explore our portfolio of transformative projects
          </p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <span className={styles.category}>{project.category}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <button className={styles.viewProject}>View Project →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
