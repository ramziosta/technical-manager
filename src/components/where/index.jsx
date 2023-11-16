'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./where.module.scss";
import SideNavigation from "../SideNavigation/index";
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
                                <video src="/video/videoloop.mp4" width={500} height={300} muted loop autoPlay
                                       className={styles.desk}></video>

                            </div>
                            <h3 id="where" className={styles.workWithMe}>Work With Me Anywhere.</h3>
                            <div className={styles.sideNav}>
                                <SideNavigation opacities={{whoOp: 0.2, whatOp: 0.3, whereOp: 1.0, whenOp: 0.1}}/>
                            </div>
                        </div>


                        <div className={styles.textSection}>
                            <p>
                                Offering services remotely globally and on-location in{" "}
                                <span className={styles.bold}>New York City</span>
                                {/*Offering services remotely globally and on-location in*/}
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



