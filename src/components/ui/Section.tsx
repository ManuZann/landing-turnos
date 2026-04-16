import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary';
  containerSize?: 'md' | 'lg' | 'xl';
}

export function Section({
  id,
  children,
  className = '',
  background = 'white',
  containerSize = 'lg'
}: SectionProps) {
  const sectionClasses = [
    styles.section,
    styles[`bg-${background}`],
    className
  ].filter(Boolean).join(' ');

  const containerClasses = [
    styles.container,
    styles[`container-${containerSize}`]
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClasses}>
      <div className={containerClasses}>
        {children}
      </div>
    </section>
  );
}
