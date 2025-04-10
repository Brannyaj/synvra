'use client';

import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import PageWrapper from '@/components/PageWrapper';

function PressPage() {
  return (
    <PageWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <PressContent />
      </Suspense>
    </PageWrapper>
  );
}

function PressContent() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-24 bg-gray-900 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Press & Media</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Stay updated with our latest news, press releases, and media coverage.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Press Releases</h2>
            <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
              {/* Press Release Items */}
              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2025-04-10" className="text-gray-500">Apr 10, 2025</time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    Company News
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0"></span>
                    Synvra Launches Revolutionary AI-Powered Healthcare Solutions
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Synvra announces the launch of its groundbreaking AI-powered healthcare solutions, 
                    designed to transform patient care and medical diagnostics through advanced technology.
                  </p>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2025-03-15" className="text-gray-500">Mar 15, 2025</time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    Partnership
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0"></span>
                    Synvra Partners with Leading Healthcare Providers
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Synvra announces strategic partnerships with leading healthcare providers to implement 
                    its AI solutions across major medical facilities nationwide.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Media Contact</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              For press inquiries, please contact our media relations team:
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg className="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </dt>
                <dd><a className="hover:text-gray-900" href="mailto:press@synvra.com">press@synvra.com</a></dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <svg className="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </dt>
                <dd><a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PressPage;
