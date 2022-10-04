import i18next, {
  LanguageDetectorAsyncModule,
  Services,
  InitOptions,
} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './en.json';
import ar from './ar.json';
import {MMKV} from 'react-native-mmkv';

export enum SupportedLanguage {
  English = 'en',
  Arabic = 'ar',
}

export const storage = new MMKV({
  id: 'mmkv-language-storage',
  encryptionKey: 'MMKV_LANGUAGE_ENCRYPTION_KEY',
});

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  // If this is set to true, your detect function receives a callback function that you should call with your language,
  //useful to retrieve your language stored in MMKV storage for example
  async: true,
  init: (
    _services: Services,
    _detectorOptions: object,
    _i18nextOptions: InitOptions,
  ) => {
    /* use services and options */
  },
  detect: (callback: (lng: string) => void) => {
    const doesLanguageExists = storage.contains('APP_LANG');
    if (doesLanguageExists) {
      const savedLanguage = storage.getString('APP_LANG');
      callback(String(savedLanguage));
      return;
    } else {
      /**
       * pick best language for user based on his device's language
       */
      const bestLng = RNLocalize.findBestAvailableLanguage([
        SupportedLanguage.English,
        SupportedLanguage.Arabic,
      ]);
      callback(bestLng?.languageTag ?? SupportedLanguage.English);
      return;
    }
  },
  cacheUserLanguage: (lng: string) => {
    storage.set('APP_LANG', lng);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next) // passes i18next down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
