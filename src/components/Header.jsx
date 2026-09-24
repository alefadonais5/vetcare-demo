import { useState } from "react";
import { clinic } from "../data/clinic";
import { whatsappUrl } from "../utils";

export default function Header() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="header">
      <div className="container nav">
        <a className="brand" href="#inicio" onClick={close}>
          <span className="brand-icon">🐾</span>
          <span>
            <strong>{clinic.name}</strong>
            <small>{clinic.subtitle}</small>
          </span>
        </a>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? "✕" : "☰"}
        </button>

        <nav className={open ? "nav-menu open" : "nav-menu"}>
          <a href="#inicio" onClick={close}>Início</a>
          <a href="#servicos" onClick={close}>Serviços</a>
          <a href="#sobre" onClick={close}>Sobre</a>
          <a href="#equipe" onClick={close}>Equipe</a>
          <a href="#contato" onClick={close}>Contato</a>
          <a className="nav-button" href={whatsappUrl(clinic.whatsapp)} target="_blank" rel="noreferrer">
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}