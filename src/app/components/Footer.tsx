'use client'
import Link from 'next/link'
import styles from '../assets/styles/footer.module.scss'
import { useState } from 'react'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiInstagram, 
  FiLinkedin, 
  FiGithub,
  FiTwitter,
  FiHeart,
  FiArrowUp,
  FiSend
} from 'react-icons/fi'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const menuItems = [
    { name: 'Introduction', href: '#introduction' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Vision Mission', href: '#vision-mission' },
    { name: 'Contact', href: '#contact' },
    { name: 'Thank You', href: '#thank-you' }
  ]

  const socialLinks = [
    { icon: FiInstagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/nadiah-sianturi', label: 'LinkedIn', color: '#0077B5' },
    { icon: FiGithub, href: '#', label: 'GitHub', color: '#333' },
    { icon: FiTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' }
  ]

  return (
    <footer className={styles.footer}>
      {/* Back to Top Button */}
      <button 
        className={styles.backToTop}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>

      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h2 className={styles.brandName}>Nadiah Sianturi</h2>
            <p className={styles.brandDesc}>
              Passionate about creating amazing digital experiences and bringing ideas to life through code and creativity.
            </p>
            
            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.href} 
                  className={styles.socialLink}
                  style={{ '--hover-color': social.color } as React.CSSProperties}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.quickLinks}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <div className={styles.linksList}>
              {menuItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className={styles.footerLink}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Get In Touch</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FiMail className={styles.contactIcon} />
                <span>nadiasianturi11@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <FiPhone className={styles.contactIcon} />
                <span>+628 131 620 1023</span>
              </div>
              <div className={styles.contactItem}>
                <FiMapPin className={styles.contactIcon} />
                <span>Bekasi, Jakarta</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterSection}>
            <h3 className={styles.sectionTitle}>Stay Connected</h3>
            <p className={styles.newsletterDesc}>
              Subscribe to get updates about my latest projects and insights.
            </p>
            
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailInput}
                  required
                />
                <button 
                  type="submit" 
                  className={styles.subscribeBtn}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? 'Subscribed!' : <FiSend />}
                </button>
              </div>
              {isSubscribed && (
                <p className={styles.successMessage}>
                  Thank you for subscribing! 🎉
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>
              © 2025 Nadiah Sianturi. Made with{' '}
              <FiHeart className={styles.heartIcon} /> in Indonesia
            </p>
          </div>
          <div className={styles.footerMeta}>
            <Link href="#" className={styles.metaLink}>Privacy Policy</Link>
            <span className={styles.separator}>•</span>
            <Link href="#" className={styles.metaLink}>Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
        <div className={styles.bgCircle3}></div>
      </div>
    </footer>
  )
}