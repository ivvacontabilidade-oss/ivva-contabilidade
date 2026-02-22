import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="pt-20">
      <SEO 
        title="Fale Conosco"
        description="Entre em contato com a IVVA Contabilidade. Estamos prontos para atender sua empresa em Goiânia e região."
        canonical="https://ivvacontabilidade.com.br/contato"
      />
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Fale Conosco</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto px-4">
          Estamos prontos para atender sua empresa. Entre em contato pelos canais abaixo ou visite nosso escritório.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Telefone & WhatsApp</h3>
            <p className="text-slate-600 mb-4">Atendimento rápido e direto.</p>
            <a href="tel:62991872371" className="text-lg font-bold text-blue-600 hover:text-blue-800 block">
              (62) 99187-2371
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">E-mail</h3>
            <p className="text-slate-600 mb-4">Envie sua dúvida ou solicitação.</p>
            <a href="mailto:contato@ivvacontabilidade.online" className="text-lg font-bold text-blue-600 hover:text-blue-800 block break-all">
              contato@ivvacontabilidade.online
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Horário de Atendimento</h3>
            <p className="text-slate-600 mb-4">Segunda a Sexta</p>
            <p className="text-lg font-bold text-slate-900">
              08:00 às 18:00
            </p>
          </div>
        </div>

        <div className="mb-20">
          <ContactForm />
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          <div className="p-8 border-b border-slate-100">
            <div className="flex items-center space-x-3 text-slate-900">
              <MapPin className="text-blue-600" />
              <h3 className="text-xl font-bold">Nossa Localização</h3>
            </div>
            <p className="mt-2 text-slate-600 ml-9">
              Alameda dos Buritis, 408, Sala 1005, Setor Central, Goiânia - GO, CEP: 74.015-080
            </p>
          </div>
          <div className="h-[400px] bg-slate-100 w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.587679876543!2d-49.2584!3d-16.6799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef0f0f0f0f0f0%3A0x0!2sAlameda%20dos%20Buritis%2C%20408%20-%20St.%20Central%2C%20Goi%C3%A2nia%20-%20GO%2C%2074015-080!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização IVVA Contabilidade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
