import { languages } from '../i18n/settings'
import ClientRootLayout from '@/components/ClientRootLayout'

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
  return (
    <ClientRootLayout lng={lng}>
      {children}
    </ClientRootLayout>
  )
}
