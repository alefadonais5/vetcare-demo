import { clinic } from "../data/clinic";
import PetImage from "./PetImage";
import { whatsappUrl } from "../utils";

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container two-columns">
        <div className="about-image">
          <PetImage
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1100&q=85"
            alt="Veterinária cuidando de um cachorro"
          />
          <div className="experience">🐾 <strong>Cuidado</strong><small>em cada atendimento</small></div>
        </div>

        <div className="about-text">
          <span> SOBRE A {clinic.name.toUpperCase()} </span>
          <h2>Seu pet merece ser cuidado com atenção de verdade.</h2>
          <p>
            A VetCare nasceu para oferecer uma experiência mais tranquila para
            tutores e pets, unindo atendimento próximo, prevenção e orientação clara.
          </p>

          <ul>
            <li>✓ Atendimento humanizado</li>
            <li>✓ Ambiente acolhedor</li>
            <li>✓ Orientação clara para os tutores</li>
            <li>✓ Foco em prevenção e bem-estar</li>
          </ul>

          <a className="text-link" href={whatsappUrl(clinic.whatsapp)} target="_blank" rel="noreferrer">
            Falar com a equipe →
          </a>
        </div>
      </div>
    </section>
  );
}