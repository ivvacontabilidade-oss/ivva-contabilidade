import { Briefcase, Calculator, BarChart3, TrendingUp, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Abertura e Regularização',
    description: 'Processo ágil e seguro para abrir sua empresa ou regularizar pendências, garantindo conformidade desde o primeiro dia.',
    icon: Briefcase,
  },
  {
    title: 'Planejamento Tributário',
    description: 'Análise profunda para enquadrar sua empresa no melhor regime tributário, reduzindo legalmente a carga de impostos.',
    icon: Calculator,
  },
  {
    title: 'BPO Financeiro',
    description: 'Terceirize sua gestão financeira conosco. Cuidamos do contas a pagar, receber e fluxo de caixa com precisão.',
    icon: BarChart3,
  },
  {
    title: 'Consultoria Estratégica',
    description: 'Apoio na tomada de decisões com base em dados contábeis reais, visando o crescimento sustentável do negócio.',
    icon: TrendingUp,
  },
  {
    title: 'Recuperação de Créditos',
    description: 'Identificação e recuperação de impostos pagos indevidamente ou a maior nos últimos 5 anos.',
    icon: ShieldCheck,
  },
  {
    title: 'Gestão de Pessoal',
    description: 'Cálculo de folha de pagamento, admissões, rescisões e cumprimento de todas as obrigações trabalhistas.',
    icon: Users,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Nossas Soluções</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Serviços Especializados para o Seu Negócio</h3>
          <p className="text-lg text-slate-600">
            Oferecemos um portfólio completo de serviços contábeis e consultivos para atender empresas de todos os portes e segmentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="text-blue-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link 
                to="/servicos" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Saiba mais
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contato"
            className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg"
          >
            Solicitar Proposta Personalizada
          </Link>
        </div>
      </div>
    </section>
  );
}
