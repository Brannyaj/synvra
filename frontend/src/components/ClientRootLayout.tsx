'use client';

import { dir } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import i18next from '../../app/i18n/client';

interface ClientRootLayoutProps {
  children: React.ReactNode;
  lng: string;
}

export default function ClientRootLayout({ children, lng }: ClientRootLayoutProps) {
  return (
    <I18nextProvider i18n={i18next}>
      <html lang={lng} dir={dir(lng)}>
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
    </I18nextProvider>
  );
}
