'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

import style from './Hero.module.scss';

import HeroImage from '../../assets/images/hero.jpg';
import LogoImage from '../../assets/images/SashaDithLogo.png';

export const Hero = () => {

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
    </>
  );
};
