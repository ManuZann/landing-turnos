import { useEffect, useRef, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import styles from './Reveal.module.css';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  className = ''
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Fallback if IntersectionObserver is not supported (VERY old browsers)
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animated, we don't need to observe anymore
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const style: CSSProperties = {
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`,
  };

  const classes = [
    styles.reveal,
    styles[direction],
    isVisible ? styles.visible : '',
    className
  ].join(' ').trim();

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}
