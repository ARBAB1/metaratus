"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <nav className={styles.navLeft}>
            <a href="#platform" className={styles.navItem}>Platform</a>
            <a href="#innovatus" className={styles.navItem}>Innovatus™</a>
            <a href="#prisma" className={styles.navItem}>Prisma AI™</a>
            <a href="#consulting" className={styles.navItem}>Consulting</a>
            <a href="#training" className={styles.navItem}>Training</a>
          </nav>
        </div>

        <div className={styles.logo}>
          <Image
            src="/assets/brandLogo.png"
            alt="Metaratus Logo"
            width={200}
            height={80}
            className={styles.logoImage}
          />
        </div>

        <div className={styles.rightSection}>
          <nav className={styles.navRight}>
            <a href="#automation" className={styles.navItem}>Automation</a>
            <a href="#research" className={styles.navItem}>Research</a>
            <a href="#pricing" className={styles.navItem}>Pricing</a>
            <a href="#about" className={styles.navItem}>About</a>
            <a href="#contact" className={styles.navItem}>Contact</a>
          </nav>

          <div className={styles.ctaGroup}>
            <button className={styles.ctaSecondary}>Book Strategy Call</button>
            <button className={styles.ctaPrimary}>Start Free Trial</button>
          </div>

          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
          <nav className={styles.mobileNav}>
            <a href="#platform" onClick={() => setIsMenuOpen(false)}>Platform</a>
            <a href="#innovatus" onClick={() => setIsMenuOpen(false)}>Innovatus™</a>
            <a href="#prisma" onClick={() => setIsMenuOpen(false)}>Prisma AI™</a>
            <a href="#consulting" onClick={() => setIsMenuOpen(false)}>Consulting</a>
            <a href="#training" onClick={() => setIsMenuOpen(false)}>Training</a>
            <a href="#automation" onClick={() => setIsMenuOpen(false)}>Automation</a>
            <a href="#research" onClick={() => setIsMenuOpen(false)}>Research</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>

            <div className={styles.mobileButtons}>
              <button className={styles.mobileCtaSecondary}>Book Strategy Call</button>
              <button className={styles.mobileCtaPrimary}>Start Free Trial</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
