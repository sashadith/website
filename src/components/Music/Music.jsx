'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import styles from './Music.module.scss';

import Headphones from '../../assets/images/headphones.png';
import Music1 from '../../assets/images/music1.jpg';
import Music2 from '../../assets/images/music2.jpg';
import Music3 from '../../assets/images/music3.jpg';
import Music4 from '../../assets/images/music4.jpg';
import Music5 from '../../assets/images/music5.jpg';

const musicImages = [
  { id: 1, image: Music1, link: "#", alt: "Music1" },
  { id: 2, image: Music2, link: "#", alt: "Music2" },
  { id: 3, image: Music3, link: "#", alt: "Music3" },
  { id: 4, image: Music4, link: "#", alt: "Music4" },
  { id: 5, image: Music5, link: "#", alt: "Music5" },
  { id: 6, image: Music2, link: "#", alt: "Music1" },
  { id: 7, image: Music1, link: "#", alt: "Music2" },
  { id: 8, image: Music4, link: "#", alt: "Music3" },
  { id: 9, image: Music5, link: "#", alt: "Music4" },
  { id: 10, image: Music3, link: "#", alt: "Music5" },
];

export const Music = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className={styles.music}>
      <h2 className={styles.title}>Music</h2>
      <div className={styles.gridContainer}>
        {musicImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.gridItem} ${hoveredIndex === index ? styles.blurred : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#">
              <Image src={image.image} alt={image.alt} />
            </Link>
            <div className={styles.listen}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M6 15.5V4L17 1V14.5M6 15.5C6 16.8807 4.88071 18 3.5 18C2.11929 18 1 16.8807 1 15.5C1 14.1193 2.11929 13 3.5 13C4.88071 13 6 14.1193 6 15.5ZM17 14.5C17 15.8807 15.8807 17 14.5 17C13.1193 17 12 15.8807 12 14.5C12 13.1193 13.1193 12 14.5 12C15.8807 12 17 13.1193 17 14.5Z" stroke="#001A72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
