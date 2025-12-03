'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Fecha o menu mobile após clicar
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-32 h-20 relative">
              <Image
                src="/logo-thermo.jpeg"
                alt="Thermo Service Logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-primary-blue hover:text-primary-red' 
                    : 'text-white hover:text-primary-red'
                }`}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('automatization')}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-primary-blue hover:text-primary-red' 
                    : 'text-white hover:text-primary-red'
                }`}
              >
                Automatizações
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-primary-blue hover:text-primary-red' 
                    : 'text-white hover:text-primary-red'
                }`}
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-primary-blue hover:text-primary-red' 
                    : 'text-white hover:text-primary-red'
                }`}
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('differential')}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-primary-blue hover:text-primary-red' 
                    : 'text-white hover:text-primary-red'
                }`}
              >
                Diferencial
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary-red text-white px-6 py-2 rounded-lg hover:bg-secondary-blue transition-colors duration-300 font-medium"
              >
                Contato
              </button>
            </div>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-primary-blue hover:text-primary-red' 
                  : 'text-white hover:text-primary-red'
              }`}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-primary-blue hover:text-primary-red transition-colors duration-300 font-medium py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('automatization')}
                className="block w-full text-left text-primary-blue hover:text-primary-red transition-colors duration-300 font-medium py-2"
              >
                Automatizações
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-primary-blue hover:text-primary-red transition-colors duration-300 font-medium py-2"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-primary-blue hover:text-primary-red transition-colors duration-300 font-medium py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('differential')}
                className="block w-full text-left text-primary-blue hover:text-primary-red transition-colors duration-300 font-medium py-2"
              >
                Diferencial
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full bg-primary-red text-white px-6 py-3 rounded-lg hover:bg-secondary-blue transition-colors duration-300 font-medium text-center"
              >
                Contato
              </button>
              <LanguageSelector isMobile={true} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
