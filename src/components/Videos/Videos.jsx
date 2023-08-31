'use client'
import React from 'react';

import style from './Videos.module.scss'

import { Carousel } from '../Carousel/Carousel'

export const Videos = () => {

  return (
    <div className={style.videos}>
      <div className={style.videosWrapper}>
        <h2 className={style.title}>Videos</h2>
        <div className="container">
          <Carousel />
        </div>
      </div>
    </div>
  )
}
