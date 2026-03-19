import { cn } from '@/utils';
import styles from './Badge.module.css';

export function Badge({ children, variant = 'default', size = 'md', className, ...props }) {
  return (
    <span className={cn(styles.badge, styles[variant], styles[size], className)} {...props}>
      {children}
    </span>
  );
}
