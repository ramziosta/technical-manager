import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.styles.module.scss';
function FooterNavbar() {


  return (
    <>
      <nav className={styles.navbar}>

        <ul className={styles.list}>
          <li>
            <Link className={styles.links} href="/" >Neolocus</Link>
          </li>
          <li>
            <Link className={styles.links} href="/about" >About</Link>
          </li>
          <li>
            <Link className={styles.links} href="/demo" >Book a Demo</Link>
          </li>
     
        </ul>
        <ul className={styles.list}>
        <li>
            <Link className={styles.links} href="/newsletter" >Newsletter</Link>
          </li>
          <li>
            <Link className={styles.links} href="/contact" >Contact</Link>
          </li>
        </ul>

      </nav>
    </>
  );
}


export default FooterNavbar;
