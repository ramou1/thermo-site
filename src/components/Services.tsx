'use client';

export default function Services() {
  const services = [
    {
      title: "Climatização",
      description: "Manutenção de sistemas centrais de ar condicionado, ventilação, refrigeração.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      ),
      features: ["Ar Condicionado", "Sistemas Centrais", "Manutenção Preventiva", "Reparos Emergenciais"]
    },
    {
      title: "Instalações Elétricas",
      description: "Alteração, manutenção e reparos em painel de comandos elétricos.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Projetos Elétricos", "Instalações Residenciais", "Instalações Comerciais", "Manutenção Elétrica"]
    },
    {
      title: "Comércio Atacadista",
      description: "Máquinas e equipamentos industriais, peças e componentes (ex.: válvulas, mangueiras, rolamentos).",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Equipamentos Industriais", "Materiais Elétricos", "Peças e Componentes", "Atendimento Especializado"]
    },
    {
      title: "Tecnologia da Informação",
      description: "Desenvolvimento de softwares sob encomenda, consultoria, suporte técnico e manutenção de sistemas.",
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
                <p className="text-medium-gray text-sm leading-relaxed">
                  {service.description}
                </p>
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
