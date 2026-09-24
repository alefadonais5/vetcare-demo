import { clinic } from "../data/clinic";

export default function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="brand">
          <span className="brand-icon">🐾</span>
          <span><strong>{clinic.name}</strong><small>{clinic.subtitle}</small></span>
        </div>
        <p>© {new Date().getFullYear()} {clinic.name}. Página demonstrativa — informações e imagens utilizadas apenas para apresentação do modelo..</p>
        <a href={clinic.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
}