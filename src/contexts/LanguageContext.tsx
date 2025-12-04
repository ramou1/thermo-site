'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLanguageEnabled: (lang: Language) => boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  // Detecção inicial de idioma baseada no navegador e localização
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Tenta detectar o idioma do navegador
      const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'pt-BR';
      const langCode = browserLang.split('-')[0].toLowerCase();
      
      // Tenta detectar localização via timezone (aproximação)
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isBrazilianTimezone = timezone.includes('America/Sao_Paulo') || 
                                  timezone.includes('America/Fortaleza') ||
                                  timezone.includes('America/Recife');
      
      // Define idioma padrão
      let detectedLang: Language = 'pt'; // Padrão: Português (Brasil)
      
      if (langCode === 'en' || timezone.includes('America/New_York') || timezone.includes('America/Los_Angeles')) {
        detectedLang = 'en';
      } else if (langCode === 'es' || timezone.includes('America/Mexico') || timezone.includes('Europe/Madrid')) {
        detectedLang = 'es';
      } else if (isBrazilianTimezone || langCode === 'pt') {
        detectedLang = 'pt';
      }
      
      // Verifica se há preferência salva no localStorage
      const savedLang = localStorage.getItem('preferred-language') as Language;
      if (savedLang && ['pt', 'en', 'es'].includes(savedLang)) {
        setLanguageState(savedLang);
      } else {
        setLanguageState(detectedLang);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
    }
  };

  // Define quais idiomas estão habilitados
  const isLanguageEnabled = (lang: Language): boolean => {
    // Todos os idiomas estão habilitados
    return true;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLanguageEnabled }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

