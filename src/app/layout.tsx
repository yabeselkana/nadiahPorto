import { Inter } from 'next/font/google'
import './globals.scss'
import React from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Portfolio - Nadiah',
  description: 'Management: Organizing for Success',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
