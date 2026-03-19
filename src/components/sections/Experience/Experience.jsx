import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/context';
import { profile } from '@/data/profile';
import { Section } from '@/components/layout';
import { Card, Badge } from '@/components/ui';
import styles from './Experience.module.css';

export function Experience() {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState(null);

  return (
    <Section id="experience">
      <Section.Header title={t('experience.title')} />

      <div className={styles.timeline}>
        {profile.experience.map((job, index) => (
          <motion.div
            key={job.id}
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.timelineMarker}>
              <div className={styles.markerDot} />
            </div>

            <Card
              className={styles.jobCard}
              onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
              hover={false}
            >
              <div className={styles.jobHeader}>
                <div className={styles.jobMain}>
                  <div className={styles.jobTitleRow}>
                    <h3 className={styles.jobRole}>{job.role}</h3>
                    <ChevronDown
                      className={`${styles.chevron} ${expandedId === job.id ? styles.expanded : ''}`}
                    />
                  </div>
                  <div className={styles.jobCompany}>{job.company}</div>
                  {job.project && <div className={styles.jobProject}>Proyecto: {job.project}</div>}
                </div>

                <div className={styles.jobMeta}>
                  <span className={styles.jobMetaItem}>
                    <Calendar size={14} />
                    {job.period}
                  </span>
                  <span className={styles.jobMetaItem}>
                    <MapPin size={14} />
                    {job.location}
                  </span>
                </div>
              </div>

              <motion.div
                className={styles.jobDetails}
                initial={false}
                animate={{ height: expandedId === job.id ? 'auto' : 0, opacity: expandedId === job.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.highlights}>
                  <h4 className={styles.highlightsTitle}>Responsabilidades</h4>
                  <ul className={styles.highlightsList}>
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className={styles.highlightItem}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.techStack}>
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="tech" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
