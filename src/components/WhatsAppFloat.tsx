import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppFloat = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      <span className="rounded-lg bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-lg">
        Posso ajudar? 😊
      </span>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] shadow-lg transition-transform hover:scale-110 hover:shadow-xl md:h-16 md:w-16">
        <WhatsAppIcon className="h-7 w-7 text-white md:h-8 md:w-8" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
