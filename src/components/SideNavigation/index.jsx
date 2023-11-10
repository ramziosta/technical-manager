import React from "react";
import styles from './sideNavigation.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserLarge,
  faLocationDot,
  faCircleInfo,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const SideNavigation = () =>{
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

  export default SideNavigation;