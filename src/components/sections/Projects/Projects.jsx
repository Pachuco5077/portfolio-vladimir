import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { profile } from '@/data/profile';
import { Section } from '@/components/layout';
import { Card, Badge } from '@/components/ui';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <Section id="projects">
      <Section.Header title="Proyectos Destacados" subtitle="Trabajos que demuestran mi experiencia técnica" />

      <div className={styles.grid}>
        {profile.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={styles.projectCard} hover>
              <div className={styles.projectIcon}>
                <FolderGit2 size={32} />
              </div>

              <Badge variant="success" size="sm">
                {project.category}
              </Badge>

              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectTech}>
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="tech" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
