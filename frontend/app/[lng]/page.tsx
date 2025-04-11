import { languages } from '../i18n/settings'

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function Page({
  params: { lng }
}: {
  params: { lng: string }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Synvra - {lng}</h1>
    </main>
  )
}
