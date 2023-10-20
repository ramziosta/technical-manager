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
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
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
              <h2>Facing Challenges in Steering the Bigger Picture?</h2>
            </div>
          </div>

          <div className={styles.info2}>
            <h2 className={styles.h2}>
              Elevate Your Competitive Edge in Today&apos;s Tech Landscape with
              My Expertise as your Digital Transformation Manager.
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
            <ul>
              <li>
                {" "}
                <span className={styles.bold}> Technical Bridge:</span>{" "}
                Expertise in programming and UX/UI design enables enhanced team
                communication and project collaboration.{" "}
              </li>
              <li>
                {" "}
                <span className={styles.bold}>Diverse Expertise:</span> From
                leadership to technology, I bring a multifaceted skill set to
                the table.
              </li>

              <li>
                <span className={styles.bold}>Comprehensive Support:</span> I
                specialize in project planning, agile methodologies, and
                strategic decision-making.
              </li>
              <li>
                {" "}
                <span className={styles.bold}>
                  Innovation at the Forefront:
                </span>{" "}
                Whether it&apos;s leading teams, leveraging agile principles, or
                implementing the latest technologies, I&apos;m committed to
                ensuring your organization&apos;s digital success.
              </li>
            </ul>
          </div>
          <div className={styles.h3}>
            <h3>I Don&apos;t Just Manage; I Get The Job Done!</h3>
          </div>
        </div>
      </div>

      {/* //? Text Section */}

      <div className={styles.textContainer}>
        <div className={styles.leftText}>
          <p className={styles.leftParagraph}>
            In today&apos;s dynamic tech landscape, staying ahead of competitors
            while keeping an eye on the overarching goals is a challenge. Amidst
            the multitude of tasks, how do you ensure you&apos;re always at the
            forefront?
          </p>
        </div>
        <div className={styles.rightText}>
          <div className={styles.h3Div}>
            <h3 className={styles.growth}>
              Harness Sustainable Business Growth
            </h3>
            <div className={styles.blackDiv}></div>
            <div className={styles.silverDiv}></div>
          </div>

          <div className={styles.bottomText}>
            <p className={styles.rightParagraph}>
              My goal is to bolster your business&apos;s growth by enhancing its
              digital presence and refining operational processes. I&apos;m
              committed to unlocking your organization&apos;s utmost potential,
              ensuring efficient use of time and resources.
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
            Harness the power of innovation. As your dedicated guide, I navigate
            the intricacies of your projects, ensuring seamless execution and
            transformative results.
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
          <Accordion allowToggle>
            <div className={styles.accordion}>
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <p className={styles.boxTitle}>Digital & Web Services</p>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <div className={styles.leftList}>
                    <ul>
                      <li>Full Stack.</li>
                      <li>Front End.</li>
                      <li>Back End Development.</li>
                      <li> Mobile Development.</li>
                      <li>UX/UI Design.</li>
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </div>
            <div className={styles.accordion2}>
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <div className={styles.boxTitle}>Project Management</div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={1}>
                  <div className={styles.middleList}>
                    <ul>
                      <li>Scrum</li>
                      <li>Communincation & Collaboration.</li>
                      <li>Content Creation.</li>
                      <li>Social Media Management.</li>
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </div>
            <div className={styles.accordion}>
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <div className={styles.boxTitle}>
                      Adminstrative Services
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={1}>
                  <div className={styles.rightList}>
                    <ul>
                      <li>H.R.</li>
                      <li>Data Entry.</li>
                      <li>Event Planning.</li>
                      <li>Office Management.</li>
                      <li>Vendor & Client Management.</li>
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </div>
          </Accordion>
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
 