import styles from './Hero.module.css';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function Hero() {
  const scrollToBooking = () => {
    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Reveal direction="up" delay={0.1}>
            <div className={styles.badge}>Atención médica de excelencia</div>
          </Reveal>
          
          <Reveal direction="up" delay={0.2}>
            <h1 className={styles.title}>
              Tu salud y bienestar en <span className={styles.highlight}>manos expertas</span>
            </h1>
          </Reveal>
          
          <Reveal direction="up" delay={0.3}>
            <p className={styles.description}>
              Centro Médico Nova te ofrece atención personalizada, tecnología de vanguardia y un equipo de profesionales comprometidos con tu salud integral y estética.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <div className={styles.actions}>
              <Button size="lg" onClick={scrollToBooking}>
                Reservar Turno Ahora
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
                Conocer Especialidades
              </Button>
            </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.5}>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>+15</span>
                <span className={styles.statLabel}>Especialidades</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>+10k</span>
                <span className={styles.statLabel}>Pacientes felices</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.9/5</span>
                <span className={styles.statLabel}>Valoración</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.4} className={styles.imageWrapper}>
          {/* Abstract geometric shapes reflecting a clean medical/aesthetic vibe without stock photos */}
          <div className={styles.imageBox}>
            <div className={styles.abstractBlob}></div>
            <div className={styles.cardFloating} aria-hidden="true">
              <div className={styles.cardAvatar}></div>
              <div className={styles.cardLines}>
                <div className={styles.line}></div>
                <div className={styles.lineShort}></div>
              </div>
              <div className={styles.checkIcon}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
            <div className={`${styles.cardFloating} ${styles.cardFloatingBottom}`} aria-hidden="true">
              <span className={styles.verifiedBadge}>✔ Turno Confirmado</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
