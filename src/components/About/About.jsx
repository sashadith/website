'use client'
import React from 'react'

import style from './About.module.scss'

import HolyFest from '../../assets/images/HolyFest.jpg';
import Image from 'next/image';

export const About = () => {
  return (
    <section className={style.about}>
      <Image
        src={HolyFest} alt="HolyFest"
        className={style.parallaxImage}
      />
      <div className={style.aboutBlock}></div>
    </section>
  )
}
