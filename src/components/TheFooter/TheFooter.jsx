'use client';
import React, { useState } from 'react'
import styles from './TheFooter.module.scss';
import { FooterButtonModal } from '../FooterButtonModal';
import { FooterModal } from '../FooterModal';
import { ImpressumContent } from './ImpressumContent'
import DatenschutzContent from './DatenschutzContent'

const TheFooter = () => {

  const getFullYear = () => {
    const date = new Date();
    return date.getFullYear();
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [currentYear, setCurrentYear] = useState(getFullYear());

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerCopyright}>
            <p>© {currentYear} Sasha Dith. All rights reserved.</p>
          </div>
          <div className={styles.footerButtons}>
            <FooterButtonModal title="Impressum" onClick={() => openModal(<ImpressumContent />)} />
            <FooterButtonModal title="DATENSCHUTZ" onClick={() => openModal(<DatenschutzContent />)} />
          </div>
          <FooterModal isOpen={isModalOpen} content={modalContent} closeModal={closeModal} />
          {isModalOpen && (
            <button className={styles.closeButton} onClick={closeModal}>✕</button>
          )}
        </div>
      </div>
    </footer>
  )
}

export default TheFooter