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
              Elevate Your Competitive Edge in Today&aps;s Digital Landscape
              with Me as your Digital Transformation Manager
            </h2>
          </div>
        </div>

      </div>

      {/* What Info-Section Grid*/}
      <div className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div Name={styles.parent}>
            <div Name={styles.div1}>
              <Image src={image1} width={400} height={300} alt="image1" />
              <Image src={image2} width={400} height={300} alt="image2" />
            </div>
            <div Name={styles.div2}>
              <p>
                With over 20 years of experience in managerial and technical
                roles, I bring a wealth of expertise to drive your projects and
                initiatives to success. My diverse skill set encompasses
                leadership, technology, project management, and innovation. I
                offer comprehensive support in project planning and execution,
                agile methodologies, technical problem-solving, and strategic
                decision-making. Whether it&apos;s leading cross-functional
                teams, leveraging agile principles, or implementing cutting-edge
                technologies, I am dedicated to helping your organization thrive
                in the digital era.
              </p>
            </div>
            <div Name={styles.div3}>
              <p>
                In the ever-evolving landscape of modern business, the race to
                outpace competitors and maintain a strategic focus on the bigger
                picture is relentless. Yet, amidst the myriad of tasks and
                responsibilities, finding the time and resources to excel can be
                an uphill battle. So, where do we find the answer?
              </p>
            </div>
            <div Name={styles.div4}>
              {" "}
              <h3>Empowering Your Success</h3>
            </div>
            <div Name={styles.div5}>
              <p>
                My mission is to empower your business for sustainable growth by
                optimizing your online presence and streamlining operations.
                I&apos;m dedicated to helping you unlock your full potential
                while conserving valuable time and resources. With a proven
                track record in management and a focus on your online footprint,
                I&apos;m here to facilitate your journey to success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* what bottom section */}
      <div className={styles.whatBottomSection}>
        <h3>
          Delegate confidently and regain your time as I manage your
          project&apos;s intricacies. With hands on experience in AI, 3D and AR
          teams, I bring versatile skills to streamline your journey.
        </h3>
      </div>
    </>
  );
}

export default What;
