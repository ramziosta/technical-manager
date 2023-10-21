import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./whoo.module.scss";
import SideNavigation from "../SideNavigation/index";
import portfolio2 from "../../public/assets/AboutMePic.png";
import Swiper from "../Swiper/index";

function Who() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainSection}>
        {/* about me header */}
        <div className={styles.aboutHeader}>
          {/* left section */}
          <div className={styles.leftSection}>
            <SideNavigation />
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
        <div className={styles.elevatorPitch}>
          <div className={styles.leftBioSection}>
            <div className={styles.bio}>
              <p>
                Over 20 years of rich managerial and consulting experience, I
                stand as a Digital Transformation Manager with a distinguished
                track record. I&apos;ve pioneered innovative web and mobile
                applications, honed UX/UI interfaces, and catalyzed revenue
                growth.
                <br />
                <br />
                My diverse expertise spans software engineering, event
                management, customer relations, and team leadership, uniquely
                positioning me to champion transformative digital shifts across
                a spectrum of industries.
                <br />
                <br />
                Driven by a passion for cutting-edge technologies with business
                strategies, dedicated to empowering organizations with strategic
                digital solutions.
              </p>
            </div>
          </div>
          <div className={styles.rightBioSection}>
            <div className={styles.redContainer}>
             </div>
            <div className={styles.bioCTA}>
              <Link href="/about">Learn More About Me</Link>
            </div>
          </div>
        </div>
        </div>
        {/* about me testimonials */}
        <div className={styles.testimonialSection}>
          <h2 className={styles.whatTheySay}>What They Say:</h2>
          <div className={styles.testimonials}>
            <Swiper />
          </div>
        </div>
      </div>
    </>
  );
}

export default Who;
