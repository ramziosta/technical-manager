import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const Navbar = () => {
  const openTag = "< ";
  const ro = "RO";
  const closeTag = " />";

  // if mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.stickyContainer}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <p>
              {openTag}
              {ro}
              {closeTag}
            </p>
          </Link>
        </div>

        {/* main navigation container */}
        <div className={styles.navigation}>
          {/*  hamburger menu for mobile view */}
          <div onClick={() => setIsOpen(!isOpen)} className={styles.hamburger}>
            <div
              className={
                isOpen ? `${styles.bar} ${styles.bar1}` : `${styles.bar}`
              }
            ></div>
            <div
              className={
                isOpen ? `${styles.bar} ${styles.bar2}` : `${styles.bar}`
              }
            ></div>
            <div
              className={
                isOpen ? `${styles.bar} ${styles.bar3}` : `${styles.bar}`
              }
            ></div>
          </div>

          <div className={styles.mobileNavigation}>
            <div className={styles.mainNavigation}>
              <ul className={styles.navLinks}>
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/about">About</Link>
                </li>

                <li>
                  <Link href="/services">Services</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>

                <li>
                  <p className={styles.more}>More</p>
                  <ul className={styles.dropdown}>
                    <li>
                      <Link href="/work">Work</Link>
                    </li>

                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>

                    <li>
                      <Link href="/shop">Shop</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* main navigation */}

        <div className={styles.mainNavigation}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/services">Services</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>

            <li>
              <p className={styles.more}>More</p>
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/work">Work</Link>
                </li>

                <li>
                  <Link href="/blog">Blog</Link>
                </li>

                <li>
                  <Link href="/shop">Shop</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarxx;
