import { useState } from 'react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: '¿Atienden con prepagas y obras sociales?',
    answer: 'Sí, trabajamos con la mayoría de las prepagas del país (OSDE, Swiss Medical, Galeno, Medifé, entre otras). Al momento de reservar tu turno, podrás indicar tu cobertura y verificar si tiene copago.'
  },
  {
    question: '¿Puedo cancelar o reprogramar mi turno online?',
    answer: 'Absolutamente. En el email de confirmación recibirás un enlace seguro donde podrás cancelar o modificar tu turno hasta 24 horas antes sin ningún cargo.'
  },
  {
    question: '¿Realizan estudios de diagnóstico en el centro?',
    answer: 'Sí, contamos con un área especializada en diagnóstico por imágenes y laboratorio, lo que te permite resolver tus consultas y estudios en un mismo lugar.'
  },
  {
    question: '¿Qué especialidades ofrecen por telemedicina?',
    answer: 'Ofrecemos consultas virtuales para Medicina General, Nutrición, Psicología y seguimiento de algunas patologías Dermatológicas. Podés elegir la modalidad "Virtual" al sacar el turno.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="preguntas-frecuentes" background="light" containerSize="md">
      <Reveal direction="up" delay={0.1}>
        <div className={styles.header}>
          <h2 className={styles.title}>Preguntas Frecuentes</h2>
          <p className={styles.subtitle}>Resolvemos tus dudas principales sobre nuestros servicios y atención.</p>
        </div>
      </Reveal>

      <div className={styles.accordion}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={index} direction="up" delay={0.1 * (index + 1)}>
              <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
                <button 
                  className={styles.question} 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <svg 
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div 
                  className={styles.answerWrapper}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answer}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
