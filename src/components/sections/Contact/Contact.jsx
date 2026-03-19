import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context';
import { profile } from '@/data/profile';
import { Section } from '@/components/layout';
import { Button, Card } from '@/components/ui';
import styles from './Contact.module.css';

export function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Section id="contact" className={styles.section}>
      <Section.Header title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <div className={styles.grid}>
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className={styles.infoCard}>
            <div className={styles.contactItems}>
              <a href={`mailto:${profile.contact.email}`} className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className={styles.contactLabel}>{t('contact.email')}</span>
                  <span className={styles.contactValue}>{profile.contact.email}</span>
                </div>
              </a>

              <a href={`tel:${profile.contact.phone}`} className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={20} />
                </div>
                <div>
                  <span className={styles.contactLabel}>{t('contact.phone')}</span>
                  <span className={styles.contactValue}>{profile.contact.phone}</span>
                </div>
              </a>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span className={styles.contactLabel}>{t('contact.location')}</span>
                  <span className={styles.contactValue}>
                    {profile.contact.location}
                    <br />
                    {profile.contact.locationDetail}
                  </span>
                </div>
              </div>
            </div>

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
          </Card>
        </motion.div>

        <motion.div
          className={styles.contactForm}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className={styles.formCard}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.input}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  className={styles.textarea}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  placeholder="¿En qué puedo ayudarte?"
                  rows={5}
                />
              </div>

              <Button type="submit" variant="primary" loading={isSubmitting} icon={<Send size={18} />}>
                {submitted ? '¡Mensaje enviado!' : t('contact.send')}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
