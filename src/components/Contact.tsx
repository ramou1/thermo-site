"use client";

import { Mail, Instagram, Phone, MapPin } from "lucide-react";
import { useTranslation } from '@/hooks/useTranslation';

export default function Contact() {
  const t = useTranslation();
  
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary-blue to-secondary-blue text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Informações de Contato e Mapa */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {t.contact.infoTitle}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Informações de Contato - 1/3 */}
              <div className="lg:col-span-1 space-y-6">
                {/* Endereço */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t.contact.endereco.title}</h4>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      {t.contact.endereco.line1}
                      <br />
                      {t.contact.endereco.line2}
                      <br />
                      {t.contact.endereco.line3}
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t.contact.telefone.title}</h4>
                    <p className="text-blue-100 text-base">
                      <a
                        href="tel:+554830357355"
                        className="hover:text-primary-red transition-colors duration-300"
                      >
                        (48) 3035-7355
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t.contact.email.title}</h4>
                    <p className="text-blue-100 text-sm">
                      <a
                        href="mailto:thermoservice@thermoservice.srv.br"
                        className="hover:text-primary-red transition-colors duration-300"
                      >
                        thermoservice@thermoservice.srv.br
                      </a>
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t.contact.instagram.title}</h4>
                    <p className="text-blue-100 text-sm">
                      <a
                        href="https://www.instagram.com/thermo.servicee"
                        className="hover:text-primary-red transition-colors duration-300"
                      >
                        @thermo.servicee
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Mapa - 2/3 */}
              <div className="lg:col-span-2">
                <div className="bg-white bg-opacity-20 rounded-lg h-full min-h-[400px] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.3677261630983!2d-48.6082058!3d-27.582126799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952749d006e097cd%3A0x8dd98dcf3687822e!2sIMPAR%20Sistemas%20de%20Climatiza%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1761159811429!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Thermo Service"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
