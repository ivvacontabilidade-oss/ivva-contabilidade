import { AlertTriangle, TrendingDown, FileWarning, SearchX } from 'lucide-react';

const problems = [
  {
    title: 'Pagamento Excessivo de Impostos',
    description: 'Sem um planejamento tributário adequado, sua empresa pode estar pagando mais do que deve, corroendo sua margem de lucro.',
    icon: TrendingDown,
  },
  {
    title: 'Risco Fiscal e Multas',
    description: 'Erros nas declarações e falta de conformidade podem gerar multas pesadas e dores de cabeça com a Receita Federal.',
    icon: AlertTriangle,
  },
  {
    title: 'Desorganização Financeira',
    description: 'Misturar contas pessoais com as da empresa e falta de controle de fluxo de caixa impedem o crescimento saudável.',
    icon: FileWarning,
  },
  {
    title: 'Falta de Visão Estratégica',
    description: 'Tomar decisões baseadas em "achismo" em vez de dados contábeis precisos pode levar o negócio à estagnação.',
    icon: SearchX,
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Por que nos contratar?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Resolvemos os Problemas que Impedem seu Crescimento
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Muitos empresários perdem dinheiro e sono por questões que poderiam ser evitadas com uma contabilidade proativa e estratégica.
            </p>
            
            <div className="space-y-8">
              {problems.map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-50 text-red-600">
                      <item.icon size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-slate-100 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Análise financeira profissional e estratégica" 
              referrerPolicy="no-referrer"
              className="relative rounded-3xl shadow-xl object-cover h-[600px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
