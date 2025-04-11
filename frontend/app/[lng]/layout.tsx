import { languages } from '../i18n/settings'
import LanguageSwitcher from '../components/LanguageSwitcher'

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
        <div className="min-h-screen flex flex-col">
          {children}
          <footer className="mt-auto py-4 bg-gray-100">
            <div className="container mx-auto px-4">
              <LanguageSwitcher currentLang={lng} />
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
