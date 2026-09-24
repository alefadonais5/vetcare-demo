import { clinic } from "../data/clinic";
import { whatsappUrl } from "../utils";

export default function InfoBar() {
  return (
    <section className="info-bar">
      <div className="container info-grid">
        <div><span>📍</span><small>Estamos em</small><strong>{clinic.city}</strong></div>
        <div><span>🕐</span><small>Horário</small><strong>08h às 18h</strong></div>
        <div><span>☎</span><small>Fale conosco</small><strong>{clinic.phone}</strong></div>
        <a href={whatsappUrl(clinic.whatsapp)} target="_blank" rel="noreferrer">Agendar atendimento →</a>
      </div>
    </section>
  );
}