import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

          <nav className={styles.navbar}>
            <h1 className={styles.logo}>RO</h1>

            <div onClick={() => setIsOpen(!isOpen)} className={styles.hamburger}>
                <div className={isOpen ? `${styles.bar} ${styles.bar1}` : `${styles.bar}`}></div>
                <div className={isOpen ? `${styles.bar} ${styles.bar2}` : `${styles.bar}`}></div>
                <div className={isOpen ? `${styles.bar} ${styles.bar3}` : `${styles.bar}`}></div>
            </div>

            <ul className={isOpen ? `${styles.nav_links} ${styles.show_nav}` : `${styles.nav_links}`}>
                <li className={styles.nav_item}>
                    <Link href="/">Home<div className={styles.underline}></div></Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="/about">About<div className={styles.underline}></div></Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="/services">Services<div className={styles.underline}></div></Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="/contact">Contact<div className={styles.underline}></div></Link>
                </li>
                <li className={styles.nav_item}>
                    <div className={styles.dropdown}>
                        <Link href="/more" className={styles.more}>More</Link>
                        <div className={styles.dropdown_content}>
                            <Link href="/work" className={styles.mobileView}>Work<div className={styles.underline}></div></Link>
                            <Link href="/blog" className={styles.mobileView}>Blog<div className={styles.underline}></div></Link>
                            <Link href="/shop" className={styles.mobileView}>Shop<div className={styles.underline}></div></Link>
                        </div>
                    </div>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;
