export default function AdditionalInfo() {
  return (
    <section id="additional-info" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
            Informações Adicionais
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto rounded-full mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline da Empresa */}
          <div className="bg-light-gray rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary-blue mb-4">
                Nossa Trajetória
              </h3>
              <p className="text-medium-gray">
                Crescimento contínuo e evolução no mercado de São José, SC
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2012</span>
                </div>
                <h4 className="text-lg font-semibold text-primary-blue mb-2">
                  Fundação
                </h4>
                <p className="text-medium-gray text-sm">
                  Thermo Service Climatização LTDA foi fundada em 10 de fevereiro de 2012
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary-blue mb-2">
                  Crescimento
                </h4>
                <p className="text-medium-gray text-sm">
                  Crescimento contínuo no mercado de São José, SC
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary-blue mb-2">
                  Expansão
                </h4>
                <p className="text-medium-gray text-sm">
                  Atendimento a diversos setores do mercado
                </p>
              </div>
            </div>
          </div>

          {/* Setores de Atuação */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary-blue to-secondary-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Setores de Atuação
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-red rounded-full"></div>
                  <span className="font-semibold">Residencial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-red rounded-full"></div>
                  <span className="font-semibold">Comercial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-red rounded-full"></div>
                  <span className="font-semibold">Industrial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-red rounded-full"></div>
                  <span className="font-semibold">Público</span>
                </div>
              </div>
            </div>

            <div className="bg-light-gray rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-blue mb-6">
                Parcerias Estratégicas
              </h3>
              <p className="text-medium-gray mb-4">
                Mantemos parcerias sólidas com fornecedores de máquinas e equipamentos 
                industriais de alta qualidade, garantindo:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark-gray">Equipamentos de última geração</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark-gray">Garantia estendida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark-gray">Suporte técnico especializado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark-gray">Preços competitivos</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
