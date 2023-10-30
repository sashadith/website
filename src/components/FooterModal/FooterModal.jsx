'use client';
import React, { useEffect, useRef } from 'react';
import styles from './FooterModal.module.scss';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
  },
  content: {
    position: 'absolute',
    // top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#141319',
    borderRadius: '5px',
    width: '80%',
    height: '80%',
    margin: 'auto',
    padding: '20px 30px',
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    overflowY: 'auto',
  },
};

export const FooterModal = ({ isOpen, content, closeModal }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Footer Modal"
    >
      {/* <div ref={modalContentRef}> */}
      {content}
      {/* </div> */}
      {/* <button className={styles.closeButton} onClick={closeModal}>✕</button> */}
    </Modal>
  );
}
