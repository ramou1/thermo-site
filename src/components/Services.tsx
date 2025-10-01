'use client';

export default function Services() {
  const services = [
    {
      title: "Climatização",
      description: "Soluções completas em climatização para ambientes residenciais, comerciais e industriais. Instalação, manutenção e reparo de sistemas de ar condicionado.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Ar Condicionado", "Sistemas Centrais", "Manutenção Preventiva", "Reparos Emergenciais"]
    },
    {
      title: "Instalações Elétricas",
      description: "Instalações elétricas seguras e eficientes, seguindo todas as normas técnicas. Projetos elétricos e manutenção de sistemas elétricos.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Projetos Elétricos", "Instalações Residenciais", "Instalações Comerciais", "Manutenção Elétrica"]
    },
    {
      title: "Comércio Atacadista",
      description: "Distribuição de equipamentos e materiais para climatização e instalações elétricas. Parcerias com fornecedores de alta qualidade.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Equipamentos Industriais", "Materiais Elétricos", "Peças e Componentes", "Atendimento Especializado"]
    },
    {
      title: "Tecnologia da Informação",
      description: "Soluções em TI para empresas, incluindo infraestrutura de rede, sistemas de monitoramento e automação de processos.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Infraestrutura de Rede", "Sistemas de Monitoramento", "Automação", "Suporte Técnico"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções integradas e especializadas em climatização, instalações elétricas, 
            comércio atacadista e tecnologia da informação, atendendo diversos setores com excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-light-gray rounded-2xl p-8 hover-shadow transition-all duration-300 hover-scale group"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-blue transition-colors duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-medium-gray text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                    <span className="text-sm text-dark-gray">{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de uma Solução Integrada?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para desenvolver soluções personalizadas 
              que atendam às suas necessidades específicas em climatização, elétrica e tecnologia.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-primary-red transition-all duration-300 font-semibold hover-scale"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
