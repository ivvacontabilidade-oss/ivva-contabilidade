import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "A IVVA Contabilidade transformou a gestão da minha empresa. Com o planejamento tributário que fizeram, conseguimos reduzir significativamente nossos custos mensais.",
    author: "Ricardo Silva",
    role: "Diretor Comercial",
    company: "TechSolutions Ltda"
  },
  {
    content: "Profissionais extremamente competentes e atenciosos. O atendimento é rápido e sempre trazem soluções práticas para os desafios do dia a dia.",
    author: "Mariana Costa",
    role: "Sócia-Fundadora",
    company: "Clínica Bem Estar"
  },
  {
    content: "Mais do que contadores, são parceiros de negócio. A visão estratégica deles nos ajudou a expandir para duas novas filiais com segurança fiscal.",
    author: "Carlos Eduardo",
    role: "CEO",
    company: "Grupo Construtor"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">O que nossos clientes dizem</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative">
              <Quote className="absolute top-6 right-6 text-slate-600 opacity-50" size={40} />
              <div className="flex space-x-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed italic">"{item.content}"</p>
              <div>
                <p className="font-bold text-white">{item.author}</p>
                <p className="text-sm text-blue-400">{item.role}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
