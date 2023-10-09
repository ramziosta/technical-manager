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

const BottomSection = () => {
  return (
    <div className={styles.bottomContainer}>
      <div className={styles.bottomLeftSection}>
        <h2>
          Stay connected with your projects in{" "}
          <span className={styles.italic}>real time</span>.
        </h2>
        <div className={styles.blsText}>
          <p>
            I utilizes digital communication channels to keep you in the loop,
            along with industry standard apps and methodologies to manage your
            projects, like Jira, Trello, Notion, Asana, Slack, Discord, Zoom,
            Microsoft Teams, Google Meet, and more.
            <br />
            Never miss a beat on your project progress.
          </p>
        </div>
      </div>
      <div className={styles.bottomRightSection}>
        <div className={styles.brsText}>
          <h2>
            I&apos;d love to learn about your projects and explore how I can
            assist in realizing your objectives.
          </h2>
        </div>
        <div>
          <Link className={styles.link} href="">
            {" "}
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

function TextSection() {
  return (
    <div className={styles.textSection}>
      <p>
        I offer my services{" "}
        <span className={`${styles.red} ${styles.bold}`}>remotely</span> for
        individuals, companies, small businesses, and cross-functional teams
        globally.
      </p>
      <p>
        In addition, I provide hybrid and on-location services for the{" "}
        <span className={`${styles.red} ${styles.bold}`}>New York City</span>{" "}
        area.
      </p>
      <p>Outside NYC? I&apos;m open to relocation for the right project.</p>
      <div>
        <Link className={styles.letsTalkLink} href="">
          Let&apos;s talk!
        </Link>
      </div>
    </div>
  );
}

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
          <span className={styles.red}>&nbsp; & </span> &nbsp; Ho
          <span className={styles.red}>w</span>
        </div>
        <div className={styles.when}>
          <FontAwesomeIcon icon={faCalendarDays} className={styles.fa} />
          <span className={styles.w}>W</span>hen
        </div>
      </div>
    </div>
  );
}
