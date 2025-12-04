import { pt } from './pt';
import { en } from './en';
import { es } from './es';
import { Language } from '@/contexts/LanguageContext';

export const translations = {
  pt,
  en,
  es,
};

export type TranslationKey = keyof typeof pt;

export function getTranslation(language: Language) {
  return translations[language];
}

