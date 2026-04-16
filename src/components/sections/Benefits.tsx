import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import styles from './Benefits.module.css';

export function Benefits() {
  return (
    <Section id="beneficios" background="light">
      <div className={styles.container}>
        <Reveal direction="right" delay={0.2} className={styles.imageCol}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.decorativeCircle}></div>
            <div className={styles.decorativeDots}></div>
          </div>
        </Reveal>
        
        <div className={styles.contentCol}>
          <Reveal direction="up" delay={0.1}>
            <h2 className={styles.title}>Por qué elegir <span className={styles.highlight}>Nova Salud</span></h2>
            <p className={styles.description}>
              Nos destacamos por ofrecer una experiencia centrada en el paciente, priorizando tu bienestar desde el primer contacto hasta el alta clínica.
            </p>
          </Reveal>
          
          <ul className={styles.list}>
            <Reveal direction="up" delay={0.2}>
              <li className={styles.listItem}>
                <div className={styles.iconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h3 className={styles.itemTitle}>Profesionales Certificados</h3>
                  <p className={styles.itemDescription}>Nuestro equipo médico está en constante actualización y cuenta con amplia trayectoria en cada especialidad.</p>
                </div>
              </li>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <li className={styles.listItem}>
                <div className={styles.iconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <h3 className={styles.itemTitle}>Atención sin demoras</h3>
                  <p className={styles.itemDescription}>Respetamos tu tiempo. Nuestro sistema de turnos está optimizado para garantizar puntualidad.</p>
                </div>
              </li>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <li className={styles.listItem}>
                <div className={styles.iconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div>
                  <h3 className={styles.itemTitle}>Tecnología de Vanguardia</h3>
                  <p className={styles.itemDescription}>Equipamiento de última generación para diagnósticos precisos y tratamientos eficaces.</p>
                </div>
              </li>
            </Reveal>
          </ul>
        </div>
      </div>
    </Section>
  );
}
