'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import style from './Hero.module.scss';

import HeroImage from '../../assets/images/hero.jpg';
import LogoImage from '../../assets/images/SashaDithLogo.png';
import AboutImage from '../../assets/images/aboutImage1.jpg';

export const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className={style.hero}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
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
      <div className={style.parallax}></div>
      <section className={style.about}>
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
              <h2 className={style.aboutTitle}>About</h2>
              <p data-aos="fade-up" className={style.aboutText}>
                Sasha Dith — DJ and producer born in the USSR, grew up in Germany, entered the music business in 2005 with his debut single "RUSSIAN GIRLS," which reached the top of the charts in many countries. The "RUSSIAN GIRLS" video, showcasing the power and beauty of Russian women, got more than 40,000,000 views within a few weeks on YouTube, Metacafe & Co., and rose to become one of the most viewed music videos on the internet ever! TV shows and club gigs have taken Sasha around the world. He continues to produce music and bring joy to his fans with his DJ sets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
