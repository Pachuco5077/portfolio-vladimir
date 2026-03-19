import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui';
import styles from './Hero.module.css';

const terminalLines = [
  { type: 'input', text: 'whoami' },
  { type: 'output', text: 'vladimir.delaguardia' },
  { type: 'input', text: 'cat role.json' },
  { type: 'output', text: '{' },
  { type: 'output', text: '  "role": "Ingeniero de Software",' },
  { type: 'output', text: '  "focus": "Integraciones & APIs",' },
  { type: 'output', text: '  "experience": "4+ años"' },
  { type: 'output', text: '}' },
  { type: 'input', text: './contact.sh', cursor: true },
];

export function Hero() {
  const { t } = useLanguage();
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const line = terminalLines[currentLine];
    if (!line) return;

    if (line.type === 'input') {
      if (currentChar < line.text.length) {
        const timer = setTimeout(() => setCurrentChar((c) => c + 1), 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        }, 300);
        return () => clearTimeout(timer);
      }
    } else if (line.type === 'output' && line.cursor) {
      setShowCursor(true);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, line.pause ? 500 : 100);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((s) => !s);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.grid} />
        <div className={styles.glow} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.terminalTitle}>terminal</span>
            </div>

            <div className={styles.terminalBody}>
              {terminalLines.slice(0, currentLine).map((line, i) => (
                <div key={i} className={line.type === 'input' ? styles.inputLine : styles.outputLine}>
                  {line.type === 'input' && <span className={styles.prompt}>&gt;</span>}
                  <span>{line.text}</span>
                </div>
              ))}

              {currentLine < terminalLines.length && (
                <div className={styles.inputLine}>
                  <span className={styles.prompt}>&gt;</span>
                  <span>
                    {terminalLines[currentLine].text.slice(0, currentChar)}
                    {showCursor && <span className={styles.cursor} />}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className={styles.ctas}>
            <Button variant="primary" icon={<Download size={18} />}>
              {t('hero.cta.cv')}
            </Button>
            <Button variant="secondary" icon={<Mail size={18} />} onClick={scrollToAbout}>
              {t('hero.cta.contact')}
            </Button>
          </div>

          <div className={styles.techBadges}>
            {['IBM API Connect', 'Spring Boot', 'React', 'IBM MQ', 'PostgreSQL'].map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.button
          className={styles.scrollIndicator}
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown className={styles.scrollIcon} />
        </motion.button>
      </div>
    </section>
  );
}
