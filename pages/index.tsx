import React, { FC } from 'react';
import type { Metadata } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Neolocus',
  description: 'Welcome Neolocus',
};

interface Data {
  id: number;
  cardHeader: string;
  cardInfo: string;
  image: string;

}

interface CardProps {
  data: Data;
  width: number;
  height: number;
}

const Card: FC<CardProps> = ({ data, width, height }) => {
  return (
    <div className={styles.card}>
      <Image src={data.image} alt="vector-image" className={styles.vectorImage} style={styles} width={width} height={height} />
      <div className={styles.cardText}>
        <h4 className="h4" >{data.cardHeader}</h4>
        <p className={`${styles.cardInfo} body1`}>{data.cardInfo}</p>
      </div>
    </div>
  );
};

const Home: FC = () => {
  return (
    <>
      <main className={styles.main}>


      </main>

      <section className={styles.section1}>



      </section>

      <section className={styles.section2} >

      


      </section>

      <section className={styles.section3}>
       
      </section>

      <section className={styles.section4}>

       

      </section>

      <section className={styles.section5}>

        

      </section>

    </>
  );
}

export default Home;