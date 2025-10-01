import Image from 'next/image';

export default function Differential() {
  const differentials = [
    {
      title: "Soluções Integradas",
      description: "Oferecemos soluções completas que integram climatização, elétrica, hidráulica e TI em um único projeto, garantindo eficiência e economia.",
      image: "/site/images/diferencial01.png"
    },
    {
      title: "Experiência",
      description: "Mais de 12 anos de experiência no mercado, com equipe técnica especializada e conhecimento profundo das melhores práticas da indústria.",
      image: "/site/images/diferencial02.png"
    },
    {
      title: "Compromisso com Qualidade",
      description: "Utilizamos apenas equipamentos e materiais de alta qualidade, seguindo rigorosos padrões de instalação e manutenção para garantir a excelência.",
      image: "/site/images/diferencial03.png"
    },
    {
      title: "Sustentabilidade",
      description: "Comprometidos com práticas sustentáveis, oferecemos soluções que reduzem o consumo energético e minimizam o impacto ambiental.",
      image: "/site/images/diferencial04.png"
    }
  ];

  return (
    <section id="differential" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
            Nosso Diferencial
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
            O que nos torna únicos no mercado de climatização e soluções integradas em São José, SC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

              <div className="p-6">
                <h3 className="text-lg font-bold text-primary-blue mb-3">
                  {differential.title}
                </h3>
                
                <p className="text-medium-gray leading-relaxed text-sm">
                  {differential.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
