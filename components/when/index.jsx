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
          <div className={styles.leftSectionText}>
         
            <p clasName={styles.text}>
            Unlock the full potential of your project or your online presence. Together, we can discuss your specific needs and create a personalized plan to achieve your business goals. Time is of the essence, let&apos;s start now.
            </p>
          
          <div className={styles.cta}>
            <Link href="/" className={styles.link}>
              Schedule your project
            </Link>
          </div>

          </div>

        
        
        </div>

        <div className={styles.rightSection}>
          <div className={styles.headerText}>
            <h2>
              I want to know about your project. Contact me to discuss your
              needs and let&apos;s work together to achieve your business goals.
            </h2>
          </div>
          <div className={styles.calendar}>
            <Image alt="calendar" width={800} height={350} src={calendar} />
          </div>
        </div>
      </div>
    </>
  );
}

export default When;

{
  /* about me header */
}
<div className={styles.aboutHeader}>
  {/* left section */}
  <div className={styles.leftSection}></div>
</div>;

{
  /* short bio elevator pitch */
}
<div className={styles.bioElevatorPitch}>
  <div className={styles.leftBioSection}>
    <div className={styles.bio}>
      <p>
        With over 20 years of diverse managerial and consulting experience, I am
        a Digital Transformation Manager with a proven track record in
        spearheading innovative web and mobile applications, optimizing UX/UI
        interfaces, and gnerating revenue growth.
        <br />
        <br />
        My multifaceted background in software engineering, event management,
        customer relations, and team leadership equips me to drive
        transformative digital changes across various sectors.
        <br />
        <br />
        Passionate about integrating modern technologies with business
        operations, I&apos;m dedicated to empowering organizations with
        strategic digital solutions.
      </p>
    </div>
  </div>
  <div className={styles.rightBioSection}>
    <div className={styles.redContainer}></div>
    <div className={styles.bioCTA}>
      <Link href="/about">More About Me</Link>
    </div>
  </div>
</div>;
