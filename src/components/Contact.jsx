import { clinic } from "../data/clinic";
import { whatsappUrl } from "../utils";

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container contact-grid">
        <div>
          <span>VAMOS CONVERSAR</span>
          <h2>Pronto para cuidar melhor do seu pet?</h2>
          <p>Fale com nossa equipe pelo WhatsApp e encontre o melhor horário para o atendimento.</p>
          <a className="button white" href={whatsappUrl(clinic.whatsapp)} target="_blank" rel="noreferrer">
            💬 Agendar pelo WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <div><span>📍</span><small>Endereço</small><strong>{clinic.address}</strong></div>
          <div><span>🕐</span><small>Horários</small><strong>{clinic.hours}</strong></div>
          <div><span>☎</span><small>Telefone</small><strong>{clinic.phone}</strong></div>
          <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">Ver localização no mapa →</a>
        </div>
      </div>
    </section>
  );
}