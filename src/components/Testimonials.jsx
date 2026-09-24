import { testimonials } from "../data/clinic";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-heading center">
          <span>QUEM CONFIA</span>
          <h2>Experiências que aquecem o coração.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial" key={item.name}>
              <div className="stars">★★★★★</div>
              <p>“{item.text}”</p>
              <strong>{item.name}</strong>
              <small>{item.pet}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}