import { cn } from '@/utils';
import styles from './Card.module.css';

export function Card({ children, className, hover = true, ...props }) {
  return (
    <div className={cn(styles.card, hover && styles.hover, className)} {...props}>
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn(styles.header, className)} {...props}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className, ...props }) {
  return (
    <div className={cn(styles.body, className)} {...props}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn(styles.footer, className)} {...props}>
      {children}
    </div>
  );
};
