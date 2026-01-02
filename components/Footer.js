"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section: CTA */}
        <div className={styles.topSection}>
          <h2 className={styles.ctaTitle}>
            Navigate the Post-COVID
            <br />
            AI Era™ With
            <br />
            Clarity and Precision.
          </h2>
          <button className={styles.quoteButton}>
            Begin the Conversation <span className={styles.arrow}>↗</span>
          </button>
        </div>

        <div className={styles.divider}></div>

        {/* Bottom Section: 4-Column Layout */}
        <div className={styles.bottomSection}>
          {/* Column 1: Brand & Legal */}
          <div className={styles.column}>
            <div className={styles.group}>
              <div className={styles.brandInfo}>
                <Image
                  src="/assets/brandLogo.png"
                  alt="Metaratus Logo"
                  width={120}
                  height={120}
                  className={styles.logoImage}
                />
                <div className={styles.copyright}>
                © 2026 Metaratus, Inc.
                <br />
                All rights reserved.
              </div>
            </div>
            <ul className={styles.linkList}>
              <li><Link href="#" className={styles.link}>• Privacy Policy</Link></li>
              <li><Link href="#" className={styles.link}>• Terms & Conditions</Link></li>
              <li><Link href="#" className={styles.link}>• Data Usage & AI Safety Statement</Link></li>
              <li><Link href="#" className={styles.link}>• About Metaratus®</Link></li>
              <li><Link href="#" className={styles.link}>• Leadership & Advisory</Link></li>
            </ul>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className={styles.column}>
            <div className={styles.group}>
              <h3 className={styles.heading}>Navigation</h3>
              <ul className={styles.linkList}>
                <li><Link href="#" className={styles.link}>• Platform</Link></li>
                <li><Link href="#" className={styles.link}>• Innovatus™</Link></li>
              <li><Link href="#" className={styles.link}>• Prisma AI™</Link></li>
              <li><Link href="#" className={styles.link}>• Consulting</Link></li>
              <li><Link href="#" className={styles.link}>• Training</Link></li>
              <li><Link href="#" className={styles.link}>• Automation</Link></li>
              <li><Link href="#" className={styles.link}>• Research</Link></li>
              <li><Link href="#" className={styles.link}>• Pricing</Link></li>
              <li><Link href="#" className={styles.link}>• About</Link></li>
              <li><Link href="#" className={styles.link}>• Contact</Link></li>
            </ul>
            </div>
          </div>

          {/* Column 3: Programs & Frameworks */}
          <div className={styles.column}>
            <div className={styles.group}>
            <h3 className={styles.heading}>Programs & Frameworks</h3>
            <ul className={styles.linkList}>
              <li><Link href="#" className={styles.link}>• Post-COVID Strategic AI™ Business Plan</Link></li>
              <li><Link href="#" className={styles.link}>• Humanocentric AI™ Training</Link></li>
              <li><Link href="#" className={styles.link}>• AI Strategy Development</Link></li>
              <li><Link href="#" className={styles.link}>• Automation & Workflow Advisory</Link></li>
              <li><Link href="#" className={styles.link}>• Prisma™ Strategic Framework</Link></li>
              <li><Link href="#" className={styles.link}>• Humanocentric AI™</Link></li>
              <li><Link href="#" className={styles.link}>• Post-COVID AI Era™</Link></li>
            </ul>
            </div>
          </div>

          {/* Column 4: Contact & Access */}
          <div className={styles.column}>
            <div className={styles.group}>
              <h3 className={styles.heading}>Contact</h3>
              <p className={styles.text}>
                Metaratus, Inc.
                <br />
                3343 Peachtree Rd NE
                <br />
                Ste. 145-293
                <br />
                Atlanta, GA 30326
              </p>
              <p className={styles.text}>
                support@metaratus.ai
              </p>
              <p className={styles.text}>
                Toll Free (888) 260-8805
                <br />
                Local (470) 574-5655
                <br />
                Atlanta, GA
              </p>
            </div>
            
            <div className={styles.group}>
              <h3 className={styles.heading}>Access</h3>
              <ul className={styles.linkList}>
                <li><Link href="#" className={styles.link}>• Login to Metaratus® AI Platform</Link></li>
                <li><Link href="#" className={styles.link}>• Schedule a Consultation</Link></li>
              </ul>
            </div>

            <div className={styles.socialIcons}>
              <Link href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" className={styles.socialLink} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="#" className={styles.socialLink} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className={styles.socialLink} aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
