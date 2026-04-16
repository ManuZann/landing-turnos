import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    title: 'Elegí tu especialidad',
    description: 'Navegá por nuestras más de 15 especialidades médicas y estéticas para encontrar la atención que buscás.'
  },
  {
    number: '02',
    title: 'Seleccioná el horario',
    description: 'Visualizá la disponibilidad en tiempo real de nuestros profesionales y elegí el turno que mejor se adapte a vos.'
  },
  {
    number: '03',
    title: 'Confirmá y asistí',
    description: 'Completá tus datos para asegurar la reserva y recibirás al instante un recordatorio por WhatsApp o email.'
  }
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" background="white">
      <Reveal direction="up" delay={0.1}>
        <div className={styles.header}>
          <h2 className={styles.title}>Reservar es muy simple</h2>
          <p className={styles.subtitle}>
            Diseñamos un proceso ágil para que conseguir tu turno online te tome solo un par de minutos, sin llamadas ni esperas.
          </p>
        </div>
      </Reveal>

      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <Reveal key={index} direction="up" delay={0.1 * (index + 1)} className={styles.step}>
            <div className={styles.stepNumber}>{step.number}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </Reveal>
        ))}
        {/* Decorative line connecting steps on destkop */}
        <div className={styles.connectingLine} aria-hidden="true"></div>
      </div>
    </Section>
  );
}
