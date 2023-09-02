'use client'
import React, { useEffect } from 'react';
import anime from 'animejs';
import styles from './VideosAnimate.module.scss';

export const VideosAnimate = () => {
  useEffect(() => {
    animateBlocks();
  }, []);

  const animateBlocks = () => {
    anime({
      targets: `.${styles.box}`,
      translateX: function () {
        return anime.random(-700, 700);
      },
      translateY: function () {
        return anime.random(-500, 500);
      },
      scale: function () {
        return anime.random(0.5, 5);
      },
      easing: 'linear',
      duration: 3000,
      delay: anime.stagger(10),
      complete: animateBlocks,
    });
  };

  return (
    <div className={styles.animateContainer}>
      <h1 className={styles.title}>
        Welcome to <span>Mahi Web</span>
      </h1>
      {Array.from({ length: 151 }, (_, i) => (
        <div key={i} className={styles.box}></div>
      ))}
    </div>
  );
};