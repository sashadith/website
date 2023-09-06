'use client';
import React, { useState, useRef } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import VideoPopup from '../VideoPopup/VideoPopup';
import { SubscribeButton } from '../SubscribeButton/SubscribeButton';

// Import Swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";

import styles from './CarouselSlider.module.scss';

import Image1 from '../../assets/images/slider1.jpg';
import Image2 from '../../assets/images/slider2.jpg';
import Image3 from '../../assets/images/slider3.jpg';
import Image4 from '../../assets/images/slider4.jpg';
import Image5 from '../../assets/images/slider5.jpg';
import Image6 from '../../assets/images/slider6.jpg';
import Image7 from '../../assets/images/slider7.jpg';
import Image8 from '../../assets/images/slider8.jpg';

const videoData = [
  { videoId: "0TQPPGl-W8c", coverImage: Image1 },
  { videoId: "RvhyRdgbC7s", coverImage: Image2 },
  { videoId: "cD1O7M5oKps", coverImage: Image3 },
  { videoId: "-WUdUHRnr7s", coverImage: Image4 },
  { videoId: "HqX6W-OCcHI", coverImage: Image5 },
  { videoId: "-Yxm8m03CcE", coverImage: Image6 },
  { videoId: "E-o6-1GRJ6g", coverImage: Image7 },
  { videoId: "YE8mfxv_FeA", coverImage: Image8 },
];

export const CarouselSlider = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupVideoId, setPopupVideoId] = useState("");

  const handleOpenPopup = (videoId) => {
    setPopupVideoId(videoId);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPopupVideoId("");
  };

  return (
    <div className={styles.carousel}>
      <Swiper
        loop={true}
        modules={[Navigation, EffectCoverflow]}
        navigation={{
          nextEl: '.nextCarouselBtn',
          prevEl: '.prevCarouselBtn',
        }}
        grabCursor={true}
        draggable={true}
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        slidesPerView={'auto'} // Set the default slidesPerView to 'auto'
        breakpoints={{
          576: {
            slidesPerView: 'auto', // Override slidesPerView for screens >= 576px
          },
          768: {
            slidesPerView: 2,
          },
          980: {
            slidesPerView: 3,
          },
        }}
      >
        {videoData.map((video, index) => (
          <SwiperSlide key={index}>
            <div className={styles.carouselItem}>
              <div className={styles.coverImage}>
                <Image src={video.coverImage} alt="Cover" />
                <button
                  className={styles.playButton}
                  onClick={() => handleOpenPopup(video.videoId)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="38" viewBox="0 0 12 14" fill="none">
                    <path d="M1 1V13L11 7L1 1Z" stroke="#ffff" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {isPopupOpen && (
          <VideoPopup videoId={popupVideoId} onClose={handleClosePopup} />
        )}
      </Swiper>
      <div className={styles.buttonsWrapper}>
        <div className="prevCarouselBtn">
          <div class={styles.arrowLeft}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.subscribeButton}>
          <SubscribeButton />
        </div>
        <div className="nextCarouselBtn">
          <div class={styles.arrowRight}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
