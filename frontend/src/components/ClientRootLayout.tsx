'use client';

import { dir } from 'i18next';
import { useEffect } from 'react';
import i18next from '../../app/i18n/client';
import { useTranslation } from 'react-i18next';

interface ClientRootLayoutProps {
  children: React.ReactNode;
  lng: string;
}

export default function ClientRootLayout({ children, lng }: ClientRootLayoutProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  return (
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
  );
}
