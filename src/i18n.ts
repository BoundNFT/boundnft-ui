import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
//import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANGUAGE } from './constants'
import commonEn from './locales/en/common'

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources: {
      en: {
        common: commonEn
      },
      cn: {}
    },
    react: {
      useSuspense: true
    },

    ns: ['common'],
    defaultNS: 'common',
    nonExplicitSupportedLngs: true,
    supportedLngs: ['en', 'cn'],
    fallbackLng: DEFAULT_LANGUAGE,
    preload: ['en', 'cn'],
    keySeparator: false,
    interpolation: { escapeValue: false },
    debug: false
  })

export default i18n
