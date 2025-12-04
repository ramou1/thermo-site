'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

export default function About() {
  const t = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
          {t.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Missão */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-shadow transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="/images/missao.png"
                  alt="Missão"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">{t.about.missao.title}</h3>
            <p className="text-medium-gray leading-relaxed">
              {t.about.missao.description}
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-shadow transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="/images/visao.png"
                  alt="Visão"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">{t.about.visao.title}</h3>
            <p className="text-medium-gray leading-relaxed">
              {t.about.visao.description}
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-shadow transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="/images/valores.png"
                  alt="Valores"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">{t.about.valores.title}</h3>
            <p className="text-medium-gray leading-relaxed">
              {t.about.valores.description}
            </p>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-red mb-2">12+</div>
              <div className="text-medium-gray">{t.about.stats.anos}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">500+</div>
              <div className="text-medium-gray">{t.about.stats.projetos}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-red mb-2">100%</div>
              <div className="text-medium-gray">{t.about.stats.satisfacao}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">24h</div>
              <div className="text-medium-gray">{t.about.stats.suporte}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
