import React from "react";
import styles from './sideNavigation.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserLarge,
  faLocationDot,
  faCircleInfo,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const SideNavigation = ({ opacities = {} }) => {
  // Provide default opacity values

  const { whoOp, whatOp, whereOp , whenOp } = opacities;

  return (
    <div className={styles.navigation} >
      <div className={styles.who} style={{ opacity: whoOp }}>
        <FontAwesomeIcon icon={faUserLarge} className={styles.fa} />
        <span className={styles.w} >W</span>ho
      </div>

      <div className={styles.what} style={{ opacity: whatOp }}>
        <FontAwesomeIcon icon={faCircleInfo} className={styles.fa} />
        <span className={styles.w} >W</span>hat
      </div>

      <div className={styles.where} style={{ opacity: whereOp }}>
        <FontAwesomeIcon icon={faLocationDot} className={styles.fa} />
        <span className={styles.w} >W</span>here & Ho
        <span className={styles.w}>w</span>
      </div>

      <div className={styles.when} style={{ opacity: whenOp }}>
        <FontAwesomeIcon icon={faCalendarDays} className={styles.fa} />
        <span className={styles.w} >W</span>hen
      </div>
    </div>
  );
};

  export default SideNavigation;