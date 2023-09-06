'use client'
import React from 'react';

import style from './Videos.module.scss'
import { CarouselSlider } from '../CarouselSlider/CarouselSlider'
// import { SubscribeButton } from '../SubscribeButton/SubscribeButton'

export const Videos = () => {

  return (
    <div className={style.videos}>
      <div className={style.videosWrapper}>
        <h2 className={style.title}>Videos</h2>
        <div className="container">
          <CarouselSlider />
          {/* <SubscribeButton /> */}
        </div>
      </div>
    </div>
  )
}
