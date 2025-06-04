'use client'
import Link from 'next/link'
import styles from '../assets/styles/navbar.module.scss'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  const closeMenu = () => {
    setMenuOpen(false)
  }

  const menuItems = [
    { name: 'Introduction', href: '#introduction' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Vision Mission', href: '#vision-mission' },
    { name: 'Contact', href: '#contact' },
    { name: 'Thank You', href: '#thank-you' }
  ]

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo/Brand */}
          <Link href="/" className={styles.brand}>
            <span className={styles.brandText}>Nadiah Sianturi</span>
          </Link>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                className={styles.navLink}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
          <div className={styles.mobileMenuContent}>
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div 
          className={styles.overlay} 
          onClick={closeMenu}
        />
      )}
    </>
  )
}