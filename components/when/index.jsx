import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./who.module.scss";
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
        {/* about me header */}
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

          {/* right section */}
          <div className={styles.rightSection}>
            <Image
              src={portfolio2}
              width={600}
              height={400}
              alt="profile image"
              className={styles.image}
            />
          </div>
        </div>

        {/* short bio elevator pitch */}
        <div className={styles.bioElevatorPitch}>
          <div className={styles.leftBioSection}>
            <div className={styles.bio}>
              <p>
                With over 20 years of diverse managerial and consulting
                experience, I am a Digital Transformation Manager with a proven
                track record in spearheading innovative web and mobile
                applications, optimizing UX/UI interfaces, and gnerating revenue
                growth.
                <br />
                <br />
                My multifaceted background in software engineering, event
                management, customer relations, and team leadership equips me to
                drive transformative digital changes across various sectors.
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
        </div>
      </div>
    </>
  );
}

export default Where;
