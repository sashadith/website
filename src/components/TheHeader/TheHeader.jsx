'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Logo from '../../assets/images/logo.png'
// import ButtonSecondary from '../ButtonSecondary/ButtonSecondary'
// import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
// import { ContactModal } from '../ContactModal'

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      // Get all the sections and their corresponding links
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll(`.${styles.navListItem}`);

      // Find the section that is currently in the viewport
      let activeSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          activeSection = section.getAttribute('id');
        }
      });

      // Update the active navigation item
      setActiveNavItem(activeSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top -70',
      end: 99999,
      toggleClass: {
        className: styles.headerScrolled,
        targets: `.${styles.header}`
      }
    });
  }, []);

  return (
    <header className={`${styles.header} ${hasScrolled ? styles.headerScrolled : ''}`}>
      <div className="container">
        <div className={styles.headerWpapper}>
          <div className={styles.headerIcons}>
            <div className={styles.headerIcon}>
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 511 511.9" width="20px"><g><path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" data-original="#000000" data-old_color="#000000" fill="#a3a3a3" /><path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" data-original="#000000" data-old_color="#000000" fill="#a3a3a3" /><path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" data-original="#000000" data-old_color="#000000" fill="#a3a3a3" /></g> </svg>
              </Link>
            </div>
            <div className={styles.headerIcon}>
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="-21 -117 682.66672 682" width="30px"><g><path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0" data-original="#000000" data-old_color="#000000" fill="#a3a3a3" /></g> </svg>
              </Link>
            </div>
            <div className={styles.headerIcon}>
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="18px" viewBox="0 0 96.124 96.123"><g><g>
                  <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" data-original="#000000" data-old_color="#000000" fill="#a3a3a3" />
                </g></g> </svg>
              </Link>
            </div>
            <div className={styles.headerIcon}>
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" id="Bold" enableBackground="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px"><g><path d="m12 24c6.624 0 12-5.376 12-12s-5.376-12-12-12-12 5.376-12 12 5.376 12 12 12zm4.872-6.344v.001c-.807 0-3.356-2.828-10.52-1.36-.189.049-.436.126-.576.126-.915 0-1.09-1.369-.106-1.578 3.963-.875 8.013-.798 11.467 1.268.824.526.474 1.543-.265 1.543zm1.303-3.173c-.113-.03-.08.069-.597-.203-3.025-1.79-7.533-2.512-11.545-1.423-.232.063-.358.126-.576.126-1.071 0-1.355-1.611-.188-1.94 4.716-1.325 9.775-.552 13.297 1.543.392.232.547.533.547.953-.005.522-.411.944-.938.944zm-13.627-7.485c4.523-1.324 11.368-.906 15.624 1.578 1.091.629.662 2.22-.498 2.22l-.001-.001c-.252 0-.407-.063-.625-.189-3.443-2.056-9.604-2.549-13.59-1.436-.175.048-.393.125-.625.125-.639 0-1.127-.499-1.127-1.142 0-.657.407-1.029.842-1.155z" data-original="#000000" data-old_color="#000000" fill="#a3a3a3" /></g> </svg>
              </Link>
            </div>
            <div className={styles.headerIcon}>
              <Link href="#">
                <svg version="1.1" id="Ebene_1" x="0px" y="0px" height="20px" width="20px" viewBox="0 0 32 32" xmlSpace="preserve">
                  <path fill="#a3a3a3" d="M16.7,0c1.7,0,3.5,0,5.2,0c0.1,2,0.8,4.1,2.3,5.6c1.5,1.5,3.6,2.2,5.7,2.4v5.4c-1.9-0.1-3.9-0.5-5.6-1.3
	c-0.8-0.3-1.5-0.8-2.2-1.2c0,3.9,0,7.8,0,11.7c-0.1,1.9-0.7,3.7-1.8,5.3c-1.7,2.6-4.8,4.2-7.9,4.3c-1.9,0.1-3.8-0.4-5.4-1.4
	C4.3,29,2.4,26.1,2.1,23c0-0.7,0-1.3,0-2c0.2-2.5,1.5-5,3.4-6.6c2.2-1.9,5.3-2.8,8.2-2.3c0,2-0.1,3.9-0.1,5.9
	c-1.3-0.4-2.9-0.3-4,0.5c-0.8,0.5-1.5,1.4-1.8,2.3c-0.3,0.7-0.2,1.4-0.2,2.1c0.3,2.2,2.4,4,4.7,3.8c1.5,0,2.9-0.9,3.7-2.1
	c0.3-0.4,0.5-0.9,0.5-1.4c0.1-2.4,0.1-4.8,0.1-7.1C16.7,10.7,16.7,5.4,16.7,0L16.7,0z"/>
                </svg>
              </Link>
            </div>
          </div>
          {/* <div className={styles.headerLogo}>
            <Link
              href="/"
              onClick={closeMenu}
            >
              <Image
                src={Logo}
                alt="Logo"
                className={styles.headerLogoImage}
              />
            </Link>
          </div> */}
          <div className={`${styles.headerMenu} ${isNavVisible ? styles.navVisible : ''}`} onClick={closeMenu}>
            <nav className={styles.nav}>
              <div className={styles.navList}>
                {/* Add the active class based on activeNavItem */}
                <Link href="#home" className={`${styles.navListItem} ${activeNavItem === 'home' ? 'active' : ''}`}>Home</Link>
                <Link href="#about" className={`${styles.navListItem} ${activeNavItem === 'music' ? 'active' : ''}`}>Music</Link>
                <Link href="#development" className={`${styles.navListItem} ${activeNavItem === 'videos' ? 'active' : ''}`}>Videos</Link>
                <Link href="#portfolio" className={`${styles.navListItem} ${activeNavItem === 'info' ? 'active' : ''}`}>Info</Link>
                <Link href="#about" className={`${styles.navListItem} ${activeNavItem === 'bio' ? 'active' : ''}`}>Bio</Link>
                <Link href="#development" className={`${styles.navListItem} ${activeNavItem === 'contact' ? 'active' : ''}`}>Contact</Link>
                <Link href="#portfolio" className={`${styles.navListItem} ${activeNavItem === 'imprint' ? 'active' : ''}`}>Imprint</Link>
              </div>
            </nav>
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