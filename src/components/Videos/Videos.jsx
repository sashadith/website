'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import style from './Videos.module.scss'
import { CarouselSlider } from '../CarouselSlider/CarouselSlider'

import Headphones from '../../assets/images/headphones.png';

export const Videos = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='videos' className={style.videos}>
      <div className={style.videosWrapper}>
        <h2 data-aos="fade-up" className={style.title}>Videos</h2>
        <div data-aos="fade-up" className="container">
          <CarouselSlider />
        </div>
      </div>
    </section>
  )
}
