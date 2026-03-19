import { cn } from '@/utils';
import styles from './Section.module.css';

export function Section({ id, children, className, fullHeight = false, ...props }) {
  return (
    <section
      id={id}
      className={cn(styles.section, fullHeight && styles.fullHeight, className)}
      {...props}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
}

Section.Header = function SectionHeader({ title, subtitle, className, ...props }) {
  return (
    <div className={cn(styles.header, className)} {...props}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
