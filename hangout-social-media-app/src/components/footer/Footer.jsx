import React from 'react';
import styles from './Footer.module.scss';


function Footer() {

  return (
    <section className={styles.footer}>
      <section className={styles.footerSocialMedia}>
        <a href="https://www.linkedin.com/" target="_blank">Hangover Social Inc</a>
      </section>

      <section className={styles.footerInfo}>
          <ul className={styles.footerInfoDetails}>
            <li>Privacy</li>
            <li>Usage Policy</li>
            <li>info@hangover.com</li>
            <li>Terms and Conditions</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </section>
        <section className={styles.footerCopyright}>
          <section>
            Hangover Inc @all rights reserved 2024
          </section>
        </section>
      </section>
  )
}

export default Footer;