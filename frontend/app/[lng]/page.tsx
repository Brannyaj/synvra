import { languages } from '../i18n/settings'
import { getTranslations } from '../i18n/translations'

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function Page({
  params: { lng }
}: {
  params: { lng: string }
}) {
  const t = getTranslations(lng)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold">{t('welcome')}</h1>
        <p className="mt-6 text-lg">{t('description')}</p>
      </div>
    </main>
  )
}
