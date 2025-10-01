'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-blue to-secondary-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender suas necessidades. Entre em contato conosco 
            e solicite um orçamento personalizado para seu projeto.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  {/* Endereço */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Endereço</h4>
                      <p className="text-blue-100 leading-relaxed">
                        Rua São Ludgero, 1006, Sala 02<br />
                        Barreiros, São José, SC<br />
                        CEP: 88117-270
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Telefone</h4>
                      <p className="text-blue-100 text-lg">
                        <a href="tel:+5548991238900" className="hover:text-primary-red transition-colors duration-300">
                          (48) 99123-8900
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">E-mail</h4>
                      <p className="text-blue-100 text-lg">
                        <a href="mailto:thermoservice@thermoservice.srv.br" className="hover:text-primary-red transition-colors duration-300">
                          thermoservice@thermoservice.srv.br
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Horário de Funcionamento
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Segunda - Sexta</span>
                    <span className="font-semibold">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Sábado</span>
                    <span className="font-semibold">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Domingo</span>
                    <span className="font-semibold">Fechado</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary-red bg-opacity-20 rounded-lg">
                  <p className="text-sm text-blue-100">
                    <strong>Suporte de Emergência:</strong> 24 horas para clientes com contrato de manutenção
                  </p>
                </div>
              </div>
          </div>

          {/* Mapa */}
          <div className="mt-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Nossa Localização
            </h3>
            <div className="bg-white bg-opacity-20 rounded-lg h-96 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.366736315284!2d-48.608235199999996!3d-27.5821575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952749cff01e8755%3A0x80efb925c3484e80!2zUi4gU8OjbyBMdWRnw6lybywgMTAwNiAtIEJhcnJlaXJvcywgU8OjbyBKb3PDqSAtIFNDLCA4ODExNy0yNzA!5e0!3m2!1spt-BR!2sbr!4v1759160376257!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Thermo Service"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
