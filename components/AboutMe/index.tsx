import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./aboutMe.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserLarge} from '@fortawesome/free-solid-svg-icons';



const testimonials = [{src:"", title:"The Boat House", description:"lorem ipsum"},{src:"", title:"John Greeley", description:"loren ipsum"},{src:"", title:"Jill Scarbrough", description:"lorem ipsum"},{src:"", title:"Penny White", description:"lorem ipsum"}];

function Card ({src, title, description}: {src: string, title: string, description: string}){
  return (
    <>
    <Image src={src} alt="" width="10" height="10" className={styles.image}/>
    <h3>{title}</h3>
    <p>{description}</p>
    </>
  )
}

function AboutMe() {
  return (
    <>
      <div className={styles.container}>
        {/* about me header */}
        <div className={styles.aboutHeader}>
          <div className={styles.leftSection}>
            <div className={styles.info}>
            <FontAwesomeIcon icon={faUserLarge}/>
              who what where when
            </div>
          </div>
          <div className={styles.rightSection}>
            <Image src="" width={100} height={100} alt="profile image"/>
          </div>
        </div>

        {/* short bio elevator pitch */}
        <div className={styles.bioElevatorPitch}>
          <div className={styles.leftBioSection}>
            <div className={styles.bio}>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum dicta quae quo veritatis eveniet totam est aspernatur in sunt explicabo consectetur, mollitia officia qui tempore nesciunt assumenda minima repudiandae?</p>
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
         {testimonials.map((testimonial, index) =><Card key={index} {...testimonial} />)}
        </div>
      </div>
    </>
  )
}

export default AboutMe