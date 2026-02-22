import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Obrigado() {
  return (
    <div className="pt-20">
      <SEO
        title="Mensagem enviada | IVVA Contabilidade"
        description="Recebemos sua mensagem. Em breve entraremos em contato."
        canonical="https://ivvacontabilidade.online/obrigado"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-10 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-9 h-9 text-green-600" />
            </div>

            <h1 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
              Mensagem enviada com sucesso!
            </h1>

            <p className="mt-4 text-slate-600 text-lg">
              Recebemos seu contato e vamos responder o mais breve possível.
              Se preferir, você também pode falar direto com um especialista.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition"
              >
                <ArrowLeft size={18} />
                Voltar para o site
              </Link>

              <a
                href="https://wa.me/5562999999999?text=Olá!%20Enviei%20uma%20mensagem%20pelo%20site%20e%20gostaria%20de%20um%20retorno."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Dica: confira sua caixa de spam/lixo eletrônico caso não veja nosso retorno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
