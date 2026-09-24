export function whatsappUrl(number, message = "Olá! Gostaria de agendar um atendimento para o meu pet.") {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}