import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="https://i.ibb.co/XkSfcSRD/logo-ivva-transparente.png" 
                alt="IVVA Contabilidade" 
                className="w-[260px] h-auto object-contain"
              />
            </div>


          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider lg:mt-8">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog & Artigos</Link></li>
              <li><Link to="/contato" className="hover:text-blue-400 transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider lg:mt-8">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Abertura de Empresas</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Planejamento Tributário</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">BPO Financeiro</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Consultoria Estratégica</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Recuperação de Créditos</Link></li>
            </ul>
          </div>

          {/* Solutions - IVVA CRED */}
<div>
  <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider lg:mt-8">
    Soluções
  </h3>

  <ul className="space-y-3 text-sm">
    <li>
      <Link
        to="/ivva-cred"
        className="hover:text-blue-400 transition-colors"
      >
        Crédito Empresarial
      </Link>
    </li>

    <li>
      <Link
        to="/ivva-cred"
        className="hover:text-blue-400 transition-colors"
      >
        Consórcios
      </Link>
    </li>

    <li>
      <Link
        to="/ivva-cred"
        className="hover:text-blue-400 transition-colors"
      >
        Seguros Empresariais
      </Link>
    </li>
  </ul>

  <div className="mt-6">
    <Link
      to="/ivva-cred"
      className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
    >
      IVVA Cred →
    </Link>
  </div>
</div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider lg:mt-8">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Alameda dos Buritis, 408, Sala 1005, Setor Central, Goiânia - GO, 74.015-080</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span>(62) 99187-2371</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span>contato@ivvacontabilidade.online</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} IVVA Contabilidade. Todos os direitos reservados.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="#" className="hover:text-slate-300">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
