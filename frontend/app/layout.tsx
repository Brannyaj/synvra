'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { dir } from 'i18next'
import { languages } from './i18n/settings'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
