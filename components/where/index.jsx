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
import desk from "../../public/assets/desk.png";
import nyc from "../../public/assets/nyc.png";

function Where() {
  return (
    <>
      <div className={styles.container}>
        <TopSection />
        <BottomSection />
      </div>
    </>
  );
}

export default Where;

const TopSection = () => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.topRightSection}>
        <Navigation />
        <TextSection />
      </div>

      <div className={styles.topLeftSection}>
        <Image
          src={nyc}
          width={760}
          height={300}
          alt="profile image"
          className={styles.nyc}
        />
        <Image
          src={desk}
          width={475}
          height={250}
          alt="profile image"
          className={styles.desk}
        />
      </div>
    </div>
  );
};


function TextSection() {
  return (
    <div className={styles.textSection}>
      <h3 className={styles.workWithMe}>Work With Me Anywhere</h3>
      <p>
      Offering services remotely globally and on-location in <span className={`${styles.red} ${styles.bold}`}>New York City</span>.
      </p><p> Open to relocation for the right opportunity.
      </p>
      
     
    </div>
  );
}


const BottomSection = () => {
  return (
    <div className={styles.bottomContainer}>
      <div className={styles.bottomLeftSection}>
        <h2>
        Stay Updated, Always!
        </h2>
        <div className={styles.blsText}>
          <p>
          Stay in the loop with leading digital communication tools. Never miss an update on your project&apos;s progress.
          </p>
        </div>
      </div>
      <div className={styles.bottomRightSection}>
      <div>
        <Link className={styles.letsTalkLink} href="">
        Book a Consultation.
        </Link>
      </div>
      </div>
    </div>
  );
};



function Navigation() {
  return (
    <div className={styles.navigation}>
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
          <span className={styles.red}>W</span>here{" "}
          {/* <span className={styles.red}>&nbsp; & </span> &nbsp; Ho
          <span className={styles.red}>w</span> */}
        </div>
        <div className={styles.when}>
          <FontAwesomeIcon icon={faCalendarDays} className={styles.fa} />
          <span className={styles.w}>W</span>hen
        </div>
      </div>
    </div>
  );
}


{/* <div className={styles.brsText}>
<h2>
Ready to transform your digital journey?
</h2>
</div>
<div>
<Link className={styles.link} href="">
  {" "}
  Contact Me
</Link>
</div> */}