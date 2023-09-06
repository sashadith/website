import React from 'react'

import styles from './CarouselItem.module.scss';

import Image1 from '../../assets/images/aboutImage.jpg';
import Image2 from '../../assets/images/slider1.jpg';
import Image3 from '../../assets/images/slider2.jpg';
import Image4 from '../../assets/images/slider3.jpg';
import Image5 from '../../assets/images/slider4.jpg';
import Image6 from '../../assets/images/slider5.jpg';

const videoData = [
  { videoId: "0TQPPGl-W8c", coverImage: Image1 },
  { videoId: "RvhyRdgbC7s", coverImage: Image2 },
  { videoId: "cD1O7M5oKps", coverImage: Image3 },
  { videoId: "-WUdUHRnr7s", coverImage: Image4 },
  { videoId: "HqX6W-OCcHI", coverImage: Image5 },
  { videoId: "-Yxm8m03CcE", coverImage: Image6 },
  { videoId: "E-o6-1GRJ6g", coverImage: Image3 },
  { videoId: "YE8mfxv_FeA", coverImage: Image4 },
];

export const CarouselItem = () => {
  return (
    <div className={styles.carouselItem}>

    </div>
  )
}
