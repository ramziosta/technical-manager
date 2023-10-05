import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./where.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserLarge,
  faLocationDot,
  faCircleInfo,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import portfolio2 from "../../public/assets/AboutMePic.png";




function Where() {
  return (
    <>
      <div className={styles.container}>
 
        <div className={styles.topContainer}>
          <div className={styles.rightSection}>
            <div className={styles.navigation}></div>
            <div className={styles.textSection}></div>
          </div>
          <div className={styles.leftSection}></div>
        </div>
 
        <div className={styles.bottomContainer}></div>

       
      </div>
    </>
  );
}

export default Where;


<div className={styles.aboutHeader}>
{/* left section */}
<div className={styles.leftSection}>
  <div className={styles.info}>
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
</div>


</div>





 {/* right section */}
 <div className={styles.rightSection}>
 <Image
   src={portfolio2}
   width={600}
   height={400}
   alt="profile image"
   className={styles.image}
 />
 <Image
   src={portfolio2}
   width={900}
   height={400}
   alt="profile image"
   className={styles.image}
 />
</div>