import React from 'react'
import Image from 'next/image'

import HolyFest from '../../assets/images/HolyFest.jpg'

import style from './ParallaxImage.module.scss'

export const ParallaxImage = () => {
  return (
    <section className={style.parallax}>
      <Image
        src={HolyFest}
        alt="HolyFest"
        fill
        className={style.parallaxImage}
      />
    </section>
  )
}
