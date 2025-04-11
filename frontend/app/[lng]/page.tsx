import { languages } from '../i18n/settings'
import { useTranslation } from '../i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function Page({
  params: { lng }
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng, 'common')

  return (
    <main>
      <Header lng={lng} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                {t('hero.title')}
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                {t('hero.subtitle')}
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  {t('hero.cta')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {t('services.title')}
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                {t('services.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {t('about.title')}
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {t('contact.title')}
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
