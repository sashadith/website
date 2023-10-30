import React from 'react'
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './VideoPopup.module.scss';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
  },
  content: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#141319',
    // padding: '20px',
    borderRadius: '5px',
    width: '80%',
    height: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

const VideoPopup = ({ videoId, onClose }) => {
  return (
    <AnimatePresence>
      {videoId && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Modal
            closeTimeoutMS={50}
            isOpen={!!videoId}
            onRequestClose={onClose}
            style={customStyles}
            ariaHideApp={false}
          >
            <div
              className={styles.popupContent}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <button className={styles.closeButton} onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15 1L1 15M1.00001 1L15 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </Modal>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default VideoPopup;