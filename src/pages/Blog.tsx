import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';

const posts = [
{
  id: 1,
  title: 'Planejamento Tributário: Como pagar menos impostos legalmente',
  excerpt: 'Descubra as estratégias legais para reduzir a carga tributária da sua empresa e aumentar a lucratividade no próximo ano fiscal.',
  date: '20 Fev 2024',
  author: 'Equipe IVVA',
  category: 'Tributário',
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  content: [
    "O planejamento tributário é uma ferramenta estratégica que permite às empresas reduzir legalmente sua carga de impostos.",
    "Ele consiste em analisar o regime tributário, a estrutura da empresa e a operação financeira para identificar oportunidades de economia.",
    "Muitas empresas pagam mais impostos do que deveriam simplesmente por não realizarem simulações e análises periódicas.",
    "Quando bem estruturado, o planejamento melhora o fluxo de caixa, reduz riscos fiscais e aumenta a previsibilidade financeira.",
    "Se sua empresa nunca passou por uma análise estratégica, pode estar deixando dinheiro na mesa."
  ]
},
{
  id: 2,
  title: 'Simples Nacional x Lucro Presumido: Qual o melhor?',
  excerpt: 'Entenda as diferenças entre os regimes tributários e saiba como escolher a melhor opção para o perfil do seu negócio.',
  date: '15 Fev 2024',
  author: 'Equipe IVVA',
  category: 'Empreendedorismo',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  content: [
    "A escolha do regime tributário impacta diretamente na lucratividade da empresa.",
    "O Simples Nacional é indicado para empresas com faturamento até R$ 4,8 milhões anuais e oferece simplificação na apuração de tributos.",
    "Já o Lucro Presumido pode ser mais vantajoso dependendo da margem de lucro e da atividade exercida.",
    "Cada empresa possui características específicas que precisam ser analisadas antes da decisão.",
    "Realizar uma simulação tributária é a maneira mais segura de escolher o regime ideal."
  ]
},
{
  id: 3,
  title: 'A importância da Holding Patrimonial para proteção de bens',
  excerpt: 'Saiba como uma Holding pode proteger seu patrimônio pessoal e facilitar o processo de sucessão familiar.',
  date: '10 Fev 2024',
  author: 'Equipe IVVA',
  category: 'Gestão Patrimonial',
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  content: [
    "A holding patrimonial é uma empresa criada para administrar bens e direitos, como imóveis e participações societárias.",
    "Ela é amplamente utilizada como ferramenta de organização patrimonial e planejamento sucessório.",
    "Com a holding, é possível estruturar regras claras de gestão e sucessão, reduzindo conflitos familiares futuros.",
    "Além disso, dependendo da estrutura, pode haver benefícios tributários na administração de imóveis e rendimentos.",
    "Cada caso deve ser analisado individualmente para garantir segurança jurídica e eficiência fiscal."
  ]
},
{
  id: 4,
  title: 'Distribuição de Lucros: Regras e Vantagens',
  excerpt: 'Aprenda como funciona a distribuição de lucros isenta de impostos e como utilizá-la para remunerar os sócios.',
  date: '05 Fev 2024',
  author: 'Equipe IVVA',
  category: 'Financeiro',
  image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  content: [
    "A distribuição de lucros é a forma legal de remunerar os sócios com base no resultado da empresa.",
    "Quando a empresa possui contabilidade regular e lucro devidamente apurado, a distribuição pode ser isenta de imposto de renda para a pessoa física.",
    "É importante diferenciar pró-labore de distribuição de lucros, pois o pró-labore sofre incidência de INSS e IR.",
    "A ausência de controle contábil adequado pode gerar riscos fiscais e questionamentos futuros.",
    "Uma boa organização financeira permite que os sócios recebam seus resultados com segurança e eficiência tributária."
  ]
}
];

export default function Blog() {
    const [openPostId, setOpenPostId] = useState<number | null>(null);

  function togglePost(id: number) {
    setOpenPostId(prev => (prev === id ? null : id));
  }
  return (
    <div className="pt-20">
      <SEO 
        title="Blog e Conteúdo"
        description="Artigos e notícias sobre contabilidade, gestão financeira, tributação e empreendedorismo para o seu negócio."
        canonical="https://ivvacontabilidade.com.br/blog"
      />
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Conteúdo</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto px-4">
          Informação de qualidade para ajudar você a gerir melhor o seu negócio.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-500 mb-4 space-x-4">
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded font-medium">{post.category}</span>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  <Link to="#">{post.title}</Link>
                </h2>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                {openPostId === post.id && (
  <div className="mt-4 space-y-3 text-sm text-slate-600 leading-relaxed border-t pt-4">
    {post.content?.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
)}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center text-sm text-slate-500">
                    <User size={14} className="mr-2" />
                    {post.author}
                  </div>
                 <button
  type="button"
  onClick={() => togglePost(post.id)}
  className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-800"
>
  {openPostId === post.id ? "Fechar" : "Ler mais"}{" "}
  <ArrowRight
    size={14}
    className={`ml-1 transition-transform ${openPostId === post.id ? "rotate-90" : ""}`}
  />
</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Receba nossas atualizações</h2>
          <p className="text-slate-600 mb-8">
            Inscreva-se para receber artigos sobre gestão, tributação e empreendedorismo diretamente no seu e-mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-grow px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors">
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
