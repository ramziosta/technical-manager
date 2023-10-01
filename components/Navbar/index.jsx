import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const left = "<";
  const right = " />";

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logo}>
          {left}RO{right}
        </Link>
      </div>
      <div className={styles.circles}>
        <div className={styles.circle1}>
          <div className={styles.circle2}>
            <div className={styles.circle3}>
              <div className={styles.circle4}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
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
          <div
            className={
              isOpen ? `${styles.mobileLinks}` : `${styles.mobileClosed}`
            }
          >
            <ul className={styles.mobileNavLinks}>
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
                <Link href="/work">Work</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>

              <li>
                <Link href="/shop">Shop</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
    </nav>
  );
};

export default Navbar;
