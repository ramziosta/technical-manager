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

const HeaderSection = () => {
  return (
    <>
      {/*//> Done What Header */}
      <div className={styles.whatHeader}>
        {/* left section */}
        {/*TODO create this section into a component*/}

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
            <div className={styles.redDiv}></div>
            <div className={styles.text1}>
              <h2>Difficulty in finding time and</h2>
              <h2>energy to focus on the big picture?</h2>
            </div>
          </div>

          <div className={styles.info2}>
            <h2>
              Elevate Your Competitive Edge in Today&apos;s Digital Landscape
              with Me as your Digital Transformation Manager
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

const MiddleSection = () => {
  return (
    <>
      {/* //>Image section done */}
      <div className={styles.imagesAndTextContainer}>
        <div className={styles.red}>
          <div className={styles.image1}>
            {" "}
            <Image
              className={styles.image}
              src={image2}
              width={400}
              height={300}
              alt="image2"
            />
          </div>
          <div className={styles.image}>
            <Image src={image1} width={400} height={300} alt="image1" />
          </div>
        </div>
        <div className={styles.green}>
          <div className={styles.text}>
            <p>
              My diverse skill set encompasses leadership, technology, project
              management, and innovation. I offer comprehensive support in
              project planning and execution, agile methodologies, technical
              problem-solving, and strategic decision-making. Whether it&apos;s
              leading cross-functional teams, leveraging agile principles, or
              implementing cutting-edge technologies, I am dedicated to helping
              your organization thrive in the digital era.
            </p>
          </div>
          <div className={styles.h3}>
            <h3>I Get The Job Done!</h3>
          </div>
        </div>
      </div>

      {/* //? Text Section */}

      <div className={styles.textContainer}>
        <div className={styles.leftText}>
          <p className={styles.leftParagraph}>
            In the ever-evolving landscape of modern business, the race to
            outpace competitors and maintain a strategic focus on the bigger
            picture is relentless. Yet, amidst the myriad of tasks and
            responsibilities, finding the time and resources to excel can be an
            uphill battle. So, where do we find the answer?
          </p>
        </div>
        <div className={styles.rightText}>
          <div className={styles.h3Div}>
            <h3 className={styles.growth}>Streamline Your Business Growth</h3>
            <div className={styles.blackDiv}></div>
            <div className={styles.silverDiv}></div>
          </div>

          <div className={styles.bottomText}>
            <p className={styles.rightParagraph}>
              My mission is to empower your business for sustainable growth by
              optimizing your online presence and streamlining operations.
              I&apos;m dedicated to helping you unlock your full potential while
              conserving valuable time and resources. With a proven track record
              in management and a focus on your online footprint, I&apos;m here
              to facilitate your journey to success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const BottomSection = () => {
  return (
    <>
      {/*//< Needs Editing what bottom h3 */}
      <div className={styles.whatBottomSection}>
        <div className={styles.silverSection}>
          <h3>
            Delegate confidently and regain your time as I manage your
            project&apos;s intricacies. With hands on experience in AI, 3D and
            AR teams, I bring versatile skills to streamline your journey.
          </h3>
        </div>
        <div className={styles.bottomBlackDiv}></div>
        <div className={styles.bottomRedDiv}></div>
      </div>
    </>
  );
};

function What() {
  return (
    <>
      <HeaderSection />

      <MiddleSection />

      <BottomSection />

      <ServicesSection />
    </>
  );
}

export default What;

const ServicesSection = () => {
  return (
    <>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesH2}>
          <h2>Services</h2>
        </div>
        <div className={styles.silverContainer}>
          <h2>List Of Services</h2>
          {/* //> Titles */}
          <div className={styles.titles}>
            <h3>Software and Web Development Services</h3>
            <h3>Digital and Project Management Services</h3>
          </div>
          {/* //> End of Titles */}
          {/* //! black container */}
          <div className={styles.blackContainer}>
            <div className={styles.listContainer}>
              {/*  //< left lists */}
              <div className={styles.leftList}>
                <ul>
                  <li>Full Stack, Front End or Backend Development.</li>
                  <li>Mobile Development with React Native.</li>
                  <li>UX/UI Design, Research and Case Studies.</li>
                  <li>File Management, Documentation and Reporting.</li>
                  <li>SCRUM, Communication and Collaboration</li>
                  <li>Content Creation and Social Media Management.</li>
                </ul>
              </div>
              {/* //? Right List  */}
              <div className={styles.rightList}>
                <ul>
                  <li>Office Management and HR</li>
                  <li>Data Entry and Research.</li>
                  <li>Vendor Management and Sourcing.</li>
                  <li>Client Management.</li>
                  <li>Customer Service.</li>
                  <li>Event Planning & Execution.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* //!end of black container */}
          <div className={styles.linkContainer}>
            <Link className={styles.link} href="/">
              More About My Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};