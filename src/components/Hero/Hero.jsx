'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import style from './Hero.module.scss'

import LogoImage from '../../assets/images/logo.png'

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={style.heroLogo}
        >
          <Image
            src={LogoImage}
            alt="Sasha Dith Logo"
          />
        </motion.div>
      </div>
    </section>
  )
}
