'use client';

import { Droplets, Wind, Lightbulb, MonitorDot } from "lucide-react";
import { useTranslation } from '@/hooks/useTranslation';

export default function Automatization() {
  const t = useTranslation();
  
  const services = [
    {
      title: t.automatization.bombeamento.title,
      icon: Droplets,
      items: t.automatization.bombeamento.items
    },
    {
      title: t.automatization.arCondicionado.title,
      subtitle: t.automatization.arCondicionado.subtitle,
      icon: Wind,
      systems: {
        direta: t.automatization.arCondicionado.direta,
        indireta: t.automatization.arCondicionado.indireta
      },
      items: t.automatization.arCondicionado.items
    },
    {
      title: t.automatization.iluminacao.title,
      icon: Lightbulb,
      items: t.automatization.iluminacao.items
    },
    {
      title: t.automatization.supervisorio.title,
      icon: MonitorDot,
      complexities: [
        {
          level: t.automatization.supervisorio.baixa.level,
          description: t.automatization.supervisorio.baixa.description
        },
        {
          level: t.automatization.supervisorio.alta.level,
          description: t.automatization.supervisorio.alta.description
        }
      ]
    }
  ];

  return (
    <section id="automatization" className="py-20 bg-gradient-to-r from-primary-blue to-secondary-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.automatization.title}
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover-shadow transition-all duration-300 hover-scale group"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-blue transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-sm text-blue-200 mb-4 font-medium">
                      {service.subtitle}
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-left">
                  {/* Sistemas de Ar-Condicionado */}
                  {service.systems && (
                    <div className="space-y-2 mb-4 pb-4 border-b border-white border-opacity-20">
                      <p className="text-sm text-blue-100 leading-relaxed">
                        <span className="font-semibold">•</span> {service.systems.direta}
                      </p>
                      <p className="text-sm text-blue-100 leading-relaxed">
                        <span className="font-semibold">•</span> {service.systems.indireta}
                      </p>
                    </div>
                  )}

                  {/* Lista de itens padrão */}
                  {service.items && service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-primary-red text-lg leading-none mt-0.5">•</span>
                      <p className="text-base text-blue-100 leading-relaxed flex-1">
                        {item}
                      </p>
                    </div>
                  ))}

                  {/* Complexidades dos Sistemas Supervisórios */}
                  {service.complexities && service.complexities.map((complexity, idx) => (
                    <div key={idx} className="flex items-start gap-2 mb-3">
                      <span className="text-primary-red text-lg leading-none mt-0.5">•</span>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-white mb-1">
                          {complexity.level}
                        </p>
                        <p className="text-base text-blue-100 leading-relaxed">
                          {complexity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}