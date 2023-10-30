import React from 'react'
import styles from './Contact.module.scss';
import { ContactForm } from '../ContactForm/ContactForm';

export const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
      <div className="container">
        <h2 className={styles.title}>Booking and Business Contact</h2>
        <div className={styles.contactWrapper}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
