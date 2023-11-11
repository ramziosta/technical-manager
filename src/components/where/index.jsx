import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./where.module.scss";
import SideNavigation from "../SideNavigation/index";
import desk from "../../app/assets/desk.png";
import nyc from "../../app/assets/nyc.png";

function Where() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <div className={styles.navigationAndText}>
                        <div className={styles.sideNavigation}>
                            <div className={styles.images}>
                                <Image
                                    src={nyc}
                                    width={760}
                                    height={300}
                                    alt="new york"
                                    className={styles.nyc}
                                />
                                <Image
                                    src={desk}
                                    width={475}
                                    height={250}
                                    alt="working on desk"
                                    className={styles.desk}
                                />
                            </div>
                            <div className={styles.sideNav}>
                                <SideNavigation opacities={{whoOp: 0.2, whatOp: 0.3, whereOp: 1.0, whenOp: 0.1}}/>
                            </div>
                        </div>

                        <h3 className={styles.workWithMe}>Work With Me Anywhere.</h3>
                        <div className={styles.textSection}>
                            <p>
                                Offering services remotely globally and on-location in{" "}
                                <span className={styles.bold}>New York City</span>
                                {/*Offering services remotely globally and on-location in{" "}*/}
                                {/*<span className={`${styles.red} ${styles.bold}`}>New York City</span>.*/}
                            </p>
                            <p> Open to relocation for the right opportunity.</p>
                        </div>
                    </div>

                </div>
                <div className={styles.bottomContainer}>

                    <div className={styles.leftSection}>
                        <h2>Stay Updated, Always!</h2>
                        <div className={styles.blsText}>
                            <p>
                                Stay in the loop with leading digital communication tools.
                                Never
                                miss an update on your project&apos;s progress.
                            </p>
                        </div>
                    </div>

                    <div className={styles.rightSection}>
                        <div className={styles.bookAConsultation}>
                            <Link href="">
                                Book a Consultation.
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Where;



