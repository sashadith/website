import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Music.module.scss';

import Music1 from '../../assets/images/music1.jpg';
import Music2 from '../../assets/images/music2.jpg';
import Music3 from '../../assets/images/music3.jpg';
import Music4 from '../../assets/images/music4.jpg';
import Music5 from '../../assets/images/music5.jpg';
import Music6 from '../../assets/images/music6.jpg';
import Music7 from '../../assets/images/music7.jpg';
import Music8 from '../../assets/images/music8.jpg';
import Music9 from '../../assets/images/music9.jpg';
import Music10 from '../../assets/images/music10.jpg';
import Music11 from '../../assets/images/music11.jpg';
import Music12 from '../../assets/images/music12.jpg';
import Music13 from '../../assets/images/music13.jpg';
import Music14 from '../../assets/images/music14.jpg';
import Music15 from '../../assets/images/music15.jpg';
import Music16 from '../../assets/images/music16.jpg';
import Music17 from '../../assets/images/music17.jpg';

const musicImages = [
  { id: 1, image: Music1, alt: "Sasha Dith track Ayimo", link: "https://band.link/ayimo" },
  { id: 2, image: Music2, alt: "Sasha Dith track Russian Girls 2k22", link: "https://band.link/rusgirls2k22" },
  { id: 3, image: Music3, alt: "Sasha Dith track Toboy prostuzhen", link: "https://band.link/prostuzhen" },
  { id: 4, image: Music4, alt: "Sasha Dith track Ona ne odna", link: "https://band.link/onaneodna" },
  { id: 5, image: Music5, alt: "Sasha Dith track Because of you", link: "https://band.link/dithbecou" },
  { id: 6, image: Music6, alt: "Sasha Dith track Take it higher", link: "https://band.link/dithhigher" },
  { id: 7, image: Music7, alt: "Sasha Dith track Ya tebya lublu", link: "https://band.link/dithilove" },
  { id: 8, image: Music8, alt: "Sasha Dith track Vlublennyj angel", link: "https://band.link/dithangel" },
  { id: 9, image: Music9, alt: "Sasha Dith track Voyage", link: "https://band.link/dithvoyage" },
  { id: 10, image: Music10, alt: "Sasha Dith track I love dance", link: "https://band.link/dithdance" },
  { id: 11, image: Music11, alt: "Sasha Dith track Ya odna", link: "https://band.link/dithodna" },
  { id: 12, image: Music12, alt: "Sasha Dith track Russian Girls", link: "https://band.link/rusgirls" },
  { id: 13, image: Music13, alt: "Sasha Dith track What is luv", link: "https://band.link/whatisluv" },
  { id: 14, image: Music14, alt: "Sasha Dith track Ya budu s toboy", link: "https://band.link/dithyabudu" },
  { id: 15, image: Music15, alt: "Sasha Dith track Radio Loves You", link: "https://band.link/dithradio" },
  { id: 16, image: Music16, alt: "Sasha Dith track Second beat is mine", link: "https://band.link/dithsec" },
  { id: 17, image: Music17, alt: "Sasha Dith track Crazy sun", link: "https://band.link/W0ENj" }
];

export const Music = () => {

  return (
    <section id='music' className={styles.music}>
      <h2 data-aos="fade-up" className={styles.title}>Music</h2>
      <div data-aos="fade-up" className={styles.gridContainer}>
        {musicImages.map((image, index) => (
          <div
            key={index}
            className={styles.gridItem}
          >
            <Link
              className={styles.gridLink}
              href={image.link}
              target="_blank"
            >
              <Image src={image.image} alt={image.alt} />
              <div className={styles.overlay}></div>
              <div className={styles.listen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 18 19" fill="none">
                  <path d="M6 15.5V4L17 1V14.5M6 15.5C6 16.8807 4.88071 18 3.5 18C2.11929 18 1 16.8807 1 15.5C1 14.1193 2.11929 13 3.5 13C4.88071 13 6 14.1193 6 15.5ZM17 14.5C17 15.8807 15.8807 17 14.5 17C13.1193 17 12 15.8807 12 14.5C12 13.1193 13.1193 12 14.5 12C15.8807 12 17 13.1193 17 14.5Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>Click to listen</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
