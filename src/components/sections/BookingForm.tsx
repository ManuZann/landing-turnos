import { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import styles from './BookingForm.module.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  specialty: string;
}

const specialties = [
  'Medicina General',
  'Estética y Dermatología',
  'Nutrición y Dietética',
  'Ginecología',
  'Cardiología',
  'Odontología'
];

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    specialty: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', phone: '', email: '', specialty: '' });
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="reservar" background="white" containerSize="md">
      <Reveal direction="up" delay={0.2}>
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>Solicitá tu turno online</h2>
            <p className={styles.subtitle}>Completá el formulario y nos contactaremos a la brevedad para confirmar tu horario.</p>
          </div>

          {isSuccess ? (
            <div className={styles.successMessage} aria-live="polite">
              <div className={styles.successIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3>¡Solicitud enviada con éxito!</h3>
              <p>Gracias por elegirnos, <strong>{formData.name.split(' ')[0]}</strong>.<br/> Te enviaremos un WhatsApp a la brevedad para coordinar la fecha y hora.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={styles.input} 
                  required 
                  placeholder="Ej. Juan Pérez"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.gridContainer}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Teléfono / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className={styles.input} 
                    required 
                    placeholder="Ej. +54 9 11..."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className={styles.input} 
                    required 
                    placeholder="Ej. correo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="specialty" className={styles.label}>Especialidad requerida</label>
                <select 
                  id="specialty" 
                  name="specialty" 
                  className={styles.select} 
                  required
                  value={formData.specialty}
                  onChange={handleChange}
                >
                  <option value="" disabled>Seleccioná una especialidad...</option>
                  {specialties.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                fullWidth 
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Procesando solicitud...' : 'Solicitar Turno'}
              </Button>
              
              <p className={styles.disclaimer}>
                Al enviar tu solicitud estás aceptando nuestra <a href="#">Política de Privacidad</a>.
              </p>
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
