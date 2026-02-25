import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import SEO from "../components/SEO";

// ✅ WhatsApp IVVA
const WHATSAPP_LINK =
  "https://wa.me/5562991872371?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20IVVA%20e%20quero%20entender%20as%20solu%C3%A7%C3%B5es%20em%20cr%C3%A9dito%20para%20minha%20empresa.";

// ✅ Imagem de fundo (skyline corporativo)
const HERO_BG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80";

export default function IvvaCred() {
  return (
    <div className="pt-20">
      <SEO
        title="IVVA Cred | Soluções em Crédito"
        description="Soluções em crédito, consórcio e seguros para empresas. Atendimento consultivo e direcionamento para a melhor alternativa."
        canonical="https://ivvacontabilidade.online/ivva-cred"
      />

     {/* HERO */}
<section className="relative overflow-hidden">
  <div className="absolute inset-0">
    <img
      src={HERO_BG}
      alt="Cidade"
      className="h-full w-full object-cover"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-slate-950/70" />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/20" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="max-w-2xl">
      {/* PILL (maior) */}
      <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm md:text-base font-semibold tracking-wide text-white backdrop-blur-sm">
        IVVA CRED • SOLUÇÕES EM CRÉDITO PARA EMPRESAS
      </p>

      {/* HEADLINE */}
      <h1 className="mt-6 text-2xl md:text-3xl font-bold text-white leading-tight">
  Crédito, consórcio, seguros e benefícios empresariais em um só lugar.
</h1>

      {/* SUBTEXTO */}
      <p className="mt-4 text-slate-200/90">
  Organizamos as melhores soluções para sua empresa crescer com estrutura,
  proteção e inteligência financeira.
</p>

      {/* BOTÕES */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-bold px-6 py-3 hover:bg-slate-100 transition-colors"
        >
          <MessageCircle size={18} className="mr-2" />
          Falar com Especialista
        </a>

        <a
          href="#solucoes"
          className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white font-bold px-6 py-3 hover:bg-white/15 transition-colors"
        >
          Ver soluções
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
      </div>
    </div>
</section>

      {/* SOLUÇÕES */}
      <section id="solucoes" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Soluções em crédito para empresas
          </h2>
          <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
            Escolha o caminho mais adequado para sua demanda — com clareza e
            atendimento consultivo.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900">
                Crédito Empresarial
              </h3>
              <p className="mt-3 text-slate-600">
                Para demandas como capital de giro, expansão e investimentos.
              </p>

              <ul className="mt-5 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5" size={18} />
                  Capital de giro
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5" size={18} />
                  Expansão
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5" size={18} />
                  Investimento em operação
                </li>
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 text-white font-bold px-5 py-3 hover:bg-slate-800 transition-colors"
              >
                Falar sobre crédito
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900">
                Consórcio Empresarial
              </h3>
              <p className="mt-3 text-slate-600">
                Planejamento para aquisição de ativos sem comprometer o caixa.
              </p>

              <ul className="mt-5 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5" size={18} />
                  Imóveis
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5" size={18} />
                  Veículos
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5" size={18} />
                  Máquinas/equipamentos
                </li>
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 text-white font-bold px-5 py-3 hover:bg-slate-800 transition-colors"
              >
                Simular consórcio
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>

{/* Card 3 */}
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
  <h3 className="text-xl font-bold text-slate-900">
    Seguros Empresariais
  </h3>

  <p className="mt-3 text-slate-600">
    Proteção da operação, do patrimônio e da continuidade do negócio.
  </p>

  <ul className="mt-5 space-y-2 text-slate-700">
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5" size={18} />
      Seguro empresarial
    </li>
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5" size={18} />
      Responsabilidade civil
    </li>
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5" size={18} />
      Proteções sob demanda
    </li>
  </ul>

  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noreferrer"
    className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 text-white font-bold px-5 py-3 hover:bg-slate-800 transition-colors"
  >
    Cotar seguro agora
    <ArrowRight size={16} className="ml-2" />
  </a>
</div>
          </div>
        </div>
        <div className="mt-16 max-w-3xl mx-auto text-center">
  <h3 className="text-2xl font-bold text-slate-900">
    Crescimento empresarial exige estrutura financeira inteligente.
  </h3>

  <p className="mt-4 text-slate-600">
    Crédito fortalece o caixa. Consórcio organiza investimentos.
    Seguros protegem o patrimônio. Benefícios valorizam sua equipe.
  </p>

  <p className="mt-4 text-slate-600">
    Muitas dessas despesas podem ser dedutíveis no Imposto de Renda da Pessoa Jurídica,
    contribuindo para eficiência tributária e melhor gestão financeira.
  </p>

  <p className="mt-4 text-slate-600">
    Atuamos também com planos de saúde empresariais e cartões de benefícios
    (VR, VA e soluções flexíveis), apoiando retenção de talentos e organização interna.
  </p>

  <p className="mt-6 font-semibold text-slate-900">
    A Grupo IVVA é um hub completo de soluções empresariais.
  </p>
</div>
        
      </section>

      {/* CTA FINAL */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
  Fale com um especialista e descubra a melhor estratégia para sua empresa.
</h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-emerald-600 text-white font-bold px-6 py-3 hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle size={18} className="mr-2" />
            Chamar no WhatsApp
          </a>

          <p className="mt-5 text-xs text-slate-500">
            * Atendimento consultivo e intermediação conforme parceiros. Sujeito
            à análise e condições das instituições/parceiros.
          </p>
        </div>
      </section>
    </div>
  );
}
