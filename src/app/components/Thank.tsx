import React from 'react';
import styles from '../assets/styles/thankYou.module.scss';

const ThankYou = () => {
  return (
    <div id='thank-you' className={styles.thankYouContainer}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Thank You</h1>
          <div className={styles.underline}></div>
          
          <p className={styles.description}>
            I am deeply grateful for every opportunity I've had to work and contribute meaningfully to others. For me, work is not just about completing tasks or building a career — it's about creating impact, no matter how small, in the lives of those I support. Whether it's helping a leader stay organized, making a client's day easier, or being a reliable part of a team, I believe every action matters. Life is not only about personal success, but also about how we lift and serve others along the way. That belief continues to guide how I work, connect, and grow professionally and personally.
          </p>
        </div>
        
        <div className={styles.imageSection}>
          <div className={styles.artisticBackground}>
            <div className={styles.lightBeams}></div>
            <div className={styles.floatingElements}>
              <div className={styles.element}></div>
              <div className={styles.element}></div>
              <div className={styles.element}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomDecoration}>
        <div className={styles.wave}></div>
      </div>
    </div>
  );
};

export default ThankYou;