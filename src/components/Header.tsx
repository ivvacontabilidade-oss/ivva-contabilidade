import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import IvvaCredLogoHeader from "../assets/ivva-cred-header.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isCred = location.pathname.startsWith("/ivva-cred");

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'IVVA Cred', href: '/ivva-cred' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-blue-400" />
              <span>(62) 99187-2371</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-blue-400" />
              <span>contato@ivvacontabilidade.online</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} className="text-blue-400" />
            <span>Alameda dos Buritis, 408, Goiânia - GO</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-end items-center h-20">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <Link to="/" className="flex-shrink-0 flex items-center">
             <img 
  src={
    isCred
      ? IvvaCredLogoHeader
      : "https://i.ibb.co/XZMwp3xR/logo-ivva-master-transparente.png"
  } 
  alt={isCred ? "IVVA Cred" : "IVVA Contabilidade"} 
  className="h-16 md:h-20 w-auto object-contain transition-opacity duration-200"
/>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-blue-600 transition-colors'
                } text-sm uppercase tracking-wide`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contato"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              Falar com Especialista
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-4">
              <div className="flex items-center space-x-2 text-slate-600 mb-2 px-3">
                <Phone size={16} />
                <span className="text-sm">(62) 99187-2371</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 px-3">
                <Mail size={16} />
                <span className="text-sm">contato@ivvacontabilidade.online</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
