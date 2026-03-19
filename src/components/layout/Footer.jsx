import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3 className={styles.title}>{profile.name}</h3>
            <p className={styles.subtitle}>
              {profile.title} | {profile.subtitle}
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contacto</h4>
            <ul className={styles.contactList}>
              <li>
                <a href={`mailto:${profile.contact.email}`} className={styles.contactLink}>
                  <Mail size={16} />
                  {profile.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.contact.phone}`} className={styles.contactLink}>
                  <Phone size={16} />
                  {profile.contact.phone}
                </a>
              </li>
              <li className={styles.contactLink}>
                <MapPin size={16} />
                {profile.contact.location}
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Redes</h4>
            <div className={styles.socialLinks}>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {currentYear} {profile.name}. Todos los derechos reservados.</p>
          <p className={styles.techStack}>Construido con React + Vite + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
