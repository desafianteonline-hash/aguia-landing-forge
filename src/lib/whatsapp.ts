const WHATSAPP_NUMBER = "5581999999999"; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para aquecedor de piscina.");

export const getWhatsAppUrl = (message?: string) => {
  const msg = message ? encodeURIComponent(message) : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};
