import { services } from "../data/clinic";
import { clinic } from "../data/clinic";
import { whatsappUrl } from "../utils";

export default function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <div className="section-heading center">
          <span>O QUE FAZEMOS</span>
          <h2>Cuidados para todas as fases da vida.</h2>
          <p>Serviços pensados para acompanhar a saúde do seu pet com prevenção, atenção e orientação.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href={whatsappUrl(clinic.whatsapp, `Olá! Gostaria de saber mais sobre ${service.title}.`)}
                target="_blank"
                rel="noreferrer"
              >
                Saiba mais →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}