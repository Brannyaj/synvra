import { Inter } from 'next/font/google'
import './globals.css'
import { dir } from 'i18next'
import { languages } from './i18n/settings'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Synvra',
  description: 'Digital Solutions',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
