'use client'
import { useState } from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section className={styles.newsletter} id="contact">
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to Transform Your Business?
          </h2>
          <p className={styles.subtitle}>
            Join hundreds of companies already using our solutions. Get started today!
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <input 
              type="email" 
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>
              Get Started
            </button>
          </form>
          
          <p className={styles.privacy}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
