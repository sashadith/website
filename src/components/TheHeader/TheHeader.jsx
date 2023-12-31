'use client'
import React, { useState, useEffect } from 'react'
import ScrollLink from './ScrollLink'
import Link from 'next/link'
import Image from 'next/image'
// import { gsap } from 'gsap'
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

import LogoImage from '../../assets/images/SashaDithLogo.png';
import socialInstagram from '../../assets/images/s-social-insta.png';
import socialYoutube from '../../assets/images/s-social-youtube.png';
import socialFacebook from '../../assets/images/s-social-fb.png';
import socialSpotify from '../../assets/images/s-social-spotify.png';
import socialTiktok from '../../assets/images/s-social-tiktok.png';

import styles from './TheHeader.module.scss'

const TheHeader = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

  // State for showing/hiding the modal
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  // Add a function to toggle the modal state
  const toggleContactModal = () => {
    setContactModalOpen(!isContactModalOpen);
  };

  const closeMenu = () => {
    setNavVisible(false);
  }

  useEffect(() => {
    if (isNavVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isNavVisible]);

  const scrollToSection = (sectionId) => {
    // Найдите элемент с указанным id
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Вычислите позицию элемента относительно верхней части страницы
      const offset = sectionElement.offsetTop;
      // Выполните плавный скролл
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`${styles.header} ${hasScrolled ? styles.headerScrolled : ''}`}>
      <div className="container">
        <div className={styles.headerWpapper}>
          <div className={styles.headerIcons}>
            <div className={styles.headerIcon}>
              <Link
                href="https://www.instagram.com/sashadith/"
                target='_blank'
              >
                <Image
                  width={20}
                  height={20}
                  src={socialInstagram}
                  alt="Instagram"
                  className={styles.headerIconImage}
                />
              </Link>
            </div>
            <div className={styles.headerIcon}>
              <Link
                href="https://www.youtube.com/sashadith"
                target='_blank'
              >
                <Image
                  height={20}
                  src={socialYoutube}
                  alt="Youtube"
                  className={styles.headerIconImage}
                />
              </Link>
            </div>
            <div className={styles.headerIcon}>
              <Link
                href="https://www.facebook.com/sashadith/"
                target='_blank'
              >
                <Image
                  width={20}
                  height={20}
                  src={socialFacebook}
                  alt="Facebook"
                  className={styles.headerIconImage}
                />
              </Link>
            </div>
            <div className={styles.headerIcon}>
              <Link
                href="https://open.spotify.com/intl-de/artist/1KrkHk0KNf0w195jVhpVVO?si=T0mZAJ5_TVaKK41k6JRWkQ"
                target='_blank'
              >
                <Image
                  width={20}
                  height={20}
                  src={socialSpotify}
                  alt="Spotify"
                  className={styles.headerIconImage}
                />
              </Link>
            </div>
            <div className={styles.headerIcon}>
              <Link
                href="https://www.tiktok.com/@sasha_dith"
                target='_blank'
              >
                <Image
                  width={20}
                  height={20}
                  src={socialTiktok}
                  alt="Tik Tok"
                  className={styles.headerIconImage}
                />
              </Link>
            </div>
          </div>
          <div className={`${styles.headerMenu} ${isNavVisible ? styles.navVisible : ''}`} onClick={closeMenu}>
            <nav className={styles.nav}>
              <div className={styles.navList}>
                {/* Add the active class based on activeNavItem */}
                {/* <ScrollLink href="#home" className={`${styles.navListItem} ${activeNavItem === 'home' ? 'active' : ''}`}>Home</ScrollLink>
                <ScrollLink href="#about" className={`${styles.navListItem} ${activeNavItem === 'about' ? 'active' : ''}`}>About</ScrollLink>
                <ScrollLink href="#videos" className={`${styles.navListItem} ${activeNavItem === 'videos' ? 'active' : ''}`}>Videos</ScrollLink>
                <ScrollLink href="#music" className={`${styles.navListItem} ${activeNavItem === 'music' ? 'active' : ''}`}>Music</ScrollLink>
                <ScrollLink href="#contact" className={`${styles.navListItem} ${activeNavItem === 'contact' ? 'active' : ''}`}>Contact</ScrollLink> */}
                <a onClick={() => scrollToSection('home')} className={`${styles.navListItem} ${activeNavItem === 'home' ? 'active' : ''}`}>Home</a>
                <a onClick={() => scrollToSection('about')} className={`${styles.navListItem} ${activeNavItem === 'about' ? 'active' : ''}`}>About</a>
                <a onClick={() => scrollToSection('videos')} className={`${styles.navListItem} ${activeNavItem === 'videos' ? 'active' : ''}`}>Videos</a>
                <a onClick={() => scrollToSection('music')} className={`${styles.navListItem} ${activeNavItem === 'music' ? 'active' : ''}`}>Music</a>
                <a onClick={() => scrollToSection('contact')} className={`${styles.navListItem} ${activeNavItem === 'contact' ? 'active' : ''}`}>Contact</a>
              </div>
            </nav>
            <Image className={styles.logoMobile} src={LogoImage} />
          </div>
          <div
            className={`${styles.burgerMenu} ${isNavVisible ? styles.open : ''}`}
            onClick={() => {
              setNavVisible(!isNavVisible);
            }}
          >
            {isNavVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 16 16" fill="none">
                <path d="M15 1L1 15M1.00001 1L15 15" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 18 12" fill="none">
                <path d="M1 11H17M1 6H17M1 1H17" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        </div>
      </div>
      {/* <ContactModal isOpen={isContactModalOpen} onClose={toggleContactModal} /> */}
    </header>
  )
}

export default TheHeader