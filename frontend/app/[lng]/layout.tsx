import { languages } from '../i18n/settings'

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Synvra - Digital Solutions" />
        <title>Synvra</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
