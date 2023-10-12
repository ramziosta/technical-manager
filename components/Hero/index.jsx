import React from "react";
import Link from "next/link";
import Image from "next/image";
import ramzi from "../../public/assets/PortfolioImage.png";
import styles from "./hero.module.scss";

//this is a comment

function Hero() {
  const height = "650";
  const width = "430";
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.leftSection}>
          <div className={styles.container}>
            <div className={styles.mainHeader}>
              <h1>Ramzi Osta</h1>
              <h2 className={styles.fullStackDeveloper}>
                Technical Project Manager
              </h2>
              <h3 className={styles.technicalManager}>
                 Web Developer
              </h3>
            </div>

            <div className={styles.mainParagraph}>
              <p>
              Providing digital consulting and management services to help entrepreneurs, startups, and small businesses establish a strong online presence and streamline operations for success in today&apos;s{" "}
                <span className={styles.underline}>digital world.</span>
              </p>
             
            </div>

            <div className={styles.cta}>
              <h3 className={styles.elevate}>Let&apos;s Elevate Your </h3><h3 className={styles.elevate}>Business Today!!</h3>
            </div>
          </div>
          <div className={styles.ctaButton}>
            <Link href="/contact">Contact Me</Link>
          </div>
        </div>

        <div className={styles.rightSection}>
          <Image
            className={styles.image}
            src={ramzi}
            alt="Ramzi Osta"
            width={width}
            height={height}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
