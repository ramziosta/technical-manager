import React from "react";
import styles from "./styles.module.scss";
import FooterNavbar from "./Navbar";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <h4>Logo</h4>
          </div>

          <div className={styles.contactInfo}>
            <p>Contact Info</p>
            <p>Contact Info....</p>
          </div>

          <div className={styles.address}>
            <p>Ramzi Osta</p>
            <p>Address 1</p>
            <p>Address 2</p>
            <p>Zip Code</p>
          </div>

          <p>© Copyright 2023 Ramzi Osta</p>
        </div>

        <div className={styles.right}>
          <FooterNavbar />
        </div>
      </div>
    </>
  );
}
