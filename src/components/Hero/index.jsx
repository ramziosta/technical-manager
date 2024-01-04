import React from "react";
import Image from "next/image";
import ramzi from "../../app/assets/hero1.png";
import styles from "./hero.module.scss";

function Hero() {
    const height = "650";
    const width = "430";
    return (
        <>
            <div id="hero" className={styles.hero}>
                {/* //> Left Section */}

                <div className={styles.leftSection}>
                    <div className={styles.container}>
                        <div className={styles.mainHeader}>
                            <h1>Ramzi Osta</h1>
                            <h2 className={styles.fullStackDeveloper}>
                                Digital Transformation Manager
                            </h2>
                            {/* <h3 className={styles.technicalManager}>
                 Web Developer
              </h3> */}
                        </div>

                        <div className={styles.mainParagraph}>
                            <p>
                                Empowering entrepreneurs, startups, and small businesses with
                                tailored digital consulting and management solutions. My mission
                                is to fortify your online presence and optimize operations,
                                ensuring you thrive in today&apos;s{" "}
                                <span className={styles.underline}>digital landscape.</span>
                            </p>
                        </div>

                        <div className={styles.banner}>
                            <h3 className={styles.elevate}>Let&apos;s Elevate Your </h3>
                            <h3 className={styles.elevate}>Digital Presence Today!!</h3>
                        </div>
                    </div>
                    <div className={styles.ctaButton}>
                        <a href="#contact"> Start Now</a>
                    </div>


                </div>
                {/* //> */}
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
