'use client';
import React, { useEffect } from 'react'
import styles from './Contact.module.scss';
import { ContactForm } from '../ContactForm/ContactForm';
import Image from 'next/image';
import contactBg from '../../assets/images/contactbg.jpg'

export const Contact = () => {

  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])

  return (
    <section id='contact' className={styles.contact}>
      <Image src={contactBg} alt="Contact" className={styles.contactBg} />
      <div data-scroll data-scroll-speed="0.3" className={styles.contactWrapper}>
        <h2 className={styles.title}>Booking and Business Contact</h2>
        <ContactForm />
      </div>
    </section>
  )
}
