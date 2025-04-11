'use client'

import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { useTranslation } from '../i18n'
import { useEffect } from 'react'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode
  params: {
    lng: string
  }
}) {
  const { i18n } = await useTranslation(lng)

  useEffect(() => {
    document.documentElement.lang = lng
    document.documentElement.dir = dir(lng)
  }, [lng])

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Synvra</title>
      </head>
      <body>
        <div lang={lng}>
          {children}
        </div>
      </body>
    </html>
  )
}
