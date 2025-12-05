'use client';

import { useLanguage, Language } from '@/contexts/LanguageContext';
import Image from 'next/image';

const languages: { code: Language; flagImage: string }[] = [
  { code: 'pt', flagImage: '/images/brazil-flag.png' },
  { code: 'en', flagImage: '/images/us-flag.png' },
  { code: 'es', flagImage: '/images/spain-flag.png' },
];

export default function LanguageSelector({ isMobile = false }: { isMobile?: boolean }) {
  const { language, setLanguage, isLanguageEnabled } = useLanguage();

  const handleLanguageClick = (lang: Language) => {
    if (isLanguageEnabled(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <div className={`flex items-center gap-2 ${isMobile ? 'justify-center py-2' : ''}`}>
      {languages.map((lang) => {
        const isEnabled = isLanguageEnabled(lang.code);
        const isActive = language === lang.code;
        
        return (
          <button
            key={lang.code}
            onClick={() => handleLanguageClick(lang.code)}
            disabled={!isEnabled}
            className={`relative transition-all duration-300 ${
              isActive
                ? 'opacity-100 scale-110'
                : isEnabled
                ? 'opacity-60 hover:opacity-100 hover:scale-110'
                : 'opacity-30 cursor-not-allowed'
            }`}
            title={isEnabled ? `Idioma: ${lang.code === 'pt' ? 'Português' : lang.code === 'en' ? 'English' : 'Español'}` : 'Em breve'}
          >
            <div className={`w-8 h-8 md:w-7 md:h-7 relative rounded-full overflow-hidden border-2 transition-colors duration-300 ${
              isActive
                ? 'border-primary-red shadow-lg'
                : isEnabled
                ? 'border-transparent hover:border-gray-300'
                : 'border-transparent'
            }`}>
              <Image
                src={lang.flagImage}
                alt={lang.code === 'pt' ? 'Português' : lang.code === 'en' ? 'English' : 'Español'}
                fill
                className="object-cover"
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}

