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
          <button className={styles.gridIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" fill="currentColor" />
              <rect x="14" y="3" width="7" height="7" fill="currentColor" />
              <rect x="3" y="14" width="7" height="7" fill="currentColor" />
              <rect x="14" y="14" width="7" height="7" fill="currentColor" />
            </svg>
          </button>

          <nav className={styles.navLeft}>
            <a href="#home" className={styles.navItem}>
              Platform
            </a>
            <a href="#pages" className={styles.navItem}>
              Innovatus™
            </a>
            <a href="#services" className={styles.navItem}>
              Prisma AI™
            </a>
            <a href="#services" className={styles.navItem}>
              Consulting
            </a>
            <a href="#services" className={styles.navItem}>
              Training
            </a>
          </nav>
        </div>

        <div className={styles.logo}>
          {/* <span className={styles.logoText}>LOGO</span> */}
          <Image
            src="/assets/brandLogo.png"
            alt="Metaratus Logo"
            width={150}
            height={100}
            className={styles.logoImage}
          />
        </div>

        <div className={styles.rightSection}>
          <nav className={styles.navRight}>
            <a href="#shop" className={styles.navItem}>
              Automation
            </a>
            <a href="#blog" className={styles.navItem}>
              Research
            </a>
            <a href="#contacts" className={styles.navItem}>
              Pricing
            </a>
            <a href="#contacts" className={styles.navItem}>
              About
            </a>
            <a href="#contacts" className={styles.navItem}>
              Contact
            </a>
          </nav>

          <button className={styles.searchIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <button className={styles.ctaButton}>Login</button>
          <button className={styles.ctaButton}>Start Free Trial</button>

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
        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
        >
          <nav className={styles.mobileNav}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Platform
            </a>
            <a href="#pages" onClick={() => setIsMenuOpen(false)}>
              Innovatus™
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              Prisma AI™
            </a>
            <a href="#shop" onClick={() => setIsMenuOpen(false)}>
              Consulting
            </a>
            <a href="#blog" onClick={() => setIsMenuOpen(false)}>
              Training
            </a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
              Automation
            </a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
              Research
            </a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>

            <div className={styles.mobileExtra}>
              <button className={styles.mobileSearch}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <span>Search</span>
              </button>
              <button className={styles.mobileCta}>Login</button>
              <button className={styles.mobileCtaPrimary}>Start Free Trial</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
