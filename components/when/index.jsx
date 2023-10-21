import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./when.module.scss";
import SideNavigation from '../SideNavigation/index';
import calendar from "../../public/assets/Calendar.png";

function When() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
        <SideNavigation />
          <div className={styles.leftSectionText}>
            <p className={styles.text}>
            Let&apos;s collaborate to elevate your digital presence. Discuss your needs and let&apos;s craft a plan tailored for your success.
            </p>

          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.headerText}>
            <h2>
            Ready to Transform Your Digital Journey? Let&apos;s Talk.
            </h2>
          </div>
          <div className={styles.calendar}>
            <Image alt="calendar" width={600} height={250} src={calendar} />
          </div>
        </div>
      </div>
    </>
  );
}

export default When;

