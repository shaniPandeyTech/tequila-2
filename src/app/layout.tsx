import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

import LenisProvider from '@/component/SmoothScrollProvider'
import Header from '@/component/Header'
import Footer from '@/component/Footer'

export const metadata: Metadata = {
  title: 'Tequila',
  description: 'An Award Winning Branding and Web Design Agency in Dubai.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <LenisProvider>
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
