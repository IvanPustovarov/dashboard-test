import { TextareaHTMLAttributes, forwardRef } from 'react';
import styles from './textarea.module.css';

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> & {
  value: string;
  onChange: (value: string) => void;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, value, onChange, ...props }, ref) => {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        ref={ref}
        className={`${styles.textarea} ${className}`}
        {...props}
      />
    );
  }
);