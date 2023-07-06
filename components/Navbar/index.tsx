import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';


function Navbar() {
  return (
    <>
    <div className={styles.stickyContainer} >
      <nav className={styles.navbar}>

      <div className={styles.logo}>
         <h4>Logo</h4>
        </div>
        <div className={styles.navLinks} >


        <ul className={styles.links}>
          <li>
            
            <Link href="/" className={styles.navLinks} scroll={true}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/demo" className={styles.navLinks}>
             Book a demo
            </Link>
          </li>
          <li>
            <Link href="/tryItOut" className={styles.navLinks}>
             Try It Out
            </Link>
          </li>
          <li>
            <Link href="/blog" className={styles.navLinks}>
              Newsletter
            </Link>
          </li>
          <li>
            {/* links to <div id="newsletter">...</div>  */}
            <Link href="/#contact" className={styles.navLinks}>
              Contact
            </Link>
          </li>
        </ul>
        
        </div>

    

      </nav>
      </div>
    </>
  );
}

export default Navbar;