import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-700/50 rounded-full px-4 py-1.5">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-blue-300 text-xs font-semibold tracking-wide uppercase">Especialistas em Crescimento Empresarial</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Contabilidade Estratégica para Empresas que Querem <span className="text-blue-400">Crescer com Segurança</span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Deixe a burocracia conosco e foque no que realmente importa: o sucesso do seu negócio. Oferecemos soluções personalizadas para reduzir riscos e otimizar seus resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contato"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                Falar com um Especialista
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex justify-center items-center px-8 py-4 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
              >
                Conhecer Nossos Serviços
              </Link>
            </div>

            <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-6 text-sm text-slate-400">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Atendimento Consultivo</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Planejamento Tributário</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Segurança Fiscal</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Equipe de contabilidade analisando dados" 
              referrerPolicy="no-referrer"
              className="relative rounded-2xl shadow-2xl border border-slate-700/50 object-cover h-[600px] w-full"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-blue-600">
              <p className="text-slate-500 text-sm mb-2">Redução média de impostos</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-slate-900">Até 30%</span>
                <span className="text-green-600 text-xs font-semibold">com planejamento correto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
