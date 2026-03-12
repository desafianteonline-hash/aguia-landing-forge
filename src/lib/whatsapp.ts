const WHATSAPP_NUMBER = "5581999414376";
const WHATSAPP_MESSAGE = encodeURIComponent("Gostaria de um orçamento 😊");

export const getWhatsAppUrl = (message?: string) => {
  const msg = message ? encodeURIComponent(message) : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};
