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

const testimonials = [
  {
    src: "",
    title: "The Loeb BoatHouse, Central Park",
    description:
      "In addition to his impressive work performance, Ramzi is a team player who is able to work well with others and contribute to the overall success of the team. I have no doubt that he will be a valuable asset to any organization that requires excellence and dedication.",
  },
  {
    src: "",
    title: "John Greeley",
    description:
      "Ramzi consistently exceeded expectations and demonstrated his great managerial skills, resourcefulness, and ability to work under pressure and in difficult environments. He always managed to meet deadlines with great success and showed a remarkable ability to adjust to new challenges or unexpected circumstances.",
  },
  {
    src: "",
    title: "Jill Scarbrough",
    description:
      "One of the things that set Ramzi apart is his calm and rofessional demeanor, even when faced with challenging tasks. I highly recommend him for any managerial role, as he is sure to excel and bring value to any team.  I believe he will exceed expectations in any role he takes on.",
  },
  {
    src: "",
    title: "Penny White",
    description:
      "He worked for me yet taught me a lot. He is creative, hard working and loves his craft. I use him as an example to this day",
  },
];

function Card({ src, title, description }) {
  return (
    <>
      <div className={styles.card}>
        <Image
          src={src}
          alt=""
          width="100"
          height="100"
          className={styles.cardImage}
        />
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </>
  );
}

function Who() {
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

        {/* about me testimonials */}
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.cardDiv}>
              {" "}
              <Card {...testimonial} />{" "}
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Who;
