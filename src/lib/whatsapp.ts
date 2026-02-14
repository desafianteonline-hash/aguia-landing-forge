const WHATSAPP_NUMBER = "558197259824";
const WHATSAPP_MESSAGE = encodeURIComponent("Gostaria de um orçamento 😊");

export const getWhatsAppUrl = (message?: string) => {
  const msg = message ? encodeURIComponent(message) : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};
