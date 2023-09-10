import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './Languages/en.json';
import hiTranslation from './Languages/hi.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  hi: {
    translation: hiTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Fallback language in case the selected language file is missing
  interpolation: {
    escapeValue: false, // React already escapes strings, so no need to escape HTML entities
  },
});

export default i18n;
