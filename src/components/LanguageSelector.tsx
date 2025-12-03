'use client';

import { useLanguage, Language } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Globe } from 'lucide-react';

const languages: { code: Language; name: string; codeLabel: string }[] = [
  { code: 'pt', name: 'Português', codeLabel: 'BR' },
  { code: 'en', name: 'English', codeLabel: 'US' },
  { code: 'es', name: 'Español', codeLabel: 'ES' },
];

export default function LanguageSelector({ isMobile = false }: { isMobile?: boolean }) {
  const { language, setLanguage, isLanguageEnabled } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageClick = (lang: Language) => {
    if (isLanguageEnabled(lang)) {
      setLanguage(lang);
      setIsOpen(false);
    }
  };

  if (isMobile) {
    return (
      <div className="border-t border-gray-200 pt-3 mt-3">
        <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">Idioma</div>
        <div className="space-y-1">
          {languages.map((lang) => {
            const isEnabled = isLanguageEnabled(lang.code);
            const isActive = language === lang.code;
            
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageClick(lang.code)}
                disabled={!isEnabled}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-3 ${
                  isActive
                    ? 'bg-primary-red text-white'
                    : isEnabled
                    ? 'text-primary-blue hover:bg-gray-100'
                    : 'text-gray-400 cursor-not-allowed opacity-50'
                }`}
              >
                <span className="font-semibold text-sm w-8 text-center">{lang.codeLabel}</span>
                <span className="font-medium">{lang.name}</span>
                {isActive && (
                  <span className="ml-auto text-sm">✓</span>
                )}
                {!isEnabled && (
                  <span className="ml-auto text-xs">Em breve</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
          isOpen
            ? 'bg-primary-red text-white'
            : 'bg-white bg-opacity-10 hover:bg-opacity-20 text-white'
        }`}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-semibold">
          {languages.find(l => l.code === language)?.codeLabel || 'BR'}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 overflow-hidden border border-gray-200">
            {languages.map((lang) => {
              const isEnabled = isLanguageEnabled(lang.code);
              const isActive = language === lang.code;
              
              return (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageClick(lang.code)}
                  disabled={!isEnabled}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-300 ${
                    isActive
                      ? 'bg-primary-red text-white'
                      : isEnabled
                      ? 'text-primary-blue hover:bg-gray-100'
                      : 'text-gray-400 cursor-not-allowed opacity-50'
                  }`}
                >
                  <span className="font-semibold text-sm w-8 text-center">{lang.codeLabel}</span>
                  <span className="font-medium flex-1">{lang.name}</span>
                  {isActive && (
                    <span className="text-sm">✓</span>
                  )}
                  {!isEnabled && (
                    <span className="text-xs">Em breve</span>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

