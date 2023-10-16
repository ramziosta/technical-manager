import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./when.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserLarge,
  faLocationDot,
  faCircleInfo,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import calendar from "../../public/assets/Calendar.png";

function When() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
        <Navigation />
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

const Navigation = () =>{
  return (
    <div className={styles.navigation}>
    <div className={styles.who}>
      <FontAwesomeIcon icon={faUserLarge} className={styles.fa} />
      <span className={styles.w}>W</span>ho
    </div>

    <div className={styles.what}>
      <FontAwesomeIcon icon={faCircleInfo} className={styles.fa} />
      <span className={styles.w}>W</span>hat
    </div>

    <div className={styles.where}>
      <FontAwesomeIcon icon={faLocationDot} className={styles.fa} />
      <span className={styles.w}>W</span> here & Ho
      <span className={styles.w}>w</span>
    </div>
    <div className={styles.when}>
      <FontAwesomeIcon icon={faCalendarDays} className={styles.fa} />
      <span className={styles.w}>W</span>hen
    </div>
  </div>

  );
}