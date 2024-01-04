"use client"
import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// import required modules
import {EffectFade, Navigation, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./about.module.scss"
import {Metadata} from "next";
import Image from "next/image";
import {notFound} from "next/navigation";
import {cache} from "react";
import {images} from "../assets/images/images";

export default function Page() {

    return (
        <>
            <div className={`flex flex-row mt-10 ml-32 mr-32 mb-32 ${styles.container}`}>
                <div className="flex-1"> left</div>
                <div className="flex-1">
                    <p>
                        Over the past 20 years in project management, I have worked alongside a variety of companies,
                        consistently bringing positive change. My experiences across diverse environments have allowed
                        me to
                        connect with people from all walks of life. This journey has cultivated a unique perspective on
                        team
                        dynamics and deepened my understanding of diverse interactions.
                    </p>
                    <br/>
                    <p>
                        After graduating from university with a bachelor&apos;s degree in Chemistry and Biology, I
                        delved
                        into
                        the world of environmental chemistry, toxic and waste management, and chemical sample analysis.
                        I
                        gained valuable experience in these fields before life presented me with new opportunities and
                        outlets for my passions.
                    </p>
                    <br/>
                    <p>
                        In addition to my background in environmental chemistry and toxic waste management, I also have
                        extensive experience in the food industry. I have held leadership positions in event planning
                        and
                        served as a regional manager, overseeing the planning of events for prestigious organizations
                        such
                        as the UN, German Embassy, and Netflix. Through my strategic initiatives, I have successfully
                        contributed to revenue generation, with a track record of establishing $2 million for
                        establishments.
                    </p>
                    <br/>
                    <p>
                        My passion for technology, digital media, and design enhances my professional path. It led me to
                        take advanced studies in Digital Media, Music Production, UX/UI, and Full-stack Web Development
                        at
                        prestigious institutions such as MIT, the University of Michigan, CalArts, Berklee, and IBM.
                    </p>
                    <br/>
                    <p>
                        As the digital landscape evolves, my focus now converges on AI and cutting-edge technologies.
                        Drawing from past experiences and combined with newly acquired ones, I am not just looking to
                        collaborate; I am eager for symbiotic growth with diverse teams. The future, as I see it, is one
                        where we do not chase innovation. we define it and make it beneficial for everyone. By blending
                        traditional expertise with contemporary insights, we have the potential to craft an invigorating
                        digital narrative.
                    </p>
                    <br/>
                    <p>
                        In this journey, I look forward to sharing my insights and embracing fresh perspectives from
                        those I
                        collaborate with. Together, we aim to create, innovate, and elevate the digital future.
                    </p>
                    <br/>
                    <p>
                        I have a deep appreciation for the arts, science, and technology. When I am not immersed in
                        these
                        fields, you can find me exploring nature with my wonderful Boston Terrier dog Leonardo, engaging
                        in
                        activities like foraging and
                        photography. Within my community, I find joy in volunteering and assisting the elderly in
                        understanding and connecting with technology.
                    </p>
                    <br/>
                    <p>
                        Outside of work, at home, I channel my creativity through playing the
                        Bass Guitar, producing electronic music, and delving into the world of sheet music and notation.
                        Additionally, I am passionate about learning languages and am currently advancing my skills in
                        Spanish, German, and Hebrew.
                    </p>
                </div>
            </div>


                <div>
                    <Swiper
                        spaceBetween={30}
                        navigation={true}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {images.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div className="flex  justify-center items-center">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.alt}
                                    width={1000} // Adjust the size as needed
                                    height={600} // Adjust the size as needed
                                    className=" m-10  object-contain mx-auto"
                                />
                                </div>
                                <div className="flex flex-col justify-center items-center mb-10 ">
                                    <h3 className="text-xl font-bold">{image.title}</h3>
                                    <p className="max-w-md sm:max-w-sm text-center" >{image.description}</p>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

        </>
    );
}