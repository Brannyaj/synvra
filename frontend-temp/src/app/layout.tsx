import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Synvra - Digital Excellence',
  description: 'Transforming ideas into digital excellence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ transform: 'none' }}>
      <body style={{ transform: 'none' }}>
        <div className="min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  )
}
