import { team } from "../data/clinic";
import PetImage from "./PetImage";

export default function Team() {
  return (
    <section id="equipe" className="section">
      <div className="container">
        <div className="section-heading center">
          <span>NOSSA EQUIPE</span>
          <h2>Profissionais que cuidam com propósito.</h2>
          <p>Uma equipe preparada para ouvir, orientar e cuidar.</p>
        </div>

        <div className="team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <PetImage src={person.image} alt={person.name} />
              <div><h3>{person.name}</h3><p>{person.role}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}