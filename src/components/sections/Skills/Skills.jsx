import { motion } from 'framer-motion';
import { Layers, Server, Code, Cloud } from 'lucide-react';
import { useLanguage } from '@/context';
import { profile } from '@/data/profile';
import { Section } from '@/components/layout';
import { Badge } from '@/components/ui';
import styles from './Skills.module.css';

const categoryIcons = {
  integration: Layers,
  backend: Server,
  frontend: Code,
  devops: Cloud,
};

const categoryColors = {
  integration: 'blue',
  backend: 'teal',
  frontend: 'amber',
  devops: 'default',
};

export function Skills() {
  const { t } = useLanguage();

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'success';
      case 'Advanced':
        return 'default';
      case 'Intermediate':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Section id="skills" className={styles.section}>
      <Section.Header title={t('skills.title')} />

      <div className={styles.grid}>
        {Object.entries(profile.skills).map(([category, skills], catIndex) => {
          const Icon = categoryIcons[category];
          const color = categoryColors[category];

          return (
            <motion.div
              key={category}
              className={styles.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className={styles.categoryHeader}>
                <Icon className={styles.categoryIcon} />
                <h3 className={styles.categoryTitle}>{t(`skills.categories.${category}`)}</h3>
              </div>

              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                  >
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <Badge variant={getLevelColor(skill.level)} size="sm">
                        {skill.level}
                      </Badge>
                    </div>
                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: catIndex * 0.1 + index * 0.05 }}
                      >
                        <div
                          className={styles.skillFill}
                          style={{
                            width: `${(skill.years / 4) * 100}%`,
                            backgroundColor:
                              skill.level === 'Expert'
                                ? 'var(--accent-secondary)'
                                : skill.level === 'Advanced'
                                  ? 'var(--accent-primary)'
                                  : 'var(--accent-tertiary)',
                          }}
                        />
                      </motion.div>
                    </div>
                    <span className={styles.skillYears}>{skill.years}+ años</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
