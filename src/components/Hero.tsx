'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="h-[70vh] md:h-[85vh] flex items-center justify-center text-white relative overflow-hidden">
      {/* Background Banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-hero.png"
          alt="Banner Hero"
          fill
          className="object-cover object-[center_top] md:object-top"
          priority
        />
        {/* Overlay escuro para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-primary-blue/60"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Descrição Principal */}
          <div className="mb-12 animate-fade-in-up">
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium">
            Automação Predial Inteligente para<br />
            <strong>Eficiência, Conforto e Confiabilidade.</strong>
            </p>
            
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-primary-red transition-all duration-300 font-semibold text-lg hover-scale shadow-lg"
            >
              Nossos Serviços
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-blue transition-all duration-300 font-semibold text-lg hover-scale"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
