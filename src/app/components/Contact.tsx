// pages/contact.js or components/Contact.js
import styles from '../assets/styles/contact.module.scss';

const Contact = () => {
  return (
    <div id='contact' className={styles.contactContainer}>
      <div className={styles.backgroundPattern}></div>
      
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>My Contact</h1>
          <div className={styles.underline}></div>
          
          <p className={styles.description}>
            Dedicated to delivering my best and consistently seeking ways to add greater value to the team and to the Manager.
          </p>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.icon}>📞</div>
              <span>+628 131 620 1023</span>
            </div>
            
            <div className={styles.contactItem} style={{ color: 'white' }}>
              <div className={styles.icon}>🌐</div>
              <a href="https://www.linkedin.com/in/nadiah-sianturi/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                https://www.linkedin.com/in/nadiah-sianturi/
              </a>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.icon}>📧</div>
              <span>nadiasianturi11@gmail.com</span>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.icon}>📍</div>
              <span>Bekasi, Jakarta</span>
            </div>
          </div>
        </div>
        
        <div className={styles.rightSection}>
          <div className={styles.visualElements}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>👥</div>
              <span>Professional Network</span>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIcon}>⭐</div>
              <span>Quality Service</span>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIcon}>📈</div>
              <span>Growth Mindset</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;