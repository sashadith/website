import React from 'react'
import Link from 'next/link'

import styles from './SubscribeButton.module.scss'

import SubscribeButtonImage from '../../assets/images/Youtube_logo.png'
import Image from 'next/image'

export const SubscribeButton = () => {
  return (
    <Link href="https://www.youtube.com/@sashadith?sub_confirmation=1">
      <div className={styles.subscribeButton}>
        <div className={styles.subscribeButtonImage}>
          <Image
            width={30}
            src={SubscribeButtonImage}
            alt="SubscribeButtonImage" />
        </div>
        <div className={styles.subscribeButtonText}>
          <p className={styles.btnTitle}>Subscribe</p>
          <p className={styles.btnDescription}>TO SASHA's YOUTUBE CHANNEL</p>
        </div>
      </div>
    </Link>
  )
}
