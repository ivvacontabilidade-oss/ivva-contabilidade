import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto">
      <div className="p-10 bg-white">
        <form
          className="space-y-6"
          action="https://formsubmit.co/contato@ivvacontabilidade.online"
          method="POST"
        >
          {/* Configurações FormSubmit */}
          <input type="hidden" name="_next" value="https://ivvacontabilidade.online/obrigado" />
          <input type="hidden" name="_subject" value="Novo contato pelo site - IVVA Contabilidade" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_honey" style={{ display: "none" }} />
          <input
            type="hidden"
            name="_autoresponse"
            value="Recebemos sua mensagem! Em breve um especialista da IVVA entrará em contato."
          />

          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Seu nome"
            />
          </div>

          {/* Telefone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Telefone / WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                required
                inputMode="tel"
                autoComplete="tel"
                maxLength={15}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "").slice(0, 11);
                  const formatted =
                    v.length <= 10
                      ? v
                          .replace(/^(\d{2})(\d)/, "($1) $2")
                          .replace(/(\d{4})(\d)/, "$1-$2")
                      : v
                          .replace(/^(\d{2})(\d)/, "($1) $2")
                          .replace(/(\d{5})(\d)/, "$1-$2");
                  e.target.value = formatted;
                }}
                pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
                title="Informe um telefone válido com DDD"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="(62) 99187-2371"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          {/* Empresa (Opcional) */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nome da Empresa (opcional)
            </label>
            <input
              type="text"
              name="company"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Se ainda não tiver empresa, pode deixar em branco"
            />
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              O que você deseja resolver?
            </label>
            <select
              name="goal"
              defaultValue=""
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="Abrir empresa">Abrir empresa</option>
              <option value="Trocar de contador">Trocar de contador</option>
              <option value="Pagar menos imposto">Pagar menos imposto</option>
              <option value="Organizar financeiro">Organizar financeiro</option>
              <option value="Regularizar pendencias">Regularizar pendências</option>
              <option value="Crédito ou consórcio">Crédito / Consórcio</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          {/* Mensagem */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              O que você precisa resolver? *
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Ex.: reduzir impostos, organizar financeiro, abrir empresa..."
            ></textarea>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>Quero falar com um especialista</span>
            <Send size={18} />
          </button>

          <p className="text-xs text-slate-500 text-center">
            Seus dados estão protegidos. Entraremos em contato pelo telefone informado.
          </p>
        </form>
      </div>
    </div>
  );
}
