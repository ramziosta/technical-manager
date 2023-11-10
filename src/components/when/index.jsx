import React from "react";
import Image from "next/image";
import styles from "./when.module.scss";
import SideNavigation from '../SideNavigation/index';
import calendar from "../../app/assets/Calendar.png";

function When() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.sideNav}>
                    <SideNavigation/>
</div>
                    <div className={styles.headerText}>
                        <h2>
                            Ready to Transform Your Digital Journey? Let&apos;s Talk.
                        </h2>
                    </div>

                </div>
                <div className={styles.textSection}>
                    <p>
                        Let&apos;s collaborate to elevate your digital presence.</p>
                    <p> Discuss your needs and let&apos;s craft a plan tailored for your success.
                    </p>

                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.calendar}>
                        <Image alt="calendar" width={600} height={250} src={calendar}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default When;

