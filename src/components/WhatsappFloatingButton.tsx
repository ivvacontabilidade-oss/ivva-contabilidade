import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5562991872371?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20IVVA%20e%20quero%20falar%20com%20um%20especialista.";

export default function WhatsappFloatingButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-5 py-3 text-white font-bold shadow-lg hover:bg-emerald-700 transition-colors"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:block">WhatsApp</span>
    </a>
  );
}
