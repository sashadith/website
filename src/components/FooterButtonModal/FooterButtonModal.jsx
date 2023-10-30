import React from 'react'
import styles from './FooterButtonModal.module.scss';

export const FooterButtonModal = ({ title, onClick }) => {
  return (
    <button
      className={styles.footerButtonModal}
      onClick={onClick}
    >
      {title}
    </button>
  );
}