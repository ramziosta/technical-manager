"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
import logo from "../../app/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" width={60} height={100} />
        </Link>
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
            <p className={styles.more}>Explore</p>
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
