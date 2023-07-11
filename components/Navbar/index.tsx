import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const openTag = "<";
const closeTag = "/>";
const logo = "RO "

function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.stickyContainer} >

        <nav className={styles.navContainer}>

          <div className={styles.logo}>
            <p>{openTag}{logo}{closeTag}</p>
          </div>

          <div className={styles.navBar} >


            <ul className={styles.links}>
              <li>

                <Link href="/" className={styles.navLinks} scroll={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/demo" className={styles.navLinks}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/tryItOut" className={styles.navLinks}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={styles.navLinks}>
                  Contact
                </Link>
              </li>
              <li>
                <a href="" className={styles.navLink} onClick={() => setVisible(true)} >More</a>
                {visible &&
                  <ul className={styles.dropdown}>
                    <li><Link href="/demo" className={styles.navLinks}>
                      Work
                    </Link></li>
                    <li><Link href="/blog" className={styles.navLinks}>
                      Blog
                    </Link></li>
                  </ul>
                }
              </li>

            </ul>

          </div>



        </nav>

      </div>
    </>
  );
}

export default Navbar;