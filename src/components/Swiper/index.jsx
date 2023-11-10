"use client";

import styles from "./swiper.module.scss";
import Image from "next/image";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Boathouse from "../../app/assets/boathouse1.png"
import Uniclub from "../../app/assets/UniClub.png"
import jill from "../../app/assets/jill.png"
import penny from "../../app/assets/penny.png"
// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
const testimonials = [
  {
    src: Boathouse,
    title: "Peter Bischoff",
    link: "https://thecentralparkboathouse.com/_bio-peter-bischoff.php",
    linkType: "Website",
    job: "Banquets Director, The Loeb Boathouse",
    description:
      "In addition to his impressive work performance, Ramzi is a team player who is able to work well with others and contribute to the overall success of the team. I have no doubt that he will be a valuable asset to any organization that requires excellence and dedication.",
  },
  {
    src: {Uniclub},
    title: "John Greeley",
    job: "Executive Manager, 21 Club",
    link: "https://www.linkedin.com/in/john-g-4a121735/",
    linkType: "LinkedIn",
    description:
      "Ramzi consistently exceeded expectations and demonstrated his great managerial skills, resourcefulness, and ability to work under pressure and in difficult environments. He always managed to meet deadlines with great success and showed a remarkable ability to adjust to new challenges or unexpected circumstances.",
  },
  {
    src: {jill},
    title: "Jill Scarborough",
    job: "Restaurateur",
    link: "https://www.breakfastclubfarmingtonhills.com/",
    linkType: "Website",
    description:
      "One of the things that set Ramzi apart is his calm and professional demeanor, even when faced with challenging tasks. I highly recommend him for any managerial role, as he is sure to excel and bring value to any team.  I believe he will exceed expectations in any role he takes on.",
  },
  {
    src: {penny},
    title: "Penny White",
    job: "The Breakfast Club",
    link: "https://www.linkedin.com/in/penny-white-13805a3b/",
    linkType: "LinkedIn",
    description:
      "He worked for me yet taught me a lot. He is creative, hard working and loves his craft. I use him as an example to this day.",
  },
];
export default function App() {
  {
    return (
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <div
          slot="container-start"
          className={styles.parallaxBg}
          data-swiper-parallax="0%"
        ></div>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="cardDiv">
            <SwiperSlide>
              <div className={styles.company}>
                <Image
                  src={testimonial.src}
                  width="120"
                  height="120"
                  alt="image1"
                  className={styles.image}
                />
                <div>

                <div className={styles.title} data-swiper-parallax="-300">
                  {testimonial.title}
                </div>
                <div className={styles.subtitle} data-swiper-parallax="-200">
                  <a href={testimonial.link}>{testimonial.linkType}</a>
                </div>
                </div>
           
              </div>

              <div className={styles.text} data-swiper-parallax="-100">
                <p>{testimonial.description}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    );
  }
}
