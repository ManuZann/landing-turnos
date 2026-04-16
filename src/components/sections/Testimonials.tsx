import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'María Fernández',
    role: 'Paciente de Dermatología',
    content: 'Excelente atención. La doctora fue muy clara con el diagnóstico y el tratamiento me funcionó perfecto. El sistema de turnos es lo mejor: rapidísimo y sin vueltas.',
    rating: 5
  },
  {
    name: 'Carlos Rivas',
    role: 'Paciente de Clínica Médica',
    content: 'Me sorprendió la puntualidad. Fui por un chequeo general y las instalaciones están impecables. Definitivamente voy a seguir atendiéndome en Nova Salud.',
    rating: 5
  },
  {
    name: 'Sofía Álvarez',
    role: 'Paciente de Estética',
    content: 'Me sentí súper contenida. El trato humano es inmejorable, te explican cada detalle del procedimiento. Recomiendo el centro al 100%.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <Section id="testimonios" background="primary">
      <Reveal direction="up" delay={0.1}>
        <div className={styles.header}>
          <h2 className={styles.title}>Lo que dicen nuestros pacientes</h2>
          <p className={styles.subtitle}>
            Tu bienestar es nuestra prioridad. Cientos de pacientes confían diariamente en nosotros.
          </p>
        </div>
      </Reveal>

      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <Reveal key={index} direction="up" delay={0.1 * (index + 1)}>
            <div className={styles.card}>
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
              </div>
              <p className={styles.content}>"{testimonial.content}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
