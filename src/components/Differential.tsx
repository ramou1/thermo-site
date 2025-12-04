'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

export default function Differential() {
  const t = useTranslation();
  
  const differentials = t.differential.items.map((title, index) => ({
    title,
    image: index < 4 ? `/images/diferencial0${index + 1}.png` : '/images/diferencial01.png'
  }));

  return (
    <section id="differential" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
            {t.differential.title}
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
            {t.differential.description}
          </p>
        </div>

        {/* antigo: md:grid-cols-4 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover-shadow transition-all duration-300 hover-scale"
            >
              {/* Imagem real */}
              <div className="aspect-square relative">
                <Image
                  src={differential.image}
                  alt={differential.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base text-center font-semibold text-primary-blue">
                  {differential.title}
                </h3>

                {/* <h3 className="text-lg font-bold text-primary-blue mb-3">
                  {differential.title}
                </h3>
                
                <p className="text-medium-gray leading-relaxed text-sm">
                  {differential.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
