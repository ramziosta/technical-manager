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
                Digital Transformation Manager
              </h2>
              <h3 className={styles.technicalManager}>
                Full Stack Web Developer
              </h3>
            </div>

            <div className={styles.mainParagraph}>
              <p>
                Digital consulting and management services for entrepreneurs
                startups and small businesses to establish online presence and
                streamline operations for success in today&apos;s{" "}
                <span className={styles.underline}>digital landscape.</span>
              </p>
            </div>

            <div className={styles.cta}>
              <h4>Elevate your business now!</h4>
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