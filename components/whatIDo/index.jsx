import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./what.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserLarge,
  faLocationDot,
  faCircleInfo,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import image1 from "../../public/assets/portfolio2.png";
import image2 from "../../public/assets/building.png";

function What() {
  return (
    <>
      {/* What Header */}
      <div className={styles.whatHeader}>
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

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.info1}>
            <h2>
              Difficulty in finding time and energy to focus on the big picture?
            </h2>
          </div>
          <div className={styles.info2}>
            <h2>
              Stay Competitive in Today&apos;s Digital Landscape with your
              personal Virtual Assistant
            </h2>
          </div>
        </div>
      </div>

      {/* What Info-Section Grid*/}
      <div className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div Name={styles.parent}>
            <div Name={styles.div1}>
              <Image src={image1} width={400} height={300} alt="image1"/>
              <Image src={image2} width={400} height={300} alt="image2"/>
            </div>
            <div Name={styles.div2}>
              <p>
                As a virtual assistant, I am here to help you achieve your goals
                in the digital landscape. My services include web development,
                content creation, project management, email campaigns, data
                management and research. I can assist in organization,
                presentations, execution of projects and troubleshoot any
                technical issues and more.
              </p>
            </div>
            <div Name={styles.div3}>
              <p>
                In today&apos;s fast-paced business world, it&apos;s crucial to
                stay ahead of the competition and focus on the big picture.
                However, with so many tasks and responsibilities to juggle, it
                can be difficult to find the time and energy to do so. Solution?
              </p>
            </div>
            <div Name={styles.div4}>
              {" "}
              <h3>I’m Here to help you!</h3>
            </div>
            <div Name={styles.div5}>
              <h3>Streamline Your Business Growth</h3>
              <p>
                My goal is to help you enhance your online presence, stay
                competitive and achieve success while saving valuable time and
                resources. I am dedicated to helping you reach your full
                potential and confident in my ability to assist you with your
                management needs and online presence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* what bottom section */}
      <div className={styles.whatBottomSection}>
        <h3>
          Free up your time and delegate with confidence by letting me handle
          the details of your project needs one task at a time.
        </h3>
      </div>
    </>
  );
}

export default What;
