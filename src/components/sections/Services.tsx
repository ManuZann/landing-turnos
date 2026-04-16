import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import styles from './Services.module.css';

const servicesList = [
  {
    id: 'medicina-general',
    title: 'Medicina General',
    description: 'Atención primaria, chequeos preventivos y seguimiento de patologías crónicas con calidez humana.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
    )
  },
  {
    id: 'estetica-avanzada',
    title: 'Estética Avanzada',
    description: 'Tratamientos faciales y corporales mínimamente invasivos con resultados naturales y duraderos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="6.5"></line></svg>
    )
  },
  {
    id: 'nutricion',
    title: 'Nutrición Clínica',
    description: 'Planes de alimentación personalizados, control de peso y educación nutricional integral.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    )
  },
  {
    id: 'dermatologia',
    title: 'Dermatología',
    description: 'Diagnóstico y tratamiento de enfermedades de la piel, control de lunares y cuidado capilar.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
    )
  }
];

export function Services() {
  return (
    <Section id="servicios" background="white">
      <Reveal direction="up" delay={0.1}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nuestras Especialidades</h2>
          <p className={styles.subtitle}>
            Un equipo multidisciplinario dispuesto a brindarte la mejor calidad en atención médica integral.
          </p>
        </div>
      </Reveal>

      <div className={styles.grid}>
        {servicesList.map((service, index) => (
          <Reveal key={service.id} direction="up" delay={0.1 * (index + 1)}>
            <article className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
