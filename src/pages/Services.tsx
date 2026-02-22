import { Briefcase, Calculator, BarChart3, TrendingUp, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const services = [
  {
    id: 'abertura',
    title: 'Abertura e Regularização',
    description: 'Processo completo de abertura de empresas, alterações contratuais e regularização de pendências junto aos órgãos públicos. Cuidamos de toda a burocracia para você começar certo.',
    features: ['Análise de viabilidade', 'Definição de natureza jurídica', 'Obtenção de CNPJ e Inscrições', 'Alvarás e Licenças'],
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'tributario',
    title: 'Planejamento Tributário',
    description: 'Estudo aprofundado para identificar o melhor regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real) para sua empresa pagar o mínimo de impostos dentro da lei.',
    features: ['Análise de regime tributário', 'Recuperação de impostos', 'Gestão de passivos fiscais', 'Compliance tributário'],
    icon: Calculator,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'bpo',
    title: 'BPO Financeiro',
    description: 'Terceirização da gestão financeira da sua empresa. Nós operamos seu contas a pagar, receber, faturamento e fluxo de caixa, liberando seu tempo para focar no negócio.',
    features: ['Gestão de contas a pagar/receber', 'Conciliação bancária diária', 'Emissão de notas fiscais', 'Relatórios financeiros'],
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'consultoria',
    title: 'Consultoria Estratégica',
    description: 'Apoio na gestão empresarial com base em indicadores contábeis e financeiros. Transformamos dados em informações valiosas para tomada de decisão.',
    features: ['Análise de balanços', 'Indicadores de desempenho', 'Valuation', 'Planejamento orçamentário'],
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'recuperacao',
    title: 'Recuperação de Créditos',
    description: 'Revisão fiscal dos últimos 5 anos para identificar pagamentos indevidos e solicitar a restituição ou compensação desses valores.',
    features: ['Revisão fiscal administrativa', 'Créditos de PIS/COFINS', 'Créditos de ICMS', 'Restituição via PER/DCOMP'],
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'pessoal',
    title: 'Gestão de Pessoal',
    description: 'Departamento pessoal completo: folha de pagamento, admissões, demissões, férias e eSocial. Garantia de cumprimento da legislação trabalhista.',
    features: ['Folha de pagamento', 'eSocial', 'Controle de férias e benefícios', 'Consultoria trabalhista'],
    icon: Users,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      <SEO 
        title="Nossos Serviços"
        description="Conheça nossos serviços de contabilidade consultiva, BPO Financeiro, Planejamento Tributário e muito mais."
        canonical="https://ivvacontabilidade.com.br/servicos"
      />
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto px-4">
          Soluções completas e personalizadas para cada etapa do seu negócio.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {services.map((service, index) => (
          <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl text-blue-600 mb-6">
                <service.icon size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contato" 
                className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-slate-50 rounded-2xl p-2 border border-slate-100 shadow-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-64 lg:h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-slate-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Não sabe qual serviço sua empresa precisa?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Agende um diagnóstico gratuito com nossos especialistas e descubra as melhores oportunidades para o seu negócio.
          </p>
          <Link 
            to="/contato" 
            className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/20"
          >
            Agendar Diagnóstico Gratuito
          </Link>
        </div>
      </div>
    </div>
  );
}
