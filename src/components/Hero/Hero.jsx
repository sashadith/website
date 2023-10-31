'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import style from './Hero.module.scss';

import HeroImage from '../../assets/images/hero.jpg';
import LogoImage from '../../assets/images/SashaDithLogo.png';
import AboutImage from '../../assets/images/aboutImage1.jpg';

export const Hero = () => {

  const [scrollY, setScrollY] = useState(0);
  const isMobile = window.innerWidth <= 480;

  const controls = useAnimation();

  useEffect(() => {

    const animationCycle = async () => {
      while (true) {
        await controls.start({ opacity: 0.7, transition: { duration: 0.5 } }); // Прозрачность во время мерцания
        await controls.start({ opacity: 1, transition: { duration: 0.5 } }); // Восстановление видимости
        await new Promise(resolve => setTimeout(resolve, 5000)); // Интервал мерцания в миллисекундах
      }
    };

    animationCycle();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    AOS.init();

    return () => {
      controls.stop();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section id='home' className={style.hero}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          className={style.heroLogo}
        >
          <Image
            src={LogoImage}
            alt="Sasha Dith Logo"
          />
        </motion.div>
        <div className="container">
          <div className={style.backgroundImage}>
            <Image
              src={HeroImage}
              alt="Sasha Dith"
              className={style.heroImage}
            />
          </div>
        </div>
      </section>
      <div
        style={isMobile ? { transform: `translateY(${scrollY * 0.5}px)` } : {}}
        className={isMobile ? style['parallax-mobile'] : style.parallax}></div>
      <section id='about' className={style.about}>
        <div className="container">
          <div className={style.aboutBlock}>
            <div className={style.aboutBlockImage}>
              <Image
                src={AboutImage}
                alt="Sasha Dith"
                className={style.aboutImage}
              />
            </div>
            <div className={style.aboutBlockContent}>
              <h2 data-aos="fade-up" className={style.aboutTitle}>About</h2>
              <p data-aos="fade-up" className={style.aboutText}>
                Sasha Dith — DJ and producer born in the USSR, grew up in Germany, entered the music business in 2005 with his debut single &quot;RUSSIAN GIRLS&quot;, which reached the top of the charts in many countries. The &quot;RUSSIAN GIRLS&quot; video, showcasing the power and beauty of Russian women, got more than 40,000,000 views within a few weeks on YouTube, Metacafe & Co., and rose to become one of the most viewed music videos on the internet ever! TV shows and club gigs have taken Sasha around the world. He continues to produce music and bring joy to his fans with his DJ sets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};