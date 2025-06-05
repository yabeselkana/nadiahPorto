import Image from 'next/image'
import styles from '../assets/styles/hero.module.scss'
import images from '../assets/image/nadiah.webp'

export default function HeroIntroduction() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.imageWrapper}>
              <Image
                src={images}
                alt="Foto Nadiah"
                className={styles.image}
                priority
              />
              <div className={styles.imageBorder}></div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <div className={styles.textWrapper}>
                <h1 className={styles.title}>
                  <span className={styles.titleSpan}>My</span>
                  <span className={styles.titleMain}>Portofolio</span>
                </h1>
                <div className={styles.decorativeLine}></div>
                <p className={styles.subtitle}>Management: Organizing for Success</p>
              </div>
              <div className={styles.buttons}>
                <button className={styles.explore}>
                  <span>Explore Now</span>
                  <div className={styles.buttonBg}></div>
                </button>
                <button className={styles.seeMore}>
                  <div className={styles.playIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span>See More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connecting Wave */}
        <div className={styles.waveTransition}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)"/>
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(15, 23, 42, 0.8)" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className={styles.backgroundElements}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>s
        </div>
      </section>

  
    </>
  )
}