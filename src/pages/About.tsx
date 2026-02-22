import { CheckCircle, Award, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="pt-20">
      <SEO 
        title="Sobre Nós"
        description="Conheça a IVVA Contabilidade. Nossa missão é acabar com a burocracia e impulsionar o crescimento sustentável das empresas brasileiras."
        canonical="https://ivvacontabilidade.com.br/sobre"
      />
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto px-4">
          Conheça a história e os valores que movem a IVVA Contabilidade.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Nossa História</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Mais do que números, construímos parcerias de sucesso.</h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                A IVVA Contabilidade nasceu com um propósito claro: acabar com a burocracia que impede o crescimento das empresas brasileiras.
              </p>
              <p>
                Fundada por especialistas com vasta experiência no mercado financeiro e tributário, nossa missão é fornecer inteligência contábil que vai muito além da emissão de guias de impostos.
              </p>
              <p>
                Acreditamos que cada empresa é única e merece um atendimento personalizado, consultivo e próximo.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="text-4xl font-bold text-blue-600 mb-2">10+</h4>
                <p className="text-slate-600 font-medium">Anos de Experiência</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="text-4xl font-bold text-blue-600 mb-2">500+</h4>
                <p className="text-slate-600 font-medium">Clientes Atendidos</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-2xl transform -rotate-2"></div>
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663275577763/NYUBPAgkkEfhOKkx.png" 
              alt="Imagem institucional IVVA Contabilidade" 
              referrerPolicy="no-referrer"
              className="relative rounded-2xl shadow-xl w-full object-cover h-[600px]"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Nossos Pilares</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Missão</h3>
              <p className="text-slate-600">
                Impulsionar o crescimento sustentável das empresas através de soluções contábeis estratégicas e inovadoras.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Visão</h3>
              <p className="text-slate-600">
                Ser referência nacional em contabilidade consultiva, reconhecida pela excelência técnica e compromisso com o cliente.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Valores</h3>
              <ul className="text-slate-600 leading-tight space-y-0.5">
                <li>Ética e Transparência</li>
                <li>Compromisso com Resultados</li>
                <li>Inovação Constante</li>
                <li>Proximidade com o Cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Quer fazer parte dessa história de sucesso?</h2>
          <Link 
            to="/contato" 
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Fale com um Consultor
          </Link>
        </div>
      </div>
    </div>
  );
}
