import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./aboutMe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserLarge,
  faLocationDot,
  faCircleInfo,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import portfolio2 from "../../public/assets/AboutMePic.png";

const testimonials = [
  { src: "", title: "The Boat House", description: "lorem ipsum" },
  { src: "", title: "John Greeley", description: "loren ipsum" },
  { src: "", title: "Jill Scarbrough", description: "lorem ipsum" },
  { src: "", title: "Penny White", description: "lorem ipsum" },
];

function Card({ src, title, description }) {
  return (
    <>
      <Image
        src={src}
        alt=""
        width="100"
        height="100"
        className={styles.image}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
}

function AboutMe() {
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
              width={400}
              height={266}
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
                I am a Full-Stack web developer with a strong background in
                UI/UX and graphic design. Skilled in leadership, communication,
                organization, and time management. I am also proficient in media
                production, including composition, writing, recording, and
                editing. 
                <br />
                <br />I build full-stack web and mobile apps, and maintaining
                digital products, databases, servers, and hosting platforms.
                <br />
                <br />
                In managing businesses I have a proven track record of success in
                creating and implementing innovative web solutions, managing
                budgets and inventory, training staff, and organizing and
                executing events. Skilled in full-stack web development and
                project management tools.
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

        {/* about me testimonials */}
        {/* <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} {...testimonial} />
          ))}
        </div> */}
      </div>
    </>
  );
}

export default AboutMe;
