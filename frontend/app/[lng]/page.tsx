'use client'

import { useTranslation } from '../i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng)

  return (
    <main>
      <Header lng={lng} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8">{t('hero.subtitle')}</p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              {t('hero.cta')}
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">{t('services.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('services.webDev')}</h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('services.mobileDev')}</h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('services.cloud')}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">{t('about.title')}</h2>
            <p className="text-xl mb-12">{t('about.description')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">{t('about.innovation')}</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">{t('about.quality')}</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">{t('about.integrity')}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">{t('contact.title')}</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('contact.name')}</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('contact.email')}</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('contact.message')}</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  {t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
