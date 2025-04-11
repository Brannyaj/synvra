type Translations = {
  [key: string]: {
    welcome: string;
    description: string;
  };
};

const translations: Translations = {
  en: {
    welcome: 'Welcome to Synvra',
    description: 'Building innovative digital solutions for tomorrow',
  },
  es: {
    welcome: 'Bienvenido a Synvra',
    description: 'Construyendo soluciones digitales innovadoras para el mañana',
  },
  fr: {
    welcome: 'Bienvenue à Synvra',
    description: 'Construire des solutions numériques innovantes pour demain',
  },
  de: {
    welcome: 'Willkommen bei Synvra',
    description: 'Innovative digitale Lösungen für morgen entwickeln',
  },
  ja: {
    welcome: 'Synvraへようこそ',
    description: '明日のための革新的なデジタルソリューションを構築する',
  },
  zh: {
    welcome: '欢迎来到Synvra',
    description: '为未来构建创新的数字解决方案',
  },
};

export function getTranslations(locale: string) {
  return (key: keyof Translations[string]) => {
    return translations[locale]?.[key] || translations.en[key];
  };
}
