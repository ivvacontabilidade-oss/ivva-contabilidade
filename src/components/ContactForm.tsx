import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto">
      <div className="p-10 bg-white">
       <form
  className="space-y-6"
  action="https://formsubmit.co/contato@ivvacontabilidade.online"
  method="POST"
>
  <input type="hidden" name="_subject" value="Novo contato pelo site - IVVA Contabilidade" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://ivvacontabilidade.online/contato?enviado=1" />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
           <input
  type="text"
  id="name"
  name="name"
  required
  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
  placeholder="Seu nome"
/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail Corporativo</label>
             <input
  type="email"
  id="email"
  name="email"
  required
  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
  placeholder="seu@email.com"
/>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Nome da Empresa</label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Sua empresa"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Como podemos ajudar?</label>
           <textarea
  id="message"
  name="message"
  rows={4}
  required
  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
  placeholder="Descreva sua necessidade..."
></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>Enviar Mensagem</span>
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
