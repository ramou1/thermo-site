import { Instagram, Facebook, Linkedin } from 'lucide-react'
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-2">
              <Image
                src="/site/logo-thermo.jpeg"
                alt="Thermo Service Logo"
                width={160}
                height={80}
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md text-sm">
              Especializada em soluções de climatização, elétrica, hidráulica e tecnologia da informação. 
              Fundada em 2012, com sede em São José, SC.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/thermo.servicee" className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-primary-red transition-colors duration-300">Climatização</a></li>
              <li><a href="#services" className="hover:text-primary-red transition-colors duration-300">Instalações Elétricas</a></li>
              <li><a href="#services" className="hover:text-primary-red transition-colors duration-300">Comércio Atacadista</a></li>
              <li><a href="#services" className="hover:text-primary-red transition-colors duration-300">Tecnologia da Informação</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-primary-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm">Rua São Ludgero, 1006, Sala 02</p>
                  <p className="text-sm">Barreiros, São José, SC</p>
                  <p className="text-sm">88117-270</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+554830898333" className="text-sm hover:text-primary-red transition-colors duration-300">
                  (48) 3089-8333
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:thermoservice@thermoservice.srv.br" className="text-sm hover:text-primary-red transition-colors duration-300">
                  thermoservice@thermoservice.srv.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm">&copy; 2025 Thermo Service Climatização LTDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
