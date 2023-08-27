import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import HolyFest from '../../assets/images/HolyFest.jpg';

import style from './ParallaxImage.module.scss';

export const ParallaxImage = () => {
  const [isActive, setIsActive] = useState(false);
  const parallaxRef = useRef(null);

  const handleScroll = () => {
    if (
      parallaxRef.current &&
      window.scrollY + window.innerHeight >= parallaxRef.current.offsetTop
    ) {
      setIsActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxAmount = 0.5; // Adjust this value to control the parallax effect

  return (
    <section className={style.parallax}>
      <div
        ref={parallaxRef}
        className={`${style.parallaxImage} ${isActive ? style.active : ''}`}
        style={{ transform: `translateY(${isActive ? -window.scrollY * parallaxAmount : 0}px)` }}
      >
        <Image src={HolyFest} alt="HolyFest" fill />
      </div>
    </section>
  );
};
