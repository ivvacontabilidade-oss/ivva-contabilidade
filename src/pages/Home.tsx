import Hero from '../components/Hero';
import ProblemsSection from '../components/Problems';
import ServicesSection from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="bg-white">
      <SEO 
        title="Contabilidade Consultiva e Estratégica"
        description="Transforme a gestão da sua empresa com a IVVA Contabilidade. Soluções estratégicas, BPO Financeiro e consultoria para o crescimento do seu negócio."
        canonical="https://ivvacontabilidade.com.br/"
        ogImage="https://i.ibb.co/XZMwp3xR/logo-ivva-master-transparente.png"
      />
      <Hero />
      <ProblemsSection />
      <ServicesSection />
      
      {/* Differentiators Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-blue-500 rounded-xl bg-blue-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Atendimento Consultivo</h3>
              <p className="text-blue-100 text-sm">Não somos apenas emissores de guias. Somos parceiros estratégicos.</p>
            </div>
            <div className="p-6 border border-blue-500 rounded-xl bg-blue-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Visão Estratégica</h3>
              <p className="text-blue-100 text-sm">Foco total no crescimento e sustentabilidade do seu negócio.</p>
            </div>
            <div className="p-6 border border-blue-500 rounded-xl bg-blue-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Transparência Total</h3>
              <p className="text-blue-100 text-sm">Clareza em cada número e decisão tomada.</p>
            </div>
            <div className="p-6 border border-blue-500 rounded-xl bg-blue-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Tecnologia de Ponta</h3>
              <p className="text-blue-100 text-sm">Processos ágeis e digitais para facilitar sua vida.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Pronto para transformar a gestão da sua empresa?</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
