export default function About() {
  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
            A Thermo Service Climatização LTDA é uma empresa especializada em soluções integradas 
            de climatização, elétrica, hidráulica e tecnologia da informação, comprometida com a 
            excelência e inovação desde 2012.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Missão */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-shadow transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Missão</h3>
            <p className="text-medium-gray leading-relaxed">
              Fornecer soluções integradas de climatização, elétrica, hidráulica e tecnologia da informação, 
              garantindo conforto, eficiência energética e sustentabilidade para nossos clientes, 
              sempre com excelência técnica e compromisso com a qualidade.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-shadow transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Visão</h3>
            <p className="text-medium-gray leading-relaxed">
              Ser reconhecida como a principal empresa de soluções integradas em climatização e 
              tecnologia da informação na região de São José, SC, destacando-se pela inovação, 
              sustentabilidade e satisfação total dos clientes.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-shadow transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Valores</h3>
            <div className="text-medium-gray leading-relaxed space-y-2">
              <p><strong>• Qualidade:</strong> Excelência em todos os serviços</p>
              <p><strong>• Inovação:</strong> Tecnologia de ponta</p>
              <p><strong>• Sustentabilidade:</strong> Responsabilidade ambiental</p>
              <p><strong>• Integridade:</strong> Transparência e ética</p>
              <p><strong>• Compromisso:</strong> Satisfação do cliente</p>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-red mb-2">12+</div>
              <div className="text-medium-gray">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">500+</div>
              <div className="text-medium-gray">Projetos Realizados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-red mb-2">100%</div>
              <div className="text-medium-gray">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">24h</div>
              <div className="text-medium-gray">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
