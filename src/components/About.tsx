import Image from 'next/image';

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
            <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="/site/images/missao.png"
                  alt="Missão"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Missão</h3>
            <p className="text-medium-gray leading-relaxed">
              Proporcionar conforto e eficiência por meio de soluções integradas em climatização, instalações e tecnologia.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-shadow transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="/site/images/visao.png"
                  alt="Visão"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Visão</h3>
            <p className="text-medium-gray leading-relaxed">
              Ser referência em serviços técnicos no Sul do Brasil.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-shadow transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="/site/images/valores.png"
                  alt="Valores"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Valores</h3>
            <p className="text-medium-gray leading-relaxed">
              Qualidade, Compromisso com o cliente, Inovação e Sustentabilidade
            </p>
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
