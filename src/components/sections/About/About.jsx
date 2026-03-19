import { motion } from 'framer-motion';
import { Code2, Server, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/context';
import { profile } from '@/data/profile';
import { Section } from '@/components/layout';
import { Card } from '@/components/ui';
import styles from './About.module.css';

const highlights = [
  {
    icon: Server,
    title: 'Arquitectura de Microservicios',
    description: 'Diseño e implementación de ecosistemas escalables con Spring Cloud',
  },
  {
    icon: Shield,
    title: 'Integraciones Empresariales',
    description: 'Expertise en APIC, ACE, DataPower y arquitecturas híbridas',
  },
  {
    icon: Zap,
    title: 'Optimización de Rendimiento',
    description: 'Resolución de problemas complejos en entornos distribuidos',
  },
  {
    icon: Code2,
    title: 'APIs & Contratos',
    description: 'Diseño OpenAPI/Swagger con herencias, polimorfismo y ejemplos complejos',
  },
];

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <Section.Header title={t('about.title')} />

      <div className={styles.grid}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.description}>{t('about.description')}</p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>4+</span>
              <span className={styles.statLabel}>Años de experiencia</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>APIs diseñadas</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Integraciones exitosas</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.cardsGrid}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {highlights.map((item, index) => (
            <Card key={index} className={styles.highlightCard}>
              <item.icon className={styles.highlightIcon} />
              <h3 className={styles.highlightTitle}>{item.title}</h3>
              <p className={styles.highlightDescription}>{item.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
