import { clinic } from "../data/clinic";
import PetImage from "./PetImage";
import { whatsappUrl } from "../utils";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">● Cuidado veterinário com carinho</span>
          <h1>Saúde, carinho e <em>confiança</em> para o seu pet.</h1>
          <p>
            Atendimento veterinário humanizado para cães e gatos, com uma equipe
            preparada para cuidar de cada etapa da vida do seu melhor amigo.
          </p>

          <div className="actions">
            <a className="button primary" href={whatsappUrl(clinic.whatsapp)} target="_blank" rel="noreferrer">
              💬 Agendar pelo WhatsApp
            </a>
            <a className="button secondary" href="#servicos">
              Conhecer serviços →
            </a>
          </div>

          <div className="trust">
            <span>🐶</span><span>🐱</span><span>🐾</span>
            <div>
              <strong>Atendimento próximo e cuidadoso</strong>
              <small>Seu pet tratado como parte da família.</small>
            </div>
          </div>
        </div>

        <div className="hero-photo">
          <PetImage
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=85"
            alt="Cachorro recebendo carinho"
          />
          <div className="photo-badge top">⭐ <strong>5.0</strong><small>Avaliação dos tutores</small></div>
          <div className="photo-badge bottom">✓ <strong>Cuidado completo</strong><small>Do check-up à prevenção</small></div>
        </div>
      </div>
    </section>
  );
}