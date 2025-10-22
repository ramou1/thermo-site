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

          {/* Clientes */}
          <div className="bg-gradient-to-br from-primary-blue to-secondary-blue rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Atendemos:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Clientes Finais</h4>
                <p className="text-sm">(hotéis, hospitais, indústrias, comércios, condomínios, prédios corporativos)</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Fabricantes de equipamentos e <br /> sistemas de ar-condicionado</h4>
                <p className="text-sm">(integração, comissionamento e suporte técnico especializado)</p>
              </div>
            </div>
            
            <div className="mt-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <p className="text-lg leading-relaxed">
                <strong>Foco em soluções personalizadas para cada necessidade,</strong><br />
                com atendimento ágil e eficiente.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
