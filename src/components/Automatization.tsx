'use client';

import { Droplets, Wind, Lightbulb, MonitorDot } from "lucide-react";

export default function Automatization() {
  const services = [
    {
      title: "Bombeamento de Água",
      icon: Droplets,
      items: [
        "Controle automático de motobombas e pressurização",
        "Monitoramento de nível e alarmes",
        "Eficiência e segurança operacional"
      ]
    },
    {
      title: "Ar-Condicionado",
      subtitle: "Expansão Direta e Indireta",
      icon: Wind,
      systems: {
        direta: "Expansão Direta: VRF, Splits, Rooftop",
        indireta: "Expansão Indireta: Chillers e Centrais de Água Gelada (CAG)"
      },
      items: [
        "Lógica de operação inteligente",
        "Balanceamento de cargas",
        "Monitoramento de desempenho",
        "Integração com supervisório"
      ]
    },
    {
      title: "Iluminação Inteligente",
      icon: Lightbulb,
      items: [
        "Controle por zonas e cenários",
        "Sensores de presença",
        "Economia de energia",
        "Automação de rotinas"
      ]
    },
    {
      title: "Sistemas Supervisórios",
      icon: MonitorDot,
      complexities: [
        {
          level: "Baixa complexidade",
          description: "Monitoramento básico"
        },
        {
          level: "Alta complexidade",
          description: "BMS completo com dashboards, alarmes, históricos e acesso remoto"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-r from-primary-blue to-secondary-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que Automatizamos
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
                  <h3 className="text-xl font-bold mb-2">
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
                      <p className="text-xs text-blue-100 leading-relaxed">
                        <span className="font-semibold">•</span> {service.systems.direta}
                      </p>
                      <p className="text-xs text-blue-100 leading-relaxed">
                        <span className="font-semibold">•</span> {service.systems.indireta}
                      </p>
                    </div>
                  )}

                  {/* Lista de itens padrão */}
                  {service.items && service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-primary-red text-lg leading-none mt-0.5">•</span>
                      <p className="text-sm text-blue-100 leading-relaxed flex-1">
                        {item}
                      </p>
                    </div>
                  ))}

                  {/* Complexidades dos Sistemas Supervisórios */}
                  {service.complexities && service.complexities.map((complexity, idx) => (
                    <div key={idx} className="mb-3">
                      <p className="text-sm font-semibold text-white mb-1">
                        {complexity.level}
                      </p>
                      <p className="text-xs text-blue-100 leading-relaxed pl-3">
                        {complexity.description}
                      </p>
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