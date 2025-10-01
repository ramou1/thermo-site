'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
                src="/site/logo-thermo.jpeg"
                alt="Thermo Service Logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-primary-blue hover:text-primary-red transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
