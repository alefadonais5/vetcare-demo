import { clinic } from "../data/clinic";

export default function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="brand">
          <span className="brand-icon">🐾</span>
          <span><strong>{clinic.name}</strong><small>{clinic.subtitle}</small></span>
        </div>
        <p>© {new Date().getFullYear()} {clinic.name}. Todos os direitos reservados.</p>
        <a href={clinic.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
}