'use client';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-blue to-secondary-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo Principal */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-primary-red font-bold text-4xl">TS</span>
            </div>
            <div className="w-24 h-1 bg-primary-red mx-auto rounded-full animate-fade-in-up"></div>
          </div>

          {/* Descrição Principal */}
          <div className="mb-12 animate-fade-in-up">
            <p className="text-base md:text-lg text-blue-200 mb-8 leading-relaxed">
              Especializada em soluções de climatização, elétrica, hidráulica e tecnologia da informação.
              <br />
              Fundada em <span className="font-semibold">10 de fevereiro de 2012</span>, com sede em <span className="font-semibold">São José, SC</span>.
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
