import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoBar from "./components/InfoBar";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { clinic } from "./data/clinic";
import { whatsappUrl } from "./utils";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoBar />
        <Services />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />

      <a
        className="whatsapp-float"
        href={whatsappUrl(clinic.whatsapp)}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </>
  );
}