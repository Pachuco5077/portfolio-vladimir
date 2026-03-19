import { motion } from 'framer-motion'
import { FolderGit2, Globe, ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '@/context'
import { profile } from '@/data/profile'
import { Section } from '@/components/layout'
import { Card, Badge } from '@/components/ui'
import styles from './Projects.module.css'

const freelanceProject = {
  id: 'mastaxserv',
  title: 'MastaXServ - Servicios Freelance',
  description:
    'Sitio web profesional para servicios freelance de desarrollo web, hosting y SEO. Diseño moderno y responsive.',
  technologies: ['React', 'HTML/CSS', 'JavaScript', 'SEO', 'Hosting'],
  category: 'Freelance',
  url: 'https://mastaxserv.com',
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section id="projects">
      <Section.Header title={t('projects.title')} subtitle={t('projects.subtitle')} />

      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Card className={styles.projectCard} hover>
            <div className={styles.projectIcon}>
              <Globe size={32} />
            </div>

            <Badge variant="success" size="sm">
              {freelanceProject.category}
            </Badge>

            <h3 className={styles.projectTitle}>{freelanceProject.title}</h3>
            <p className={styles.projectDescription}>{freelanceProject.description}</p>

            <div className={styles.projectTech}>
              {freelanceProject.technologies.map(tech => (
                <Badge key={tech} variant="tech" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className={styles.projectLinks}>
              <a
                href={freelanceProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <ExternalLink size={16} />
                Visitar sitio
              </a>
            </div>
          </Card>
        </motion.div>

        {profile.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
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
                {project.technologies.map(tech => (
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
  )
}
