'use client'

import { useEffect } from 'react'
import { useTranslation } from './i18n'
import { languages } from './i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { i18n } = await useTranslation()

  return (
    <html lang={i18n.language}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Synvra</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
