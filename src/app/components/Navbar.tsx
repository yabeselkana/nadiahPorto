'use client'
import Link from 'next/link'
import styles from '../assets/styles/navbar.module.scss'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi' 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Nadiah Sianturi</div>

      <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
        <Link href="/">Home</Link>
        <Link href="#photo">Photo</Link>
        <Link href="#about">About Me</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </header>
  )
}
