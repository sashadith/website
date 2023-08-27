'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap'

import style from './Hero.module.scss';

import HeroImage from '../../assets/images/hero.jpg';
import LogoImage from '../../assets/images/SashaDithLogo.png';
import AboutImage from '../../assets/images/aboutImage.jpg';

const phrase = "Sasha Dith — DJ and producer born in the USSR, grew up in Germany, entered the music business in 2005 with his debut single \"RUSSIAN GIRLS,\" which reached the top of the charts in many countries. The \"RUSSIAN GIRLS\" video, showcasing the power and beauty of Russian women, got more than 40,000,000 views within a few weeks on YouTube, Metacafe & Co., and rose to become one of the most viewed music videos on the internet ever! TV shows and club gigs have taken Sasha around the world. He continues to produce music and bring joy to his fans with his DJ sets.";

export const Hero = () => {

  let refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top top+=350`,
        end: `+=${window.innerHeight / 2.3}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
    })
  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach((letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => { refs.current.push(el) }}>{letter}</span>)
    })
    return letters;
  }

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
      <section ref={container} className={style.about}>
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
              <div className={style.aboutText}>
                {
                  splitWords(phrase)
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
