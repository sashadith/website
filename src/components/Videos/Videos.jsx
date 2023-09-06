'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import style from './Videos.module.scss'
import { CarouselSlider } from '../CarouselSlider/CarouselSlider'
// import { SubscribeButton } from '../SubscribeButton/SubscribeButton'

export const Videos = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={style.videos}>
      <div className={style.videosWrapper}>
        <h2 data-aos="fade-up" className={style.title}>Videos</h2>
        <div data-aos="fade-up" className="container">
          <CarouselSlider />
          {/* <SubscribeButton /> */}
        </div>
      </div>
    </div>
  )
}
